import { fromHono } from "chanfana";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { TaskCreate } from "./endpoints/taskCreate";
import { TaskDelete } from "./endpoints/taskDelete";
import { TaskFetch } from "./endpoints/taskFetch";
import { TaskList } from "./endpoints/taskList";
import { mockRouter } from "./mockDataEndpoints";

// The API key the mobile app sends via X-API-Key.
// Change this value — then update EXPO_PUBLIC_API_KEY in the app's .env.
const API_KEY = "mozhimithra-dev-key";

// Start a Hono app
const app = new Hono<{ Bindings: Env }>();

// Setup CORS so UI applications can interact freely
app.use("/api/*", cors());

// API key guard — runs after CORS so pre-flight OPTIONS requests pass through
app.use("/api/*", async (c, next) => {
	if (c.req.method === "OPTIONS") return next();
	const key = c.req.header("X-API-Key");
	if (key !== API_KEY) {
		return c.json({ error: "Unauthorized" }, 401);
	}
	return next();
});

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
