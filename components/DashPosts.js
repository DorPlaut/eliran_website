import React, { useState, useEffect } from 'react';
import styles from '@/styles/Dash.module.css';
import TextEditor from '@/components/TextEditor';
import axios from 'axios';
import ImageUploader from './ImageUploader';
import { usePostsContext } from '@/context/posts';
import Image from 'next/image';

function DashPosts({ showAlert, setPage, setPostId }) {
  const [posts, setPosts, updatePosts] = usePostsContext();
  const [selectedPosts, setSelected] = useState([]);

  // flitersd unwonted posts
  useEffect(() => {
    if (posts) {
      setSelected(
        posts.filter((i) => {
          return i.type == 'כתבה';
        })
      );
    }
  }, []);

  //   delete post
  const deletePost = async (id) => {
    console.log('delete');
    try {
      await axios.delete(`../../api/posts`, { data: { id: id } }).then(() => {
        showAlert('הפוסט הוסר מרשימת הפוסטים');
        // setPage('dash');
        updatePosts();
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.main}>
      <div className={styles.post_container}>
        {selectedPosts.map((post, index) => {
          return (
            <div className={styles.single_post} key={index}>
              <h3>{post.title}</h3>
              <h4>{post.desc}</h4>
              {post.img.length > 0 ? <img src={post.img[0]} /> : ''}
              <div className={styles.btn_container}>
                <button
                  className="btn btn-color"
                  onClick={() => {
                    setPage('edit');
                    setPostId(post._id);
                  }}
                >
                  ערוך כתבה
                </button>
                <button
                  className="btn btn-color"
                  onClick={() => deletePost(post._id)}
                >
                  מחק כתבה
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DashPosts;
