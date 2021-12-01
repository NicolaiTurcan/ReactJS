import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { deleteMessageWithFirebase } from './store/chatsMess/actions';
import './App.css';

function Message(props) {
    const params = useParams();
    let chatId = params.chatsId;
    const dispatch = useDispatch();
    const handleDeleteClick = (event) => {
        dispatch(deleteMessageWithFirebase(chatId, (event.target.id)));
    };
    return (
        <div className='chat_element'>
            <div className='chat_block'>
                <p className='messageAuthor'>{props.author}</p>
                <p className='message'>{props.text}</p>
            </div>
            <button className='message_deleate' onClick={handleDeleteClick} id={props.id}>x</button>
        </div>
    )
}

export default Message;