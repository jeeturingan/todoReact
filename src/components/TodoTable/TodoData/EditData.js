import React, { useState, useCallback } from 'react';
import bootstrap from '../../../css/bootstrap.module.css';
import Button from '../../UI/Button/Button';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import { useDispatch } from 'react-redux';
import * as actions from '../../../redux/actions/todoList';

const EditData = props => {
    const [todoDesc, setTodoDesc] = useState(props.todoData.TaskName);

    const dispatch = useDispatch();
    
    const updateTodoTask = (todoData) => dispatch(actions.updateTodoTask(todoData));
    const fetchTodoTasks = useCallback(
        () => dispatch(actions.fetchTodoTask()), 
        [dispatch]);

    const onChangeHandler = (event) => {
        setTodoDesc(event.target.value);    
    }

    const editTaskHandler = (event) => {
        event.preventDefault();
        props.closeModal();
        const todoData = {
            id: props.todoData.id,
            TaskName: todoDesc,
            Done: props.todoData.Done
        }
        updateTodoTask(todoData);
        fetchTodoTasks();
    }

    let cardHeader = 'On Going';
    let border = 'borderDark';
    if (props.todoData.Done) {
        cardHeader = 'Completed';
        border = 'borderSuccess';
    }

    return (
        <Auxiliary>
            <div className={[bootstrap.Card, bootstrap[border]].join(' ')}>
                <div className={bootstrap.cardHeader}>Status: {cardHeader}</div>
                <div className={bootstrap.cardBody}>
                    <form onSubmit={editTaskHandler}>
                        <textarea 
                            className={bootstrap.formControl} 
                            placeholder='Todo Description'
                            value={todoDesc}
                            rows="3" 
                            style={{marginTop: '0px', marginBottom: '0px', height: '200px'}}
                            onChange={((event) => {onChangeHandler(event)})}
                            />

                        <Button 
                            btnType={'button'}
                            disabled={false} 
                            btnClass='btnDanger' 
                            clicked={props.closeModal}>
                                Cancel</Button> 
                        <Button 
                            btnType={'submit'}
                            disabled={false} 
                            btnClass='btnSuccess' >
                                Update</Button>
                    </form>
                </div>
                
            </div>
        </Auxiliary>
    )
}

export default EditData;