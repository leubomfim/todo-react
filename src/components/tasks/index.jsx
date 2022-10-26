import * as Styled from './styles';
import { BsTrash } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import { useEffect } from 'react';
import P from 'prop-types';

export const Tasks = ({ tasks, setTasks, setEdit, setId, setTaskEditText }) => {
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (id) => {
    const filterTask = tasks.filter((el) => {
      return el.id !== id;
    });

    setTasks(filterTask);
  };

  return (
    <Styled.TaskSection>
      <Styled.Container>
        <Styled.TasksWrapper>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <Styled.CardTask key={task.id} id={task.id}>
                <Styled.TaskText>
                  {task.name.length > 15
                    ? task.name.substring(0, 15) + '...'
                    : task.name}
                </Styled.TaskText>

                <Styled.ButtonsArea>
                  <Styled.DeleteButton
                    id={task.id}
                    onClick={() => handleDelete(task.id)}
                  >
                    <BsTrash />
                  </Styled.DeleteButton>
                  <Styled.EditButton
                    id={task.id}
                    onClick={() => {
                      setTaskEditText(task.name);
                      setEdit((e) => !e);
                      setId(task.id);
                    }}
                  >
                    <AiOutlineEdit />
                  </Styled.EditButton>
                </Styled.ButtonsArea>
              </Styled.CardTask>
            ))
          ) : (
            <Styled.NoTasksDiv>
              <Styled.NoTasks>No tasks!</Styled.NoTasks>
            </Styled.NoTasksDiv>
          )}
        </Styled.TasksWrapper>
      </Styled.Container>
    </Styled.TaskSection>
  );
};

Tasks.propTypes = {
  tasks: P.array.isRequired,
  setTasks: P.func.isRequired,
  setId: P.func.isRequired,
  setEdit: P.func.isRequired,
  setTaskEditText: P.func.isRequired,
};
