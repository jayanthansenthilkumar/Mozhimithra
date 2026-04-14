import { Bool, OpenAPIRoute } from "chanfana";
import { z } from "zod";
import { type AppContext, Task } from "../types";

export class TaskCreate extends OpenAPIRoute {
	schema = {
		tags: ["Tasks"],
		summary: "Create a new Task",
		request: {
			body: {
				content: {
					"application/json": {
						schema: Task,
					},
				},
			},
		},
		responses: {
			"200": {
				description: "Returns the created task",
				content: {
					"application/json": {
						schema: z.object({
							series: z.object({
								success: Bool(),
								result: z.object({
									task: Task,
								}),
							}),
						}),
					},
				},
			},
		},
	};

	async handle(c: AppContext) {
		// Get validated data
		const data = await this.getValidatedData<typeof this.schema>();

		// Retrieve the validated request body
		const taskToCreate = data.body;

		// Insert into D1
		await c.env.DB.prepare(
			"INSERT INTO gameTasks (id, categoryId, title, description, isUnlocked, slug) VALUES (?, ?, ?, ?, ?, ?)"
		)
			.bind(
				taskToCreate.id,
				taskToCreate.categoryId,
				taskToCreate.title,
				taskToCreate.description || null,
				taskToCreate.isUnlocked ? 1 : 0,
				taskToCreate.slug
			)
			.run();

		// return the new task
		return {
			success: true,
			task: taskToCreate,
		};
	}
}
