import './App.css';
import Message from './Message';
import React, { useEffect, useState } from 'react';

function App() {

  const [messageList, setMessageList] = useState([]);
  const handleClick = () => {
    setMessageList([...messageList, { text: newMessage, author: 'Kolia' }]);
  };

  const [newMessage, setNewMessage] = useState('');
  const handleChange = (event) => {
    setNewMessage(event.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      if (messageList.length !== 0 && messageList[messageList.length - 1].author !== 'Bot') {
        setMessageList([...messageList, { text: "Test Message after 1,5 sec.", author: 'Bot' }]);
      }
    }, 1500);
  }, [messageList]);


  return (
    <div className="App">
      <header className="App-header">
        <h3>First Chat</h3>
        <div className="chat">
          {messageList.map((message, i) =>
            <Message key={i} text={message.text} author={message.author}></Message>
          )}
        </div>
        <input type='text' value={newMessage} onChange={handleChange}></input>
        <button onClick={handleClick}>Click</button>
      </header>
    </div>
  );
}

export default App;
