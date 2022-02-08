import react from 'react';

const AuthContext = react.createContext({
    isLoggedIn: false
});

export default AuthContext;