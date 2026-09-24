import { db } from './src/firebase.js';
import { doc, setDoc } from 'firebase/firestore';
import { translations } from './src/data/translations.js';
import { initialData } from './src/data/initialData.js';

async function sync() {
  try {
    console.log("Uploading translations to Firebase...");
    await setDoc(doc(db, "appData", "global"), {
      customTranslations: translations,
      teamsData: initialData.teams,
      coaches: initialData.coaches,
      partners: initialData.partners
    }, { merge: true });
    
    console.log("Success! Firebase is now updated with the local source of truth.");
    process.exit(0);
  } catch(e) {
    console.error(e);
    process.exit(1);
  }
}

sync();
