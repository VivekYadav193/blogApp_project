import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SigninType, SignupType } from "@vivek0913/common/dist";
import { BACKEND_URL } from "../config";
import axios from "axios";

interface LabelledInput {
    label: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInput) {
    return (
        <div>
            <label>{label}</label>
            <input
                className="border border-gray-400 rounded-md w-full p-2"
                type={type || "text"}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
}

const Auth = ({ type }: { type: "signup" | "signin" }) => {

    const navigate = useNavigate()
    const [signupdata, setsignupdata] = useState<SignupType>({
        email: "",
        password: "",
        name: "",
    });

    const [signinData, setsignindata] = useState<SigninType>({
        email: "",
        password: ""
    });

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (type === "signup") {
            console.log("Signup Data: ", signupdata);
            // Handle signup submission

            try {
                const respone = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, signupdata)
                const { jwt } = respone.data
                localStorage.setItem("jwt", jwt)
                navigate("/blogs")

            }
            catch (error) {
                let errorMessage
                if (error instanceof Error) {
                    errorMessage = error.message;
                }
                console.log(errorMessage);
            }


        } else {
            console.log("Signin Data: ", signinData);
            // Handle signin submission
            try {
                const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, signinData)
                const { jwt } = response.data
                localStorage.setItem("jwt", jwt)
                navigate("/blogs")
            }

            catch (error) {
                let errorMessage
                if (error instanceof Error) {
                    errorMessage = error.message;
                }
                console.log(errorMessage);
            }



        }
    };

    return (
        <div className="h-screen flex justify-center flex-col ">
            <div className="flex justify-center">
                <div>
                    <div className="text-3xl font-extrabold">
                        {type === "signup" ? "Create an Account" : "Sign In"}
                    </div>
                    <div className="mt-4">
                        {type === "signup" ? (
                            <span>Already have an account?</span>
                        ) : (
                            <span>Don't have an account?</span>
                        )}
                        <Link to={type === "signup" ? "/signin" : "/signup"} className="text-blue-500">
                            {type === "signup" ? "Sign In" : "Sign Up"}
                        </Link>
                    </div>
                    <div className="mt-4">
                        <form onSubmit={submitHandler}>
                            {type === "signup" && (
                                <LabelledInput
                                    label="Name"
                                    placeholder="John Doe"
                                    onChange={(e) => {
                                        setsignupdata({
                                            ...signupdata,
                                            name: e.target.value
                                        });
                                    }}
                                />
                            )}
                            <LabelledInput
                                label="Email"
                                placeholder="john.doe@example.com"
                                onChange={(e) => {
                                    if (type === "signup") {
                                        setsignupdata({
                                            ...signupdata,
                                            email: e.target.value
                                        });
                                    } else {
                                        setsignindata({
                                            ...signinData,
                                            email: e.target.value
                                        });
                                    }
                                }}
                            />
                            <LabelledInput
                                label="Password"
                                placeholder="*******"
                                type={"password"}
                                onChange={(e) => {
                                    if (type === "signup") {
                                        setsignupdata({
                                            ...signupdata,
                                            password: e.target.value
                                        });
                                    } else {
                                        setsignindata({
                                            ...signinData,
                                            password: e.target.value
                                        });
                                    }
                                }}
                            />
                            <button type="submit" className=" cursor-pointer bg-blue-500 text-white w-full rounded-md p-2 mt-4">
                                {type === "signup" ? "Sign Up" : "Sign In"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;
