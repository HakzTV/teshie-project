  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";
  // import { getFirestore, collection, getDocs } from "firebase/firestore";
  import { getFirestore } from "firebase/firestore";
  import { getStorage } from "firebase/storage";
  import { getAuth, GoogleAuthProvider } from "firebase/auth";

  
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
  };
  
  let app, analytics, db, storage, auth, googleProvider;
  
  const areEnvVariablesPresent = () => {
    return Object.values(firebaseConfig).every(value => value !== undefined);
  };
  
  const initializeFirebase = () => {
    if (areEnvVariablesPresent()) {
      console.log('Firebase configuration is present. Initializing Firebase...');
      app = initializeApp(firebaseConfig);
      analytics = getAnalytics(app);
      db = getFirestore(app);
      storage = getStorage(app);
      auth = getAuth(app);
      googleProvider = new GoogleAuthProvider();
      console.log('Firebase initialized successfully.');
    } else {
      console.error('Missing Firebase configuration. Retrying...');
      setTimeout(initializeFirebase, 1000); 
    }
  };
  
  // Initialize Firebase with retry mechanism
  initializeFirebase();
  
  // export const fetchProducts = async () => {
  //   try {
  //     const productsCollection = collection(db, 'products');
  //     const productsSnapshot = await getDocs(productsCollection);
  //     const productsList = productsSnapshot.docs.map(doc => {
  //       const data = doc.data();
  //       return {
  //         id: data['product-id'], // Map 'product-id' to 'id'
  //         ...data
  //       };
  //     });
  //     return productsList;
  //   } catch (error) {
  //     console.error('Error fetching products:', error);
  //     return [];
  //   }
  // };
  
  export { db, storage, analytics, auth, googleProvider  };
  

    // import { initializeApp } from "firebase/app";
  // import { getAnalytics } from "firebase/analytics";
  // import { getFirestore, collection, getDocs } from "firebase/firestore";
  // import { getStorage } from "firebase/storage";
  // import { getAuth, GoogleAuthProvider } from "firebase/auth";

  
  // // Your web app's Firebase configuration
  // const firebaseConfig = {
  //   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  //   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  //   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  //   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  //   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  //   appId: import.meta.env.VITE_FIREBASE_APP_ID,
  //   measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
  // };
  
  // let app, analytics, db, storage, auth, googleProvider;
  
  // const areEnvVariablesPresent = () => {
  //   return Object.values(firebaseConfig).every(value => value !== undefined);
  // };
  
  // const initializeFirebase = () => {
  //   if (areEnvVariablesPresent()) {
  //     console.log('Firebase configuration is present. Initializing Firebase...');
  //     app = initializeApp(firebaseConfig);
  //     analytics = getAnalytics(app);
  //     db = getFirestore(app);
  //     storage = getStorage(app);
  //     auth = getAuth(app);
  //     googleProvider = new GoogleAuthProvider();
  //     console.log('Firebase initialized successfully.');
  //   } else {
  //     console.error('Missing Firebase configuration. Retrying...');
  //     setTimeout(initializeFirebase, 1000); 
  //   }
  // };
  
  // // Initialize Firebase with retry mechanism
  // initializeFirebase();
  
  // export const fetchProducts = async () => {
  //   try {
  //     const productsCollection = collection(db, 'products');
  //     const productsSnapshot = await getDocs(productsCollection);
  //     const productsList = productsSnapshot.docs.map(doc => {
  //       const data = doc.data();
  //       return {
  //         id: data['product-id'], // Map 'product-id' to 'id'
  //         ...data
  //       };
  //     });
  //     return productsList;
  //   } catch (error) {
  //     console.error('Error fetching products:', error);
  //     return [];
  //   }
  // };
  
  // export { db, storage, analytics, auth, googleProvider  };
//   import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore, collection, getDocs } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,
//   measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
// };

// let app, analytics, db, storage, auth, googleProvider;

// const areEnvVariablesPresent = () => {
//   return Object.values(firebaseConfig).every(value => value !== undefined);
// };

// const initializeFirebase = () => {
//   if (areEnvVariablesPresent()) {
//     console.log('Firebase configuration is present. Initializing Firebase...');
//     app = initializeApp(firebaseConfig);
//     analytics = getAnalytics(app);
//     db = getFirestore(app);
//     storage = getStorage(app);
//     auth = getAuth(app);
//     googleProvider = new GoogleAuthProvider();
//     console.log('Firebase initialized successfully.');
//   } else {
//     console.error('Missing Firebase configuration. Retrying...');
//     setTimeout(initializeFirebase, 1000); 
//   }
// };

// // Initialize Firebase with retry mechanism
// initializeFirebase();
    
// export const fetchProducts = async () => {
//   try {
//     const productsCollection = collection(db, 'products');
//     const productsSnapshot = await getDocs(productsCollection);
//     const productsList = productsSnapshot.docs.map(doc => {
//       const data = doc.data();
//       return {
//         id: data['product-id'], // Map 'product-id' to 'id'
//         ...data
//       };
//     });
//     return productsList;
//   } catch (error) {
//     console.error('Error fetching products:', error);
//     return [];
//   }
// };

// export { db, storage, analytics, auth, googleProvider  };
