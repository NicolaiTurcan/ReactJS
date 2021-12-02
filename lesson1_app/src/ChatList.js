import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addChatFb, deleteChatsFb } from './store/chats/actions'
import { chatLists } from './store/chatsMess/selectors';
import './App.css'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

function ChatList() {
    const params = useParams();
    let chatId = +params.chatsId;

    const classes = useStyles();

    const dispatch = useDispatch();
    const chatList = useSelector(chatLists);
    const [chatName, setChatName] = useState('');

    const handleChange = (event) => {
        setChatName(event.target.value);
    };

    const handleClick = (event) => {
        let newChatId = Date.now();
        event.preventDefault();
        dispatch(addChatFb(newChatId, chatName))
        setChatName('');
    };

    const handleDeleteClick = (event) => {
        dispatch(deleteChatsFb(+(event.target.id)));
    }

    const chatsEndRef = useRef(null);
    const scrollToBottom = () => {
        chatsEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    useEffect(() => {
        scrollToBottom();
    }, [chatName]);

    return (
        <div className={(chatId ? "app__chatList _active" : "app__chatList")}>
            <List dense className={classes.root}>
                {chatList.map((value) => {
                    return (
                        <ListItem key={value.id} button >
                            <Link to={`/chats/${value.id}`}>
                                <ListItemAvatar>
                                    <Avatar
                                        alt={`Avatar n°${value.id + 1}`}
                                        src={`/static/images/avatar/${value.id + 1}.jpg`}
                                    />
                                </ListItemAvatar>
                                <ListItemText id={value.id} primary={value.name} />
                            </Link>
                            <button className="chat__button" onClick={handleDeleteClick} id={value.id}>x</button>
                            <div ref={chatsEndRef} />
                        </ListItem>
                    );
                })}
            </List>
            <form className='chatList__form' onSubmit={handleClick}>
                <input type="text" placeholder="Chat Name" value={chatName} onChange={handleChange}></input>
                <button className="chatList__button" onClick={handleClick}>Add Chat</button>
            </form>
        </div>
    )
}

export default ChatList;