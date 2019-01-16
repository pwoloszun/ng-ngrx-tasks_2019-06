import { createSelector, createFeatureSelector } from '@ngrx/store';
import { reduce } from 'lodash';

import { featureName, TaskManagementState, TodosEntities, TransiotionMap } from './todos.reducer';
import { TodoModel } from '../services/todo.model';

const selectFeature = createFeatureSelector(featureName);

export const selectTodosEntities = createSelector(
  selectFeature,
  (state: TaskManagementState) => {
    return state.entities.todos;
  }
);

export const selectTodosAllIds = createSelector(
  selectFeature,
  (state: TaskManagementState) => {
    return state.result.todos;
  }
);

export const selectAllTodos = createSelector(
  selectTodosEntities,
  selectTodosAllIds,
  (entities: TodosEntities, allIds: number[]) => {
    return allIds.map((id) => entities[id]);
  }
);

export const selectListIsFetching = createSelector(
  selectFeature,
  (state: TaskManagementState) => {
    return state.isFetching.todoList;
  }
);

// TODO 1: selectIsDeletingTodos selector

// TODO 2a: selectIsEditingTodos selector

// TODO 2b: selectIsSavingTodos selector

// TODO 3: selectSavingTodos
