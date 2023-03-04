import React, { useState } from 'react';
import styles from '@/styles/Dash.module.css';
import axios from 'axios';

export default function EditPersonalInfo({ user, showAlert, updateUser }) {
  // state
  const [newAdress, setNewAdress] = useState();
  const [newPhone, setNewPhone] = useState();
  const [newEmail, setNewEmail] = useState();
  // update
  const reqBody = () => {
    let res = { id: _id };
    if (newAdress) res.address = newAdress;
    if (newPhone) res.phone = newPhone;
    if (newEmail) res.email = newEmail;
    return res;
  };
  // update profile info
  const updateProfile = async () => {
    try {
      await axios.put(`../../api/user`, reqBody()).then((res) => {
        setNewAdress('');
        setNewPhone('');
        setNewEmail('');
        showAlert('הפרטים עודכנו בהצלחה');
        updateUser();
      });
    } catch (err) {
      console.log(err);
    }
  };
  //   handle Click

  //   rephrase data for ui
  const { _id, name, email, phone, address } = user;
  return (
    <div className={styles.dash}>
      <h3>ערוך את הפרטים שלך:</h3>
      <div className={styles.form}>
        <p>המידע המוצג בלוח הבקרה מסונכרן אוטומטית עם האתר. </p>
        {/* email */}
        {/* <span>כתובת המייל המקושרת לאתר היא: {email}</span>
        {newEmail ? (
          <>
            <input
              type="text"
              value={newEmail}
              onChange={(e) => {
                setNewEmail(e.target.value);
              }}
            />
            <button className="btn btn-color" onClick={() => updateProfile()}>
              לחץ כאן בשביל לשמור
            </button>
          </>
        ) : (
          <button className="btn btn-color" onClick={() => setNewEmail(' ')}>
            לשינוי כתובת המייל לחץ כאן
          </button>
        )} */}
        {/* phone */}
        <span>מספר הטלפון המקושר לאתר הוא: {phone}</span>
        {newPhone ? (
          <>
            <input
              type="text"
              value={newPhone}
              onChange={(e) => {
                setNewPhone(e.target.value);
              }}
            />
            <button className="btn btn-color" onClick={() => updateProfile()}>
              לחץ כאן בשביל לשמור
            </button>
          </>
        ) : (
          <button className="btn btn-color" onClick={() => setNewPhone(' ')}>
            לשינוי המספר לחץ כאן
          </button>
        )}
        {/* adress */}
        <span>כתובת המשרד המקושרת לאתר היא: {address}</span>
        {newAdress ? (
          <>
            <input
              type="text"
              value={newAdress}
              onChange={(e) => {
                setNewAdress(e.target.value);
              }}
            />
            <button className="btn btn-color" onClick={() => updateProfile()}>
              לחץ כאן בשביל לשמור
            </button>
          </>
        ) : (
          <button className="btn btn-color" onClick={() => setNewAdress(' ')}>
            לשינוי הכתובת לחץ כאן
          </button>
        )}
        <br />
      </div>
    </div>
  );
}
