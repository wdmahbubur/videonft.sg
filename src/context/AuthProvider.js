//context api

import { createContext } from "react";
import useAuthentication from "../hooks/useAuthentication";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allValues = useAuthentication();
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;