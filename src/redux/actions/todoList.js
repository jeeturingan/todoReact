import * as actionTypes from './actionTypes';
import Axios from '../../axios';

export const createTodoTaskStart = () => {
    return {
        type: actionTypes.CREATE_TODOTASK_START,
    }
}

export const updateTodoTaskStart = () => {
    return {
        type: actionTypes.UPDATE_TODOTASK_START,
    }
}

export const deleteTodoTaskStart = () => {
    return {
        type: actionTypes.DELETE_TODOTASK_START,
    }
}

export const createTodoTaskSuccess = (todoData) => {
    return {
        type: actionTypes.CREATE_TODOTASK_SUCCESS,
        todoData: todoData,
    }
}

export const updateTodoTaskSuccess = (todoData) => {
    return {
        type: actionTypes.UPDATE_TODOTASK_SUCCESS,
        todoData: todoData,
    }
}

export const deleteTodoTaskSuccess = (id) => {
    return {
        type: actionTypes.DELETE_TODOTASK_SUCCESS,
        todoDataId: id,
    }
}

export const fetchTodoTaskSuccess = (todoList) => {
    return {
        type: actionTypes.FETCH_TODOTASK_SUCCESS,
        todoList: todoList,
    }
}

export const createTodoTaskFailed = (error) => {
    return {
        type: actionTypes.CREATE_TODOTASK_FAILED,
        errorMsg: error
    }
}

export const updateTodoTaskFailed = (error) => {
    return {
        type: actionTypes.UPDATE_TODOTASK_FAILED,
        errorMsg: error
    }
}

export const deleteTodoTaskFailed = (error) => {
    return {
        type: actionTypes.DELETE_TODOTASK_FAILED,
        errorMsg: error
    }
}

export const fetchTodoTaskFailed = (error) => {
    return {
        type: actionTypes.FETCH_TODOTASK_FAILED,
        errorMsg: error
    }
}

export const processFailuredConfirmed = () => {
    return {
        type: actionTypes.PROCESS_FAILURE_CONFIRMED
    }
}

export const fetchTodoTask = () => {
    return dispatch => {
        Axios.get()
            .then(Response => {
                dispatch(fetchTodoTaskSuccess(Response.data));
            })
            .catch(error => {
                dispatch(fetchTodoTaskFailed(error.message));
            });
    };
}

export const createTodoTask = (todoData) => {
    return dispatch => {
        dispatch(createTodoTaskStart());
        Axios.post('/', todoData)
            .then(Response => {
                dispatch(createTodoTaskSuccess(Response));
            })
            .catch(error => {
                dispatch(createTodoTaskFailed(error.message));
            })
    }
}

export const updateTodoTask = (todoData) => {
    return dispatch => {
        dispatch(updateTodoTaskStart());
        Axios.put('/' + todoData.id, todoData)
            .then(Response => {
                dispatch(updateTodoTaskSuccess(Response));
            })
            .catch(error => {
                dispatch(updateTodoTaskFailed(error.message));
            });
    };
}

export const deleteTodoTask = (id) => {
    return dispatch => {
        dispatch(deleteTodoTaskStart());
        Axios.delete('/' + id)
            .then(Response => {
                dispatch(deleteTodoTaskSuccess(Response.data));
            })
            .catch(error => {
                dispatch(deleteTodoTaskFailed(error.message));
            })
    }
}