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

export const selectIsDeletingTodos = createSelector(
  selectFeature,
  (state: TaskManagementState) => {
    return state.isDeleting.todos;
  }
);

export const selectIsEditingTodos = createSelector(
  selectFeature,
  (state: TaskManagementState) => {
    return state.isEditing.todos;
  }
);

export const selectIsSavingTodos = createSelector(
  selectFeature,
  (state: TaskManagementState) => {
    return state.isSaving.todos;
  }
);

export const selectSavingTodos = createSelector(
  selectFeature,
  selectIsSavingTodos,
  selectTodosEntities,
  (
    state: TaskManagementState,
    savingTodos: TransiotionMap,
    entities: TodosEntities): TodoModel[] => {
    return reduce(savingTodos, (accumulator: TodoModel[], isSaving: boolean, id: number) => {
      if (isSaving) {
        return accumulator.concat(entities[id]);
      } else {
        return accumulator;
      }
    }, []);
  }
);
