import { DateTime, Str } from "chanfana";
import type { Context } from "hono";
import { z } from "zod";

export type AppContext = Context<{ Bindings: Env }>;

export const Task = z.object({
	id: Str(),
	categoryId: Str(),
	title: Str(),
	description: Str({ required: false }),
	isUnlocked: z.union([z.boolean(), z.number()]).transform(v => Boolean(v)),
	slug: Str(),
});
