import React from 'react';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-3 mt-5 pt-5'>
          <img src='https://img.freepik.com/premium-vector/document-3d-icon-todo-list-concept-with-check-mark-round-button-3d-realistic-design-element_363543-543.jpg?w=2000' className='img-fluid mt-5'></img>
        </div>
        <div className='col-md-6'>
        <h1 className='d-flex justify-content-center text-primary'>Todo Application</h1>
      <TodoApp />
        </div>
        <div className='col-md-3'></div>
      </div>
    </div>
  );
}

export default App;