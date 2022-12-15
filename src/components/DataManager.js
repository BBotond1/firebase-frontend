import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBd1PpfM-fjCsjF6NUW03YW-JgmbmGeweI",
  authDomain: "fir-starwars-ad9bf.firebaseapp.com",
  projectId: "fir-starwars-ad9bf",
  storageBucket: "fir-starwars-ad9bf.appspot.com",
  messagingSenderId: "419745869900",
  appId: "1:419745869900:web:28a24579b0e8fd2c2684e9",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const getPeople = async () => {
  const querySnapshot = await getDocs(collection(db, "people"));
  const people = [];
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    people.push(doc.data());
  });
  return people;
};

export const addPerson = async (name, height, mass) => {
  try {
    const docRef = await addDoc(collection(db, "people"), {
      name,
      height,
      mass,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
