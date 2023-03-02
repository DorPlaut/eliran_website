import React, { useState } from 'react';
import styles from '@/styles/Dash.module.css';
import TextEditor from '@/components/TextEditor';
import axios from 'axios';
import ImageUploader from './ImageUploader';
import { usePostsContext } from '@/context/posts';
import Image from 'next/image';

function DashPosts({ showAlert, setPage,setPostId }) {
  const [posts, setPosts, updatePosts] = usePostsContext();

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
        {posts.map((post, index) => {
          return (
            <div className={styles.single_post} key={index}>
              <h3>{post.title}</h3>
              <h4>{post.desc}</h4>
              {post.img.length > 0 ? <img src={post.img[0]} /> : ''}
              <div className={styles.btn_container}>
                <button className="btn btn-color" onClick={() => {
                  setPage('edit')
                  setPostId(post._id)
                  }}>ערוך פוסט</button>
                <button
                  className="btn btn-color"
                  onClick={() => deletePost(post._id)}
                >
                  מחק פוסט
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
