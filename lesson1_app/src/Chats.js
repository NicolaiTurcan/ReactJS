import './App.css';
import Message from './Message';
import ChatList from './ChatList';
import { useParams } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const startMess = { 1: [], 2: [], 3: [], 4: [] };

function Chats() {

  const params = useParams();
  let chatId = +params.chatsId;

  const handleClick = (event) => {
    event.preventDefault();
    setAllMessages((prevState) => ({
      ...prevState,
      [chatId]: [
        ...prevState[chatId], { text: newMessage, author: 'User1' }
      ]
    }));
    setNewMessage('');
    inputRef.current.focus();
  };

  const [allMessages, setAllMessages] = useState(startMess);

  const inputRef = useRef();

  const [newMessage, setNewMessage] = useState('');
  const handleChange = (event) => {
    setNewMessage(event.target.value);
  };

  useEffect(() => {
    let timeout = setTimeout(() => {
      if (!!chatId && allMessages[chatId].length !== 0 && allMessages[chatId][allMessages[chatId].length - 1].author !== 'Bot') {
        setAllMessages((prevState) => ({
          ...prevState,
          [chatId]: [
            ...prevState[chatId], { text: "Test Message after 1,5 sec.", author: 'Bot' }
          ]
        }));
      }
    }, 1500);
    return () => clearTimeout(timeout);
  }, [allMessages]);

  return (
    <div className="App">
      <header className="App-header">
        <div className='wraper'>
          <ChatList />
          <div className='chatWrap'>
            {!!chatId && (
              <>
                <div className="chat">
                  {allMessages[chatId].map((message, i) =>
                    <Message key={i} text={message.text} author={message.author}></Message>
                  )}
                </div>
                <form onSubmit={handleClick}>
                  <div className="messageImput">
                    <TextField autoFocus id="outlined-basic" label="Message" variant="filled" value={newMessage} onChange={handleChange} inputRef={inputRef} />
                  </div>
                  <div className="sendButton">
                    <div>
                      <Button variant="contained" onClick={handleClick}>Send Message</Button>
                    </div>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Chats;
