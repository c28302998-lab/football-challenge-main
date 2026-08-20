import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFlGoOsxQoWDJBUEE2Oxn8SJOWery5j4o",
  projectId: "fcgb-785c2",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function run() {
  const docRef = doc(db, "appData", "global");
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    const data = docSnap.data();
    
    // 1. Update Site Settings (About text)
    const newSettings = { ...data.siteSettings };
    newSettings.historyText = "Клуб Football Challenge был создан в 2023 году в Żywiec для поддержки, спортивного развития и социализации детей и подростков в Польше через футбол. Проект помогает юным спортсменам адаптироваться в новой стране и развивать профессиональные футбольные навыки.";
    newSettings.missionText = "Наша миссия — дать каждому ребёнку возможность профессионально расти в футболе, развивать лидерские качества и успешно интегрироваться в спортивную и общественную среду Польши. Ключевые ценности: Дисциплина, командный дух, профессионализм, доступность и взаимное уважение.";
    newSettings.contactPhone = "+48 534 117 127";
    newSettings.contactEmail = "football.challenge.100@gmail.com";
    newSettings.contactAddress = "Ostrowiec Świętokrzyski, Nowy Targ, Żywiec, Польша";
    
    // 2. Add Player
    const newTeamsData = { ...data.teamsData };
    if (newTeamsData["2009"]) {
      newTeamsData["2009"].roster.push({
        id: Date.now(),
        name: "Чернявський Дмитро",
        pos: "Лівий нападник / Захисник",
        num: 15,
        goals: 0,
        age: 16,
        image: "https://ui-avatars.com/api/?name=Чернявський+Дмитро&background=1a1a1a&color=fff&size=300"
      });
    }
    
    await updateDoc(docRef, {
      siteSettings: newSettings,
      teamsData: newTeamsData
    });
    console.log("Database seeded successfully!");
  } else {
    console.log("Document not found!");
  }
  process.exit(0);
}

run().catch(console.error);
