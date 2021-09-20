import './App.css';
import Message from './Message';
import ChatList from './ChatList';
import { useParams } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from './store/chatsMess/actions';



function Chats() {
  const params = useParams();
  let chatId = +params.chatsId;
  const chatMess = useSelector((state) => state.chatsMess.messages);
  const author = useSelector((state) => state.profile.name);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    event.preventDefault(chatId,);

    dispatch(addMessage(chatId, newMessage, author));
    setNewMessage('');
    inputRef.current.focus();
  };

  const inputRef = useRef();

  const [newMessage, setNewMessage] = useState('');
  const handleChange = (event) => {
    setNewMessage(event.target.value);
  };

  useEffect(() => {
    let timeout = setTimeout(() => {
      if (!!chatId && chatMess[chatId] && chatMess[chatId].length !== 0 && chatMess[chatId][chatMess[chatId].length - 1].author !== 'Bot') {
        dispatch(addMessage(chatId, "Test Message after 1,5 sec.", 'Bot'));
      }
    }, 1500);
    return () => clearTimeout(timeout);
  }, [chatMess]);

  return (
    <div className="App">
      <header className="App-header">
        <div className='wraper'>
          <ChatList />
          <div className='chatWrap'>
            {!!chatId && !!chatMess[chatId] && (
              <>
                <div className="chat">
                  {chatMess[chatId].map((message, i) =>
                    <Message key={i} text={message.text} author={message.author} id={message.id}></Message>
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
