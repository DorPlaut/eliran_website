import React, { useEffect, useState } from 'react';
import styles from '@/styles/Dash.module.css';
import TextEditor from '@/components/TextEditor';
import axios from 'axios';
import ImageUploader from './ImageUploader';
import { usePostsContext } from '@/context/posts';

function EditPost({ showAlert, setPage, postId }) {
  // testt
  const [posts, setPosts] = usePostsContext();
  const [postToEdit, setPost] = useState();

  // set post to edit
  useEffect(() => {
    posts.map((post, index) => {
      if (post._id == postId) {
        setPost(post);
      }
    });
  }, []);
  useEffect(() => {
    if (postToEdit) {
      setTitle(postToEdit.title);
      setDesc(postToEdit.desc);
      setContent(postToEdit.content);
      setPhotos(postToEdit.img);
    }
  }, [postToEdit]);

  // post content
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [content, setContent] = useState();
  const [photos, setPhotos] = useState([]);

  //   post req

  // update post info
  const updatePost = async () => {
    console.log('update');
    try {
      await axios.put(`../../api/posts`, reqBody()).then((res) => {
        showAlert('הפוסט עודכנו בהצלחה');
        setPage('dash');
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updatePost();
  };

  // set update body
  // update
  const reqBody = () => {
    let body = { id: postToEdit._id };
    if (title != postToEdit.title) body.title = title;
    if (desc != postToEdit.desc) body.desc = desc;
    if (content != postToEdit.content) body.content = content;
    if (photos != postToEdit.img) body.img = photos;

    return body;
  };

  return (
    <div className={styles.main}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h3>ערוך את הפוסט:</h3>
        {postToEdit && (
          <>
            {/* title */}
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {/* desc */}
            <input
              type="text"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            {/* content */}
            <div className={styles.textarea}>
              <TextEditor content={content} edit setContent={setContent} />
            </div>
            <ImageUploader
              photos={photos}
              setPhotos={setPhotos}
              text="Upload Pic"
            />
            <div>
              {photos.length > 0 && (
                <>
                  {photos.map((i) => (
                    <img src={i} alt="" key={i} />
                  ))}
                  <br />
                </>
              )}
            </div>

            <button type="submit" className="btn btn-color">
              שמור שינויים
            </button>
          </>
        )}
      </form>
      <br />
    </div>
  );
}

export default EditPost;
