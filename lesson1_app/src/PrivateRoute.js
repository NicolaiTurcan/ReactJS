import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ authed, ...props }) => {
    if (authed) {
        return (<Route {...props} />);
    }
    else {
        return (<Redirect to="/" />);
    }
};
