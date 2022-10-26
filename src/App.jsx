import { ToDo } from './components/toDo/index';
import { GlobalStyles } from './constants/styles/global-styles';
import { useState } from 'react';

export const App = () => {
  const [edit, setEdit] = useState(false);
  return (
    <>
      <ToDo edit={edit} setEdit={setEdit} />
      <GlobalStyles edit={edit} />
    </>
  );
};
