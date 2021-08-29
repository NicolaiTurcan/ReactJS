import './App.css';
import Message from './Message';

const textExempl = "Some very interesting text!";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        My First React App
        <h3>Hello!</h3>
        <Message text={textExempl}></Message>
      </header>
    </div>
  );
}

export default App;
