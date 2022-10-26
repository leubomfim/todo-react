import * as Styled from './styles';
import { FormTask } from '../FormTask/index';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

export const ToDo = () => {
  const getStorage = JSON.parse(localStorage.getItem('tasks'));
  const [tasks, setTasks] = useState(getStorage || []);
  const [taskEditText, setTaskEditText] = useState('');
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState();

  const handleEdit = (id) => {
    if (taskEditText === '') {
      return;
    }
    const filterEditTask = tasks.map((el) => {
      if (el.id === id) {
        el.name = taskEditText;
      }

      return el;
    });
    setTasks(filterEditTask);
    setTaskEditText('');
    setEdit((e) => !e);
  };
  return (
    <>
      {edit && (
        <Styled.EditModalArea>
          <Styled.EditArea>
            <Styled.CloseModal onClick={() => setEdit(false)}>
              <AiOutlineClose />
            </Styled.CloseModal>
            <Styled.EditIInput
              value={taskEditText}
              type="text"
              name="text"
              onChange={(e) => setTaskEditText(e.target.value)}
              id="text"
            />
            <Styled.EditButtonArea onClick={() => handleEdit(id)}>
              EDIT
            </Styled.EditButtonArea>
          </Styled.EditArea>
        </Styled.EditModalArea>
      )}
      <Styled.Header>
        <Styled.ToDoTitle>To-do</Styled.ToDoTitle>
      </Styled.Header>
      <FormTask
        setTaskEditText={setTaskEditText}
        setEdit={setEdit}
        setId={setId}
        tasks={tasks}
        setTasks={setTasks}
      />
    </>
  );
};
