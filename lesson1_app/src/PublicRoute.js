import { Route, Redirect } from "react-router-dom";

export const PublicRoute = ({ authed, ...props }) => {
    if (!authed) {
        return (<Route {...props} />);
    }
    else {
        return (<Redirect to="/profile" />);
    }
};