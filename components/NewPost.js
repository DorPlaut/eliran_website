import React, { useState } from 'react';
import styles from '@/styles/Dash.module.css';
import TextEditor from '@/components/TextEditor';
import axios from 'axios';
import ImageUploader from './ImageUploader';

// test

import { usePostsContext } from '@/context/posts';
function NewPost({ showAlert, setPage }) {
  // testt
  const [posts, setPosts] = usePostsContext();

  // post content
  const [title, setTitle] = useState('כותרת');
  const [desc, setDesc] = useState('תיאור');
  const [content, setContent] = useState(
    'כתוב את הפוסט שלח כאן. אין צורך להוסיף כותרת ראשית בגוף הטקסט.'
  );
  const [photos, setPhotos] = useState([]);

  //   post req

  const post = async () => {
    try {
      await axios
        .post(
          `../../api/posts`,
          {
            title: title,
            desc: desc,
            content: content,
            img: photos,
            type: 'כתבה',
          }
          // {
          //   headers: { Authorization: `Bearer ${token}` },
          // }
        )
        .then(() => {
          showAlert('הפוסט נשלח בהצלחה');
          setPage('dash');
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(title, desc, content);
    post();
  };

  return (
    <div className={styles.main}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h3>:פוסט חדש</h3>
        {/* title */}
        <input
          type="text"
          placeholder={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* desc */}
        <input
          type="text"
          placeholder={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        {/* content */}
        <div className={styles.textarea}>
          <TextEditor content={content} setContent={setContent} />
        </div>
        <ImageUploader
          photos={photos}
          setPhotos={setPhotos}
          text="Upload Pic"
        />
        <div className={styles.post_container}>
          {photos.map((i) => (
            <div className={styles.single_post} key={i}>
              <img src={i} alt="" />
              <button
                type="button"
                onClick={() => {
                  setPhotos(photos.filter((img) => img != i));
                }}
                className="btn btn-color"
              >
                מחק
              </button>
            </div>
          ))}
        </div>

        <button type="submit" className="btn btn-color">
          פרסם לאתר
        </button>
      </form>
      <br />
    </div>
  );
}

export default NewPost;
