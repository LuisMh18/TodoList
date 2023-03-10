import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainApp } from './08-useContext/MainApp';
import {BrowserRouter} from "react-router-dom";
// import { TodoApp } from './07-useReducer/TodoApp';
// import { Memorize } from './06-memos/Memorize';
// import { Layout } from './05-useLayoutEffect/Layout';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FormWidthCustomHook } from './02-useEffect/FormWidthCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { CounterWidthCustomHook } from './01-useState/CounterWidthCustomHook';
// import { CounterApp } from './01-useState/CounterApp';
// import './07-useReducer/intro-reducer';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      {/* <MultipleCustomHooks /> */}
      <MainApp />
    {/* </React.StrictMode> */}
  </BrowserRouter>
)
