import { Hono } from "hono";

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

app.get("/", async (c) => {
  return c.json({ message: "Hello World" });
});
app.route("/api/v1/user", userRouter);

app.route("/api/v1/blog", blogRouter);

export default app;
