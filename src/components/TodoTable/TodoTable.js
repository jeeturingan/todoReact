import React, { useState } from 'react';
import bootstrap from '../../css/bootstrap.module.css';
import TodoData from './TodoData/TodoData';
import Modal from '../UI/Modal/Modal';
import Button from '../UI/Button/Button';
import CreateData from './TodoData/CreateData';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import { useSelector } from 'react-redux';

const TodoTable = props => {

    const [creatingTask, setCreatingTask] = useState(false);


    const error = useSelector(state => {return state.error});

    const createTaskHandler = () => {
        if (error)
            setCreatingTask(true);
        else
            setCreatingTask(!creatingTask);
    }

    let cardTitle = props.status;
    let cardType = 'borderSuccess';
    let btnClass = 'btnWarning';
    let btnStatus = 'Undone';

    if (props.status === 'On Going') {
        cardTitle = (
            <Auxiliary>
                {props.status}: 
                <Button 
                    disabled={false} 
                    btnClass={'btnSecondary'}
                    btnSize={'small'}
                    clicked={createTaskHandler}>
                        Add
                </Button>
            </Auxiliary>
        );
        cardType = 'borderDark';
        btnClass = 'btnSuccess';
        btnStatus = 'Done';
    }

    let todoTasks = props.todoData.map (todoTask => (
        <TodoData
            key = {todoTask.id}
            cardType={cardType}
            btnClass = {btnClass}
            btnStatus={btnStatus}
            todoData = {todoTask}/>
    ));
    
    return (
        <div className={bootstrap.Col6} style={{textAlign: 'center', margin: '0 auto'}}>
            <Modal
                show={creatingTask}
                modalClosed={createTaskHandler}
                modalType={'alertDark'}>
                    <CreateData
                        closeModal={createTaskHandler}/>
            </Modal>
            <table className={[bootstrap.table, bootstrap.tableHover].join(' ')}>
                <thead>
                    <tr style={{height: '67px', verticalAlign: 'center'}}>
                        <th scope="col">
                            {cardTitle}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {todoTasks}
                </tbody>
            </table>
        </div>
    );
}

export default TodoTable;