import styled from 'styled-components';

export const Header = styled.header`
  text-align: center;
  margin: 100px auto 50px;
  width: 250px;
`;

export const ToDoTitle = styled.h1`
  font-size: 54px;
  transform: rotate(5deg);
  transition: all 400ms ease;
  cursor: default;
  color: white;

 &:hover {
  transform: rotate(-5deg);
  font-size: 68px;
 }
`;

export const EditModalArea = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.575);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 50;
  top: 0;
`;

export const EditArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 500px;
  width: 90%;
  position: relative;
  z-index: 100;
`;

export const EditIInput = styled.input`
  width: 100%;
  padding: 15px;
  outline: none;
  font-size: 20px;
  border-radius: 3px;
`;

export const EditButtonArea = styled.button`
  width: 100%;
  padding: 15px;
  outline: none;
  color: white;
  border-radius: 3px;
  background-color: #2c4fc2;
  cursor: pointer;
`;

export const CloseModal = styled.button`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  outline: none;
  cursor: pointer;
  color: white;
  background-color: #2c4fc2;
  border-radius: 50%;
  position: absolute;
  top: -60px;
  right: 0;
  transition: background-color 400ms ease;

  &:hover {
    background-color: #2c4ff0;
  }
`;
