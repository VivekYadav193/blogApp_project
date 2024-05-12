import { Hono } from "hono";
import { cors } from "hono/cors";

import userRouter from "./routes/user";
import blogRouter from "./routes/blog";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
  Variables: {
    userId: string;
  };
}>();

app.use("/*", cors());

app.get("/", async (c) => {
  return c.json({ message: "Hello World" });
});
app.route("/api/v1/user", userRouter);

app.route("/api/v1/blog", blogRouter);

export default app;
