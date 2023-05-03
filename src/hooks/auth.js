import { createContext, useContext, useMemo } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const UserContext = createContext();

export const UserProvider = ({children})=>{

    const navigate = useNavigate();
    const [cookies, setCookies, removeCookie] = useCookies();

    const login = async (email, password ) => {
        const res = await fetch(
            "https://techbpit-tjhkw.run-ap-south1.goorm.site/auth/login",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ email, password }),
            }
          );
        
        const data = await res.json();
        setCookies('token', data.access_token); 
        setCookies('name', data.username); 
        setCookies('image',data.image);
    };

    const logout = () => {
        //['token', 'name'].forEach(obj => removeCookie(obj)); 
        navigate('/login');
    };

    const value = useMemo(
        () => ({
            cookies,
            login,
            logout
        }),
        [cookies]
    );
    

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )

}

export const useAuth = () => {
    return useContext(UserContext)
};