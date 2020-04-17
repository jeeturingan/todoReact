import React, { useEffect, useCallback, useState } from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import bootstrap from '../../css/bootstrap.module.css';
import TodoTable from '../../components/TodoTable/TodoTable';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions/todoList';
import Modal from '../../components/UI/Modal/Modal';

const TodoList = props => {
    
    const dispatch = useDispatch();

    const todoList = useSelector(state => {return state.todoList});
    const error = useSelector(state => {return state.error});
    const errorMsg = useSelector(state => {return state.errorMsg});
    const dataProcessing = useSelector(state => {return state.processing});

    const processFailureHandler = () => dispatch(actions.processFailuredConfirmed());
    const fetchTodoTasks = useCallback(
        () => dispatch(actions.fetchTodoTask()), 
        [dispatch]);

    const [showModal, setShowModal] = useState(true);
    
    const errorHandler = () => {
        processFailureHandler();
    }

    useEffect(() => {
        setShowModal (!showModal);
    }, [error])

    useEffect (() => {
        fetchTodoTasks();
    }, [fetchTodoTasks, dataProcessing]);

    let doneTodo = [];
    let goingTodo = [];

    for (let data in todoList) {
        if (todoList[data].Done) {
            doneTodo = doneTodo.concat(todoList[data]);
        }
        else {
            goingTodo = goingTodo.concat(todoList[data]);
        }
    }

    return (
        <Auxiliary>
            <Modal
                show={showModal}
                modalClosed={errorHandler}
                modalType={'alertDanger'}>
                    {errorMsg}
            </Modal>
            <br></br>
            <h1 style={{marginLeft: '30px'}}>To Do List: </h1>
            <div className={bootstrap.container} >
            <div className={bootstrap.row} style={{width: '100%'}}>
                <TodoTable 
                    status='On Going'
                    todoData={goingTodo}/>
                <TodoTable 
                    status='Completed'
                    todoData={doneTodo}/>
            </div>
            </div>
        </Auxiliary>
    )
}

export default TodoList; //withErrorHandler ( TodoList, Axios );