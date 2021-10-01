import './App.css';
import Message from './Message';
import ChatList from './ChatList';
import { useParams } from 'react-router-dom';
import React, { useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { addChatMesReplay } from './store/chatsMess/actions';
import { chatMessage, messageAuthor } from './store/chats/selectors';



function Chats() {
  const params = useParams();
  let chatId = +params.chatsId;
  const chatMess = useSelector(chatMessage);
  const author = useSelector(messageAuthor);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    event.preventDefault(chatId,);

    dispatch(addChatMesReplay(chatId, newMessage, author));
    setNewMessage('');
    inputRef.current.focus();
  };

  const inputRef = useRef();

  const [newMessage, setNewMessage] = useState('');
  const handleChange = (event) => {
    setNewMessage(event.target.value);
  };

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
