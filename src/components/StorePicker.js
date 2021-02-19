import React, { useState, useEffect, Fragment } from 'react';
// import { useListKeys } from 'react-firebase-hooks/database';
import { Link } from 'react-router-dom';
import firebase from '../firebase';

function StorePicker() {

  const [userId, setUserId] = useState();
  const dbRef = firebase.database().ref('USER1');
  const [stores, setStores] = useState([]);
  
  // const [keys, loading, error] = useListKeys(dbRef)

  useEffect(() => {
      dbRef.on('value', (data) => {
      const firebaseDataObject = data.val();
      const storeLocation = Object.keys(firebaseDataObject)
      setStores(storeLocation);
    })
  }, [])

  console.log({stores});

  return (
    <Fragment>
      <form>
        <label htmlFor="storeDropdown">Pick store: </label>
        <select name="storeDropdown" id="storeDropdown">
          {
            stores.map((store) => {
              return <option value={store} key={store}>{store}</option>
            })
          }
        </select>
      </form>
    </Fragment>
  )
}

export default StorePicker;