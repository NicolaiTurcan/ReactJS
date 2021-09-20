import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "./store/profile/actions";

const Profile = () => {
    const [value, setValue] = useState('');

    const dispatch = useDispatch();
    const name = useSelector((state) => state.profile.name)

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(changeName(value));
        setValue('');
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <>
            <h3>Profile Page</h3>
            <h3>Your Name is: {name}</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Your Name" value={value} onChange={handleChange}></input>
                <button type="submit">Send</button>
            </form>
        </>
    );
}

export default Profile;