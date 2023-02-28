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
          <button onClick={() => setPage('new')} className="btn btn-icon">
            כתוב פוסט חדש
          </button>
        </li>
      </ul>
    </div>
  );
}

export default AdminNav;
