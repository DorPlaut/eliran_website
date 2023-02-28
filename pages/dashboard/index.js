import React, { useEffect, useState } from 'react';
import styles from '@/styles/Dash.module.css';
import AdminNav from '@/components/AdminNav';
import { useSession, signIn, signOut } from 'next-auth/react';
import axios from 'axios';
import NewPost from '@/components/NewPost';

function dashbord() {
  // states
  const [user, setUser] = useState('');
  const [page, setPage] = useState('dash');
  const { data: session } = useSession();

  // handlle user
  const handleUser = async () => {
    try {
      await axios
        .post(`../../api/user`, {
          name: session.user.name,
          email: session.user.email,
        })
        .then((res) => {
          setUser(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (session) {
      handleUser();
    }
  }, [session]);

  return (
    <div className={styles.page}>
      <h1>שלום. ברוך הבא למערכת ניהול האתר</h1>

      {session ? (
        <>
          {user.isAdmin ? (
            <>
              {/* the user is the admin */}
              <div className={styles.nav}>
                <div className={styles.nav}>
                  <AdminNav setPage={setPage} />
                  {/* main page */}
                  {page == 'dash' && (
                    <>
                      <h1>main</h1>
                    </>
                  )}
                  {page == 'new' && (
                    <>
                      <NewPost />
                    </>
                  )}
                </div>
                <div className={styles.main}></div>
              </div>
            </>
          ) : (
            <>
              {/* the user is not the admin */}
              <br />
              <h3>אין לך השראות ניהול באתר.</h3>
              <br />
              <p>
                אנא נסה להתחבר עם החשבון המקושר עם ניהול האתר. אם הבעיה ממשיכה
                אנא פנה ל DorPlaut@gmail.com. תודה
              </p>
              <br />
            </>
          )}
          <button className="btn btn-color" onClick={() => signOut()}>
            logOut
          </button>
        </>
      ) : (
        <>
          <p>על מנת להשתמש במערכת עליך להתחבר עם משתמש בעל הרשאות ניהול</p>
          <button className="btn btn-color" onClick={() => signIn()}>
            login
          </button>
        </>
      )}
    </div>
  );
}

export default dashbord;
