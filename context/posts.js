import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const Context = createContext();

export function PostsContextProvider({ children }) {
  // get all posts
  const [posts, setPosts] = useState();
  const updatePosts = () => {
    getAllPosts();
  };

  const getAllPosts = async () => {
    try {
      await axios.get(`../../api/posts`).then((res) => {
        setPosts(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllPosts();
  }, []);

  // end

  return (
    <Context.Provider value={[posts, setPosts, updatePosts]}>
      {children}
    </Context.Provider>
  );
}

export function usePostsContext() {
  return useContext(Context);
}
