import './App.css';
import Message from './Message';
import ChatList from './ChatList';
import React, { useEffect, useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function App() {

  const [messageList, setMessageList] = useState([]);
  const handleClick = () => {
    setMessageList([...messageList, { text: newMessage, author: 'User1' }]);
    setNewMessage('');
    inputRef.current.focus();
  };

  const inputRef = useRef();

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
        <h3>My First Chat</h3>
        <div className='wraper'>
          <ChatList />
          <div className='chatWrap'>
            <div className="chat">
              {messageList.map((message, i) =>
                <Message key={i} text={message.text} author={message.author}></Message>
              )}
            </div>
            <form>
              <div className="messageImput">
                <TextField autoFocus id="outlined-basic" label="Message" variant="filled" value={newMessage} onChange={handleChange} inputRef={inputRef} />
              </div>
              <div className="sendButton">
                <div></div>
                <div>
                  <Button variant="contained" onClick={handleClick}>Send Message</Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
