import React from 'react';
import styles from '@/styles/Dash.module.css';

function AdminNav({ setPage }) {
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <button onClick={() => setPage('dash')} className="btn btn-icon">
            לוח בקרה
          </button>
        </li>
        <li>
          <button onClick={() => setPage('info')} className="btn btn-icon">
            פרטים אישיים
          </button>
        </li>

        <li>
          <button onClick={() => setPage('posts')} className="btn btn-icon">
            כתבות
          </button>
        </li>
        <li>
          <button onClick={() => setPage('pages')} className="btn btn-icon">
            עמודי האתר
          </button>
        </li>
      </ul>
    </div>
  );
}

export default AdminNav;
