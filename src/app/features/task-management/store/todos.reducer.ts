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
    case TodosActionTypes.CREATE_REQUEST: {
      return state;
    }
    case TodosActionTypes.CREATE_SUCCESS: {
      const payload = action.payload;
      return merge(
        {},
        state,
        payload,
        {result: {todos: state.result.todos.concat(payload.result.todos)}}
      );
    }
    // TODO 1: Delete actions
    // TODO 2a: Edit actions
    // TODO 2b: Update actions
    case TodosActionTypes.CREATE_ERROR:
    case TodosActionTypes.FETCH_ALL_ERROR: {
      return state; // TODO
    }
    default:
      return state;
  }
}

// helper functions
function setEdition(state: TaskManagementState, todoId: number, value: boolean): TaskManagementState {
  return merge({}, state, {
    isEditing: {
      todos: {
        [todoId]: value
      }
    }
  });
}

function setSaving(state: TaskManagementState, todoId: number, value: boolean): TaskManagementState {
  return merge({}, state, {
    isSaving: {
      todos: {
        [todoId]: value
      }
    }
  });
}
