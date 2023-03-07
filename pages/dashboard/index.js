import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '@/styles/Dash.module.css';
import AdminNav from '@/components/AdminNav';
import { useSession, signIn, signOut } from 'next-auth/react';
import axios from 'axios';
import NewPost from '@/components/NewPost';
import EditPersonalInfo from '@/components/EditPersonalInfo';
import DashPosts from '@/components/DashPosts';
import DashPages from '@/components/DashPages';
import EditPost from '@/components/EditPost';
import Link from 'next/link';
import { usePostsContext } from '@/context/posts';

function Dashbord() {
  // states
  const [posts, setPosts, updatePosts] = usePostsContext();

  const [user, setUser] = useState('');
  const [page, setPage] = useState('dash');
  const [alert, setAlert] = useState();
  const [postId, setPostId] = useState();
  const [update, setUpdate] = useState(false);
  const updateUser = () => setUpdate(!update);
  // user session
  const { data: session } = useSession();
  // handle alerts
  const showAlert = (msg) => {
    setAlert(msg);
    setTimeout(() => {
      updatePosts();
      setAlert();
    }, 2000);
  };
  // handlle user
  const handleUser = async () => {
    try {
      await axios
        .post(`../../api/user`, {
          name: session.user.name,
          email: session.user.email,
          phone: 'phone',
          address: 'address',
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
  }, [update, session]);
  useEffect(() => {
    updateUser();
  }, [session]);

  return (
    <>
      <Head>
        <title>{'עורך דין אלירן בללי - מערכת לניהול האתר'}</title>
        <meta name="description" content={'עורך דין אלירן בללי'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.page} dir="rtl">
        <div className={styles.container}>
          <h1>מערכת ניהול לאתר</h1>

          {session ? (
            <>
              {user.isAdmin ? (
                <>
                  {/* the user is the admin */}
                  <div className={styles.main}>
                    <div className={styles.nav}>
                      <AdminNav setPage={setPage} />
                      {/* main page */}
                      {page == 'dash' && (
                        <>
                          <h3>שלום {session.user.name}</h3>
                          <p>
                            ברוך הבא למערכת ניהול האתר שלך. בפניך מספר אפשרויות
                            ניהול:
                          </p>
                          <ul>
                            <li>
                              <h4>פרטים אישיים</h4>
                              בעמוד זה תוכל לערוך את הפרטים האישיים המסונכרים עם
                              האתר
                            </li>
                            <li>
                              <h4>כתבות</h4>
                              בעמוד זה תוכל לנהל את הבלוג האישי שלך. לכתוב כתבות
                              חדשות, לערוך כתבות קיימות, ולמחוק כתבות לא רצויות
                            </li>
                            <li>
                              <h4>עמודי האתר</h4>
                              בעמוד זה תוכל לערוך את התוכן של עמודי האתר
                            </li>
                          </ul>
                          <p>במידה ונתקלת בבעיה אנא פנה למנהל האתר</p>
                          <br />
                        </>
                      )}
                      {page == 'info' && (
                        <EditPersonalInfo
                          user={user}
                          showAlert={showAlert}
                          updateUser={updateUser}
                        />
                      )}
                      {page == 'new' && (
                        <NewPost showAlert={showAlert} setPage={setPage} />
                      )}
                      {page == 'posts' && (
                        <DashPosts
                          showAlert={showAlert}
                          setPage={setPage}
                          setPostId={setPostId}
                        />
                      )}
                      {page == 'pages' && (
                        <>
                          <DashPages
                            showAlert={showAlert}
                            setPage={setPage}
                            setPostId={setPostId}
                          />
                        </>
                      )}

                      {page == 'edit' && (
                        <>
                          <EditPost
                            showAlert={showAlert}
                            setPage={setPage}
                            postId={postId}
                          />
                        </>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* the user is not the admin */}
                  <br />
                  <h3>אין לך השראות ניהול באתר.</h3>
                  <br />
                  <p>
                    אנא נסה להתחבר עם החשבון המקושר עם ניהול האתר. <br /> אם
                    הבעיה ממשיכה אנא פנה ל DorPlaut@gmail.com. <br /> תודה
                  </p>
                  <br />
                </>
              )}
              <button className="btn btn-color" onClick={() => signOut()}>
                logOut
              </button>
              <Link href="/" passHref legacyBehavior>
                <button className="btn btn-color">בחזרה לאתר</button>
              </Link>
            </>
          ) : (
            <>
              <p>על מנת להשתמש במערכת עליך להתחבר עם משתמש בעל הרשאות ניהול</p>
              <br />
              <button className="btn btn-color" onClick={() => signIn()}>
                login
              </button>
            </>
          )}
          {alert && <h3 className={styles.alert}>{alert}</h3>}
        </div>
      </div>
    </>
  );
}

export default Dashbord;
