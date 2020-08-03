import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Editor from './components/editor';
import Previewer from './components/previewer';
import { inputStore } from './inputStore'
// const myEditor = <Editor/>;
// const myPreviewer = <Previewer state={myEditor.state} />
ReactDOM.render(
  <React.StrictMode>
    <Editor store={inputStore}/>
    <Previewer store={inputStore}/>
    {/* {myEditor}
    {myPreviewer} */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
