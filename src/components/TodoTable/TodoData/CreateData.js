import React, { useState } from 'react';
import bootstrap from '../../../css/bootstrap.module.css';
import Button from '../../UI/Button/Button';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../redux/actions/todoList';

const CreateData = props => {
    const [todoDesc, setTodoDesc] = useState('');

    const dispatch = useDispatch();

    const todoList = useSelector(state => {return state.todoList});
    
    const createTodoTask = (todoData) => dispatch(actions.createTodoTask(todoData)); 

    const onChangeHandler = (event) => {
        setTodoDesc(event.target.value);    
    }

    const createTaskHandler = (event) => {
        event.preventDefault();
        props.closeModal();
        const todoData = {
            id: todoList[todoList.length-1].id+1,
            TaskName: todoDesc,
            Done: false
        }
        createTodoTask(todoData);
        setTodoDesc('');  
    }

    return (
        <Auxiliary>
            <div className={[bootstrap.Card, bootstrap.borderDark].join(' ')}>
                <div className={bootstrap.cardBody}>
                    <form onSubmit={createTaskHandler}>
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
                                Create</Button>
                    </form>
                </div>
            </div>
        </Auxiliary>
    )
}

export default CreateData;