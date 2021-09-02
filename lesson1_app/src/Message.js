import './App.css';

function Message(props) {
    return (
        <div className='chat_element'>
            <p className='message'>{props.text}</p>
            <p className='messageAuthor'>{props.author}</p>
        </div>
    )
}

export default Message;