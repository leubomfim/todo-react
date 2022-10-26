import styled from 'styled-components';

export const TaskSection = styled.section`
  position: relative;
`;

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 125px auto 0px;
`;

export const TasksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
`;

export const CardTask = styled.div`
  background-color: #1F2294;
  padding: 15px;
  width: 280px;
  height: 160px;
  border-radius: 10px;
  position: relative;
  transition: all 500ms ease;

  &:hover {
    background-color: #7f83e7;
    transform: scale(1.2);
  };
`;

export const TaskText = styled.h3`
  font-size: 26px;
  text-align: center;
  margin-top: 10px;
  word-break: break-all;
  color: white;
`;

export const NoTasksDiv = styled.div`
  margin: 0 auto;
`;

export const ButtonsArea = styled.div`
  display: flex;
  position: absolute;
  gap: 30px;
  left: 50%;
  margin-left: -41px;
  bottom: 15px;
`;

export const DeleteButton = styled.button`
  background-color: transparent;
  z-index: 2;
  & > svg {
    color: #F55547;
    font-size: 26px;
    cursor: pointer;
  }
`;

export const EditButton = styled.button`
  background-color: transparent;
  & > svg {
    color: #F0CE1A;
    font-size: 26px;
    cursor: pointer;
  }
`;

export const NoTasks = styled.h3`
  color: white;
  font-size: 30px;
`;
