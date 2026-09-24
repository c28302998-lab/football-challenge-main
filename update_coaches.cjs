const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/translations.js');
let content = fs.readFileSync(filePath, 'utf-8');

const ruCoaches = `
    coaches: {
      c1: { name: "Александр Ковалев", role: "Главный тренер (2008)", exp: "12 лет опыта", bio: "Специализируется на тактической подготовке и физической выносливости." },
      c2: { name: "Марек Новак", role: "Главный тренер (2009)", exp: "9 лет опыта", bio: "Эксперт по комбинационному футболу и технике контроля мяча." },
      c3: { name: "Дмитрий Савченко", role: "Главный тренер (2010)", exp: "7 лет опыта", bio: "Фокус на координации, индивидуальном дриблинге и прессинге." },
      c4: { name: "Томаш Вишневски", role: "Главный тренер (2011)", exp: "6 лет опыта", bio: "Развивает футбольный интеллект и радость от игры." }
    },`;

const ukCoaches = `
    coaches: {
      c1: { name: "Олександр Ковальов", role: "Головний тренер (2008)", exp: "12 років досвіду", bio: "Спеціалізується на тактичній підготовці та фізичній витривалості." },
      c2: { name: "Марек Новак", role: "Головний тренер (2009)", exp: "9 років досвіду", bio: "Експерт з комбінаційного футболу та техніки контролю м'яча." },
      c3: { name: "Дмитро Савченко", role: "Головний тренер (2010)", exp: "7 років досвіду", bio: "Фокус на координації, індивідуальному дриблінгу та пресингу." },
      c4: { name: "Томаш Вишневський", role: "Головний тренер (2011)", exp: "6 років досвіду", bio: "Розвиває футбольний інтелект та радість від гри." }
    },`;

const plCoaches = `
    coaches: {
      c1: { name: "Aleksander Kowalew", role: "Główny trener (2008)", exp: "12 lat doświadczenia", bio: "Specjalizuje się w przygotowaniu taktycznym i wytrzymałości fizycznej." },
      c2: { name: "Marek Nowak", role: "Główny trener (2009)", exp: "9 lat doświadczenia", bio: "Ekspert w piłce kombinacyjnej i technice kontroli piłki." },
      c3: { name: "Dmytro Sawczenko", role: "Główny trener (2010)", exp: "7 lat doświadczenia", bio: "Skupienie na koordynacji, indywidualnym dryblingu i pressingu." },
      c4: { name: "Tomasz Wiśniewski", role: "Główny trener (2011)", exp: "6 lat doświadczenia", bio: "Rozwija inteligencję piłkarską i radość z gry." }
    },`;

const enCoaches = `
    coaches: {
      c1: { name: "Alexander Kovalev", role: "Head Coach (2008)", exp: "12 years experience", bio: "Specializes in tactical preparation and physical endurance." },
      c2: { name: "Marek Nowak", role: "Head Coach (2009)", exp: "9 years experience", bio: "Expert in combination football and ball control technique." },
      c3: { name: "Dmitry Savchenko", role: "Head Coach (2010)", exp: "7 years experience", bio: "Focus on coordination, individual dribbling, and pressing." },
      c4: { name: "Tomasz Wisniewski", role: "Head Coach (2011)", exp: "6 years experience", bio: "Develops football intelligence and joy of the game." }
    },`;

content = content.replace(/admin: \{/g, (match, offset, str) => {
  // Inject before admin
  const langMatch = str.substring(0, offset).match(/export const translations = \{\n\s+ru: \{/);
  // Actually, we can just replace 'admin: {' with our string + 'admin: {' depending on language
  // But let's do it safer by matching `contacts: {` and finding the end.
  return match;
});

// A safer replace:
content = content.replace(/(\s+contacts: \{[\s\S]*?\},)/g, (match) => {
  return match + "\nCOACH_PLACEHOLDER\n";
});

content = content.replace('COACH_PLACEHOLDER', ruCoaches);
content = content.replace('COACH_PLACEHOLDER', ukCoaches);
content = content.replace('COACH_PLACEHOLDER', plCoaches);
content = content.replace('COACH_PLACEHOLDER', enCoaches);

fs.writeFileSync(filePath, content);
console.log('Added coaches translations');
