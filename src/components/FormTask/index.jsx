import { useState } from 'react';
import { Input } from '../input';
import { Tasks } from '../tasks';
import * as Styled from './styles';
import P from 'prop-types';

export const FormTask = ({
  tasks,
  setTasks,
  setId,
  setEdit,
  setTaskEditText,
}) => {
  const [taskText, setTaskText] = useState('');

  const saveTask = () => {
    const task = {
      name: taskText,
      id: Date.now(),
    };

    addTask(task);
  };

  const addTask = (task) => {
    const copyTasks = [...tasks, task];
    setTasks(copyTasks);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (taskText.length === 0) {
      return alert('Insert your task!');
    }

    saveTask();
    setTaskText('');
  };

  const handleChange = (e) => {
    setTaskText(e.target.value);
  };
  return (
    <>
      <Styled.Form onSubmit={(e) => handleClick(e)}>
        <Input
          type="text"
          placeholder="Insert your task!"
          name="todo__task"
          value={taskText}
          handleChange={handleChange}
        />
        <Styled.Button type="submit">Add a task!</Styled.Button>
      </Styled.Form>
      <Tasks
        setTaskEditText={setTaskEditText}
        tasks={tasks}
        setId={setId}
        setEdit={setEdit}
        setTasks={setTasks}
      />
    </>
  );
};

FormTask.propTypes = {
  tasks: P.array.isRequired,
  setTasks: P.func.isRequired,
  setId: P.func.isRequired,
  setEdit: P.func.isRequired,
  setTaskEditText: P.func.isRequired,
};
