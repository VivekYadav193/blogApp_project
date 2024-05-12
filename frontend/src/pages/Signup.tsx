import Auth from "../components/Auth"
import { Quote } from "../components/Quote"

const Signup = () => {
    return (
        <div className=" grid lg:grid-cols-2  grid-cols-1">

            <div>
                <Auth type={"signup"} />
            </div>

            <div className="invisible lg:visible">
                <Quote />
            </div>

        </div>
    )
}

export { Signup }