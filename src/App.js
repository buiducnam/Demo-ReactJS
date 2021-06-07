import './App.css';
import TodoList from './components/TodoList';

function App() {
  const todoList = [
    { title: 'Go to school', isComplete: true},
    { title: 'Go to school', isComplete: true},
    { title: 'Go to school'}
  ];

  return (
    <div className="App">
      {
        todoList.length === 0 ? "Nothing data" : 
        todoList.map((item, index) => 
          <TodoList key={index} item = {item}
        />)
      }
    </div>
  );
}

export default App;
