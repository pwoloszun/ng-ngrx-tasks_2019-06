import { merge } from 'lodash';

import { TodosActions, TodosActionTypes } from './todos.actions';
import { TodoModel } from '../services/todo.model';

export const featureName = 'taskManagement';

export interface TodosEntities {
  [id: number]: TodoModel;
}

export interface NormalizedTodos {
  entities: {
    todos: TodosEntities;
  };
  result: {
    todos: number[];
  };
}

export interface TransiotionMap {
  [id: number]: boolean;
}

export interface TaskManagementState {
  entities: {
    todos: TodosEntities;
  };

  result: {
    todos: number[];
  };

  isFetching: {
    todoList: boolean;
  };

  isDeleting: {
    todos: TransiotionMap,
  };

  isEditing: {
    todos: TransiotionMap,
  };

  isSaving: {
    todos: TransiotionMap,
  };

  error: {
    todoList: Error;
    todos: { [id: number]: Error };
  };
}

export const initialState: TaskManagementState = {
  entities: {
    todos: {},
  },

  result: {
    todos: [],
  },

  isFetching: {
    todoList: false,
  },

  isDeleting: {
    todos: {},
  },

  isEditing: {
    todos: {},
  },

  isSaving: {
    todos: {},
  },

  error: {
    todoList: null,
    todos: {}
  },
};

export function todosReducer(state = initialState, action: TodosActions): TaskManagementState {
  switch (action.type) {
    case TodosActionTypes.FETCH_ALL_REQUEST: {
      return {
        ...state,
        isFetching: {todoList: true}
      };
    }
    case TodosActionTypes.FETCH_ALL_SUCCESS: {
      return merge({}, state, action.payload, {isFetching: {todoList: false}});
    }
    case TodosActionTypes.DELETE_REQUEST: {
      const {payload} = action;
      return setDeletion(state, payload.id, true);
    }
    case TodosActionTypes.DELETE_SUCCESS: {
      const {payload} = action;
      const nextState = setDeletion(state, payload, false);
      nextState.result.todos = nextState.result.todos.filter((id) => id !== payload);
      return nextState;
    }
    case TodosActionTypes.CREATE_REQUEST: {
      return state;
    }
    case TodosActionTypes.CREATE_SUCCESS: {
      const {payload} = action;
      const nextState = {...state};
      nextState.entities.todos = {
        ...nextState.entities.todos,
        ...payload.entities.todos,
      };
      nextState.result.todos = state.result.todos.concat(payload.result.todos);
      return nextState;
    }
    case TodosActionTypes.UPDATE_SUCCESS: {
      const payload: NormalizedTodos = action.payload;
      const updatedTodoId = payload.result.todos[0];
      return setSaving(state, updatedTodoId, false);
    }
    case TodosActionTypes.START_EDITION: {
      return setEdition(state, action.payload.id, true);
    }
    case TodosActionTypes.CANCEL_EDITION: {
      return setEdition(state, action.payload.id, false);
    }
    case TodosActionTypes.UPDATE_REQUEST: {
      const payload: TodoModel = action.payload;
      let nextState = setEdition(state, payload.id, false);
      nextState = setSaving(nextState, payload.id, true);
      return setEntity(nextState, payload);
    }
    case TodosActionTypes.CREATE_ERROR:
    case TodosActionTypes.DELETE_ERROR:
    case TodosActionTypes.UPDATE_ERROR:
    case TodosActionTypes.FETCH_ALL_ERROR: {
      return state; // TODO
    }
    default:
      return state;
  }
}

function setEdition(state: TaskManagementState, todoId: number, value: boolean): TaskManagementState {
  return setMapPropValue(state, 'isEditing', todoId, value);
}

function setDeletion(state: TaskManagementState, todoId: number, value: boolean): TaskManagementState {
  return setMapPropValue(state, 'isDeleting', todoId, value);
}

function setSaving(state: TaskManagementState, todoId: number, value: boolean): TaskManagementState {
  return setMapPropValue(state, 'isSaving', todoId, value);
}

function setEntity(state: TaskManagementState, todo: TodoModel): TaskManagementState {
  return setMapPropValue(state, 'entities', todo.id, todo);
}

function setMapPropValue<T>(state: TaskManagementState, propName: string, todoId: number, value: T): TaskManagementState {
  const nextState: TaskManagementState = {...state};
  nextState[propName].todos = {
    ...nextState[propName].todos,
    [todoId]: value,
  };
  return nextState;
}
