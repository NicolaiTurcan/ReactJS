import Message from './Message';
import ChatList from './ChatList';
import { useParams } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { addMessageFb, initMessages } from './store/chatsMess/actions';
import { chatMessage, messageAuthor } from './store/chats/selectors';
import './App.css';
import { initChats } from './store/chats/actions';



function Chats() {
  const params = useParams();
  let chatId = +params.chatsId;
  const chatMess = useSelector(chatMessage);
  const author = useSelector(messageAuthor);
  const dispatch = useDispatch();
  const inputRef = useRef();

  const [newMessage, setNewMessage] = useState('');

  const handleChange = (event) => {
    setNewMessage(event.target.value);
  };

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [newMessage]);

  useEffect(() => {
    dispatch(initChats());
    dispatch(initMessages());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(addMessageFb(newMessage, author, chatId));
    setNewMessage('');
  }


  return (
    <div className="app">
      <h2>Chats</h2>
      <div className="app__wraper">
          <ChatList />
          <div className='app__chats'>
            {!!chatId && (
              <>
                <div className="chat">
                  {(Object.values(chatMess[chatId] || {}) || []).map((message, i) =>
                    <Message key={i} text={message.text} author={message.author} id={message.id}></Message>
                  )}
                  <div ref={messagesEndRef} />
                </div>
                <form className="app__chat_send" onSubmit={handleClick}>
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
    </div>
  );
}

export default Chats;
