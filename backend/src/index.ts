import { fromHono } from "chanfana";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { TaskCreate } from "./endpoints/taskCreate";
import { TaskDelete } from "./endpoints/taskDelete";
import { TaskFetch } from "./endpoints/taskFetch";
import { TaskList } from "./endpoints/taskList";
import { mockRouter } from "./mockDataEndpoints";

// Start a Hono app
const app = new Hono<{ Bindings: Env }>();

// Setup CORS so UI applications can interact freely
app.use("/api/*", cors());

// Setup OpenAPI registry
const openapi = fromHono(app, {
	docs_url: "/",
});

// Register OpenAPI endpoints
openapi.get("/api/tasks", TaskList);
openapi.post("/api/tasks", TaskCreate);
openapi.get("/api/tasks/:taskSlug", TaskFetch);
openapi.delete("/api/tasks/:taskSlug", TaskDelete);

// Register migrated mock Express routes
app.route("/api", mockRouter);

// Export the Hono app
export default app;
