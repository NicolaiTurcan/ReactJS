import './App.css';

function Message(props) {
    return (
        <div className='chat_element'>
            <p className='messageAuthor'>{props.author}</p>
            <p className='message'>{props.text}</p>
        </div>
    )
}

export default Message;