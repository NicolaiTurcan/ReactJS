import { useDispatch, useSelector } from "react-redux";
import { store } from "./store";
import { toggleShowName } from "./store/profile/actions";

const Profile = () => {
    const state = useSelector((state) => state.showName);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleShowName);
    };

    return (
        <>
            <h3>Profile Page</h3>
            <label><input type='checkbox' onClick={handleClick}></input>Click</label>
        </>
    );
}

export default Profile;