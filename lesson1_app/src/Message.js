import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import './App.css';
import { deleteMessage } from './store/chatsMess/actions';

function Message(props) {
    const params = useParams();
    let chatId = +params.chatsId;
    const dispatch = useDispatch();
    const handleDeleteClick = (event) => {
        dispatch(deleteMessage(chatId, +(event.target.id)))
    };
    return (
        <div className='chat_element'>
            <div>
                <p className='messageAuthor'>{props.author}</p>
                <p className='message'>{props.text}</p>
            </div>
            <button onClick={handleDeleteClick} id={props.id}>x</button>
        </div>
    )
}

export default Message;