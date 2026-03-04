import { createContext, useContext } from "react";
import {USERS} from "../../assets/user-data.js";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider value={{ users: USERS }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => useContext(UserContext);