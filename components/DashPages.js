import React, { useState, useEffect } from 'react';
import styles from '@/styles/Dash.module.css';
import TextEditor from '@/components/TextEditor';
import axios from 'axios';
import ImageUploader from './ImageUploader';
import { usePostsContext } from '@/context/posts';
import Image from 'next/image';

function DashPages({ showAlert, setPage, setPostId }) {
  const [posts, setPosts, updatePosts] = usePostsContext();
  const [selectedPosts, setSelected] = useState([]);

  // flitersd unwonted posts
  useEffect(() => {
    if (posts) {
      setSelected(
        posts.filter((i) => {
          return i.type != 'כתבה';
        })
      );
    }
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.post_container}>
        {selectedPosts.map((post, index) => {
          return (
            <div className={styles.single_post} key={index}>
              <h2>{post.type}</h2>

              <div className={styles.btn_container}>
                <button
                  className="btn btn-color"
                  onClick={() => {
                    setPage('edit');
                    setPostId(post._id);
                  }}
                >
                  ערוך את תוכן העמוד
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DashPages;
