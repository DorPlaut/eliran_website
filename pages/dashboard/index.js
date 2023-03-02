import React, { useEffect, useState } from 'react';
import styles from '@/styles/Dash.module.css';
import AdminNav from '@/components/AdminNav';
import { useSession, signIn, signOut } from 'next-auth/react';
import axios from 'axios';
import NewPost from '@/components/NewPost';
import EditPersonalInfo from '@/components/EditPersonalInfo';
import DashPosts from '@/components/DashPosts';
import EditPost from '@/components/EditPost';

function Dashbord() {
  // states
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
      setAlert();
    }, 1000);
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
  }, [update]);
  useEffect(() => {
    updateUser();
  }, [session]);

  return (
    <div className={styles.page} dir="rtl">
      <div className={styles.container}>
        <h1>שלום. ברוך הבא למערכת ניהול האתר</h1>

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
                        <EditPersonalInfo
                          user={user}
                          showAlert={showAlert}
                          updateUser={updateUser}
                        />
                      </>
                    )}
                    {page == 'new' && (
                      <>
                        <NewPost showAlert={showAlert} setPage={setPage} />
                      </>
                    )}
                    {page == 'posts' && (
                      <>
                        <DashPosts showAlert={showAlert} setPage={setPage} setPostId={setPostId} />
                      </>
                    )}
                
                    {page == 'edit' && (
                      <>
                        <EditPost showAlert={showAlert} setPage={setPage} postId={postId} />
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
                  אנא נסה להתחבר עם החשבון המקושר עם ניהול האתר. <br /> אם הבעיה
                  ממשיכה אנא פנה ל DorPlaut@gmail.com. <br /> תודה
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
           <br/>
            <button className="btn btn-color" onClick={() => signIn()}>
              login
            </button>
          </>
        )}
        {alert && <h3 className={styles.alert}>{alert}</h3>}
      </div>
    </div>
  );
}

export default Dashbord;
