import { initializeApp } from "firebase/app";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import { translations } from "./src/data/translations.js";

const firebaseConfig = {
  apiKey: "AIzaSyAFlGoOsxQoWDJBUEE2Oxn8SJOWery5j4o",
  projectId: "fcgb-785c2",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function run() {
  const docRef = doc(db, "appData", "global");
  
  await updateDoc(docRef, {
    customTranslations: translations
  });
  console.log("Translations seeded successfully!");
  process.exit(0);
}

run().catch(console.error);
