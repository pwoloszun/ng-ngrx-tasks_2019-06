import { normalize, schema } from 'normalizr';

import { TodoModel } from '../services/todo.model';

export function normalizeTodos(todos: TodoModel[]) {
  const todoSchema = new schema.Entity('todos');
  const todoListSchema = {'todos': [todoSchema]};
  return normalize({todos}, todoListSchema);
}
