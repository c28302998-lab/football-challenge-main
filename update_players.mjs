import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFlGoOsxQoWDJBUEE2Oxn8SJOWery5j4o",
  projectId: "fcgb-785c2",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const unsplashPhotos = [
  "https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1551280857-2b9bbe52ccbd?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1624528186103-625407869695?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1508344928928-7137b29de218?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1520694478166-daaaaaec94b9?auto=format&fit=crop&w=300&q=80"
];

async function run() {
  const docRef = doc(db, "appData", "global");
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    const data = docSnap.data();
    const newTeamsData = { ...data.teamsData };
    
    let photoIndex = 0;
    
    for (const year in newTeamsData) {
      newTeamsData[year].roster = newTeamsData[year].roster.map(player => {
        let updatedPlayer = { ...player };
        
        // Update avatars to real photos
        if (updatedPlayer.image && updatedPlayer.image.includes('ui-avatars.com')) {
          updatedPlayer.image = unsplashPhotos[photoIndex % unsplashPhotos.length];
          photoIndex++;
        }
        
        // Add more info to Dmitriy Cherniavskiy
        if (updatedPlayer.name === "Чернявський Дмитро") {
          updatedPlayer.height = "187";
          updatedPlayer.weight = "76.5";
          updatedPlayer.foot = "Правая";
          updatedPlayer.gamesPlayed = 25;
          updatedPlayer.goals = 18;
          updatedPlayer.assists = 12;
          updatedPlayer.bio = "Дмитрий — высокотехничный и быстрый игрок. Отличается уверенной игрой 1 в 1, отличным дриблингом и видением поля. Способен закрыть как позицию левого нападающего, так и защитника.";
        }
        
        return updatedPlayer;
      });
    }
    
    await updateDoc(docRef, {
      teamsData: newTeamsData
    });
    console.log("Players updated successfully!");
  } else {
    console.log("Document not found!");
  }
  process.exit(0);
}

run().catch(console.error);
