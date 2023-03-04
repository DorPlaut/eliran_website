import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const Context = createContext();

export function UserContextProvider({ children }) {
  // get all posts
  const [user, setUser] = useState();

  const getUser = async () => {
    try {
      await axios.get(`../../api/user`).then((res) => {
        setUser(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  // end

  return (
    <Context.Provider value={[user, setUser]}>{children}</Context.Provider>
  );
}

export function useUserContext() {
  return useContext(Context);
}
