import './App.css'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addChat, deleteChat } from './store/chats/actions'
import { addChatMes, deleteChatMes } from './store/chatsMess/actions'
import { chatLists } from './store/chatsMess/selectors';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

function ChatList(props) {
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
        dispatch(addChat(newChatId, chatName));
        dispatch(addChatMes(newChatId));
        setChatName('');
    };

    const handleDeleteClick = (event) => {
        dispatch(deleteChat(+(event.target.id)));
        dispatch(deleteChatMes(+(event.target.id)));
    }


    return (
        <div className='ChatList'>
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
                            <button onClick={handleDeleteClick} id={value.id}>x</button>
                        </ListItem>
                    );
                })}
            </List>
            <form onSubmit={handleClick}>
                <input type="text" value={chatName} onChange={handleChange}></input>
                <Button variant="contained" onClick={handleClick}>Add Chat</Button>
            </form>
        </div>
    )
}

export default ChatList;