import React, { useState } from 'react';
import styles from '@/styles/Dash.module.css';
import AdminNav from '@/components/AdminNav';
import TextEditor from '@/components/TextEditor';
import Section from '@/components/Section';
import axios from 'axios';

// test

import { useMobileContext } from '@/context/mobile';
//
function new_post() {
  // testt
  const [posts, setPosts] = useMobileContext();
  console.log(posts);

  //
  const [title, setTitle] = useState('כותרת');
  const [desc, setDesc] = useState('תיאור');
  const [content, setContent] = useState(
    'כתוב את הפוסט שלח כאן. אין צורך להוסיף כותרת ראשית בגוף הטקסט.'
  );

  //   post req
  // delete Product

  const post = async () => {
    try {
      await axios.post(
        `../../api/post`,
        {
          title: title,
          desc: desc,
          content: content,
          img: [],
          type: 'כתבה',
        }
        // {
        //   headers: { Authorization: `Bearer ${token}` },
        // }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(title, desc, content);
    post();
  };

  return (
    <div className={styles.page}>
      <h1>שלום. ברוך הבא למערכת ניהול האתר</h1>
      <div className={styles.nav}>
        <div className={styles.nav}>
          <AdminNav />
        </div>
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
            <button type="submit" className="btn btn-color">
              פרסם לאתר
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default new_post;