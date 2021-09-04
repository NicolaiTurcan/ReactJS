import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

function ChatList(props) {
    const classes = useStyles();
    const [chatList, setChatList] = useState(
        [
            { id: 1, name: "Vovan" },
            { id: 2, name: "Kolian" },
            { id: 3, name: "Zinaida Ivanovna" },
            { id: 4, name: "Andron" }
        ]);

    return (
        <div className='ChatList'>
            <List dense className={classes.root}>
                {chatList.map((value) => {
                    return (
                        <ListItem key={value.id} button>
                            <ListItemAvatar>
                                <Avatar
                                    alt={`Avatar n°${value.id + 1}`}
                                    src={`/static/images/avatar/${value.id + 1}.jpg`}
                                />
                            </ListItemAvatar>
                            <ListItemText id={value.id} primary={value.name} />
                        </ListItem>
                    );
                })}
            </List>
        </div>
    )
}

export default ChatList;