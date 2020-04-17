import React, { useState } from 'react';
import bootstrap from '../../../css/bootstrap.module.css';
import Button from '../../UI/Button/Button';
import { useDispatch } from 'react-redux';
import * as actions from '../../../redux/actions/todoList';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import EditData from './EditData';
import Modal from '../../UI/Modal/Modal';

const TodoData = props => {
    const [editingTask, setEditingTask] = useState(false); 

    const editModalHandler = () => {
        setEditingTask(!editingTask);
    }

    const dispatch = useDispatch();

    const updateTodoTask = (todoTask) => dispatch(actions.updateTodoTask(todoTask));
    const deleteTodoTask = (todoId) => dispatch(actions.deleteTodoTask(todoId));

    const finishTodoTask = () => {
        props.todoData.Done = !props.todoData.Done;
        updateTodoTask(props.todoData);
    }
    
    return (
        <Auxiliary>
            <tr className={bootstrap.tableLight} style={{display: 'flex', justifyContent: 'center'}}>
                <td className={[bootstrap.Card, bootstrap[props.cardType]].join(' ')} 
                    style={{width: '90%', marginBottom: '1rem', marginTop: '1rem'}}>
                    <Modal
                        show={editingTask}
                        modalClosed={editModalHandler}
                        modalType={'alertDark'}>
                            <EditData
                                closeModal={editModalHandler}
                                todoData={props.todoData}/>
                    </Modal>
                    <div className={bootstrap.cardHeader}>
                        <p className={bootstrap.cardText}>
                            {props.todoData.TaskName}
                        </p>
                    </div>
                    <div className={bootstrap.cardBody}>
                        <Button 
                            disabled={false} 
                            btnClass={'btnInfo'} 
                            clicked={() => {editModalHandler()}} >
                                Edit</Button> 
                        <Button 
                            disabled={false} 
                            btnClass={'btnDanger'} 
                            clicked={() => {
                                deleteTodoTask (props.todoData.id)}}>
                                Delete</Button>
                        <Button 
                            disabled={false} 
                            btnClass={props.btnClass} 
                            clicked={() => {finishTodoTask()}}>
                                {props.btnStatus}</Button>
                    </div>
                </td>
            </tr>
        </Auxiliary>
    )
}

export default TodoData;