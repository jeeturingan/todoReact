import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    // todoData: {}
    todoList: [],
    error: false,
    errorMsg: null,
    processing: false
}

const createTodoTaskSuccess = (state, action) => {
    return updateObject (state, {
        todoData: {
            id: action.todoData.id,
            todoDesc: action.todoData.TaskName,
            done: false
        },
        error: false,
        processing: false
    })
}

const updateTodoTaskSuccess = (state, action) => {
    return updateObject (state, {
        todoData: action.todoData,
        error: false,
        processing: false
    })
}

const deleteTodoTaskSuccess = (state, action) => {
    return updateObject (state, {
        id: action.todoDotId,
        error: false,
        processing: false
    })
}

const fetchTodoTaskSuccess = (state, action) => {
    return updateObject (state, {
        todoList: action.todoList
    })
}

const fetchTodoTaskFailed = (state, action) => {
    return updateObject (state, {error: true});
}

const createTodoTaskFailed = (state, action) => {
    return updateObject (state, {
        error: true, 
        errorMsg: action.errorMsg,
        processing: false
    });
}

const updateTodoTaskFailed = (state, action) => {
    return updateObject (state, {
        error: true, 
        errorMsg: action.errorMsg,
        processing: false
    });
}

const deleteTodoTaskFailed = (state, action) => {
    return updateObject (state, {
        error: true, 
        errorMsg: action.errorMsg,
        processing: false
    });
}

const processFailureConfirmed = (state, action) => {
    return updateObject (state, {
        error: false,
        errorMsg: null
    });
}

const createTodoTaskStart = (state, action) => {
    return updateObject (state, {processing: true})
}

const updateTodoTaskStart = (state, action) => {
    return updateObject (state, {processing: true})
}

const deleteTodoTaskStart = (state, action) => {
    return updateObject (state, {processing: true})
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_TODOTASK_START:
            return createTodoTaskStart(state, action);
        case actionTypes.CREATE_TODOTASK_SUCCESS:
            return createTodoTaskSuccess(state, action);
        case actionTypes.CREATE_TODOTASK_FAILED:
            return createTodoTaskFailed(state, action);

        case actionTypes.UPDATE_TODOTASK_START:
            return updateTodoTaskStart(state, action);
        case actionTypes.UPDATE_TODOTASK_SUCCESS:
            return updateTodoTaskSuccess(state, action);
        case actionTypes.UPDATE_TODOTASK_FAILED:
            return updateTodoTaskFailed(state, action);

        case actionTypes.DELETE_TODOTASK_START:
            return deleteTodoTaskStart(state, action);
        case actionTypes.DELETE_TODOTASK_SUCCESS:
            return deleteTodoTaskSuccess(state, action);
        case actionTypes.DELETE_TODOTASK_FAILED:
            return deleteTodoTaskFailed(state, action);

        case actionTypes.FETCH_TODOTASK_SUCCESS:
            return fetchTodoTaskSuccess(state, action);
        case actionTypes.FETCH_TODOTASK_FAILED:
            return fetchTodoTaskFailed(state, action);
        case actionTypes.PROCESS_FAILURE_CONFIRMED:
            return processFailureConfirmed(state, action);

        default:
            return state;
    }
};

export default reducer;