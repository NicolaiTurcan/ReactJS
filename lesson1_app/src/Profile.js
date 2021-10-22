import { useState, useEffect } from "react";
import { signOut } from "./services/firebase";
import { initUserName, addUserNameFb } from "./store/profile/actions";
import { useDispatch, useSelector } from "react-redux";
import { messageAuthor } from "./store/chats/selectors";

const Profile = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const newUserName = useSelector(messageAuthor);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    useEffect(() => {
        dispatch(initUserName());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        setValue("");
        dispatch(addUserNameFb(value));
    };

    const handleLogout = async () => {
        try {
            await signOut();
        } catch (erorr) {
            console.log(erorr);
        }
    }

    return (
        <>
            <div className="container">
                <div className="profile__page">
                    <h2>Profile Page</h2>
                    <div className="profile__info">
                        <h3>Your Name is: {newUserName}</h3>
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder="Your Name" value={value} onChange={handleChange}></input>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                    <button type='button' className="logout" onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </>
    );
}

export default Profile;