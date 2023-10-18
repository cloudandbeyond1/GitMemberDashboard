import React from "react";

import AllRoutes from "./routes/Routes";

import { configureFakeBackend } from "./helpers";

import { AppContextProvider } from './AppContext';
// For Default import Default.scss
import './assets/scss/Default.scss';

// For Saas import Saas.scss
// import './assets/scss/Saas.scss';

// For Modern demo import Modern.scss
// import './assets/scss/Modern.scss';

// For Creative demo import Creative.scss
// import "./assets/scss/Creative.scss";

// For Purple demo import Purple.scss
// import './assets/scss/Purple.scss';

// For Material demo import Material.scss
// import './assets/scss/Material.scss';


// Other
import './assets/scss/Landing.scss';
import "./assets/scss/Icons.scss";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from 'firebase/database';
import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDwjYE-3pTYAZZBnllBfalXOBWaA_M2ySA",
//   authDomain: "react-firebase-auth-c4b95.firebaseapp.com",
//   projectId: "react-firebase-auth-c4b95",
//   storageBucket: "react-firebase-auth-c4b95.appspot.com",
//   messagingSenderId: "964312904452",
//   appId: "1:964312904452:web:cf4c48c0da67f34b1d5651",
//   measurementId: "G-6LBHWQYY0W"
// };
// const firebaseApp = initializeApp(firebaseConfig);
// const db = getDatabase(firebaseApp);
// // configure fake backend
// configureFakeBackend();
// const auth = getAuth();
const App = () => {
//   // 
//   const user = auth.currentUser;
//   console.log('currentUser value:', user); 



//  const [receivedData, setReceivedData] = useState();
//  const valueFromWindow = window.name;
//  console.log('Domain Data:',receivedData,valueFromWindow);
//  useEffect(() => {
//   // Define a message event listener to handle messages from the sender domain
//   const handleMessage = (event :any) => {
//     console.log(event,"eve")
//     // Check if the origin of the message is from the sender domain
//     if (event.origin === 'http://localhost:3001/') {
//       // Update the received message state with the message data 
//       setReceivedData(JSON.parse(event.data));
//     }
//   };

//   // Add the message event listener to the window
//   window.addEventListener('message', handleMessage);

//   // Clean up the event listener when the component unmounts
//   return () => {
//     window.removeEventListener('message', handleMessage);
//   };
// }, []); 

//  useEffect(() => {
//   const token = new URLSearchParams(window.location.search).get('token');  
//   console.log('token123 Data:',token);
//   const dataRef = ref(db, 'sharedData');
//   // Listen for data changes
//   const onDataChange = (snapshot: any) => {
//     const data = snapshot.val();
   
//     if (data) {
//       const dataArray = Object.values(data);
//       console.log(dataArray,"dataArray");
//       setReceivedData(data);
//     }
//   };

//   onValue(dataRef, onDataChange);
 
//   // Clean up the listener when the component unmounts
//   return () => {
//     console.log(dataRef,"dataArray123");
//     // Unsubscribe from changes
//    // onValue(dataRef,null);
//   };
// }, []);
  return (
    <>
      <React.Fragment>
        <AppContextProvider>
        <AllRoutes />
        </AppContextProvider>
      </React.Fragment>
    </>
  );
};

export default App;
