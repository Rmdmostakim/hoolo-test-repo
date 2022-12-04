
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    GoogleAuthProvider, signInWithPopup
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyBt3dKDh02wT3p1ZfddgWBylvhB1D465h4',
    authDomain: 'test-hoolo.firebaseapp.com',
    projectId: 'test-hoolo',
    storageBucket: 'test-hoolo.appspot.com',
    messagingSenderId: '924865368046',
    appId: '1:924865368046:web:ca9750c5d8dd95ba65c8ff',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const google = new GoogleAuthProvider();

export const socialLogin = async (provider) => {
    try {
        const res = await signInWithPopup(auth, provider);
        return res;
    } catch (err) {
        return false;
    }
};

// const db = getFirestore(app);
// const logInWithEmailAndPassword = async (email, password) => {
//     try {
//         await signInWithEmailAndPassword(auth, email, password);
//     } catch (err) {
//         console.error(err);
//     }
// };

// const registerWithEmailAndPassword = async (name, email, password) => {
//     try {
//         const res = await createUserWithEmailAndPassword(auth, email, password);
//         const { user } = res;
//         await addDoc(collection(db, 'users'), {
//             uid: user.uid,
//             name,
//             authProvider: 'local',
//             email,
//         });
//     } catch (err) {
//         console.error(err);
//     }
// };

// const sendPasswordReset = async (email) => {
//     try {
//         await sendPasswordResetEmail(auth, email);
//     } catch (err) {
//         console.error(err);
//     }
// };

// const logout = () => {
//     signOut(auth);
// };

