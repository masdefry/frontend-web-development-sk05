import * as z from 'zod'; 

export const createTodoSchema = z.object({
    description: z.string().min(1, 'Description is required').max(250, 'Description have maximum 250 characters')
}); 

export type TodoRequest = z.infer<typeof createTodoSchema>; 