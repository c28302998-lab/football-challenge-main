const fs = require('fs');
const file = './data/initialData.js';
let content = fs.readFileSync(file, 'utf8');

// Replace Coach Names
content = content.replace(/Александр Ковалев/g, "Aleksander Kowalski");
content = content.replace(/Михаил Петров/g, "Michał Nowak");
content = content.replace(/Главный тренер/g, "Główny trener");
content = content.replace(/Тренер вратарей/g, "Trener bramkarzy");

// Replace Team titles
content = content.replace(/FOOTBALL CHALLENGE 2008 \(U-17\)/g, "FOOTBALL CHALLENGE 2008");
content = content.replace(/FOOTBALL CHALLENGE 2009 \(U-16\)/g, "FOOTBALL CHALLENGE 2009");
content = content.replace(/FOOTBALL CHALLENGE 2010 \(U-15\)/g, "FOOTBALL CHALLENGE 2010");
content = content.replace(/FOOTBALL CHALLENGE 2011 \(U-14\)/g, "FOOTBALL CHALLENGE 2011");

// Replace Players
content = content.replace(/Иван Сидоров/g, "Jan Sidor");
content = content.replace(/Артем Морозов/g, "Artur Moroz");
content = content.replace(/Максим Волков/g, "Maksym Wilk");
content = content.replace(/Дмитрий Соколов/g, "Dmitry Sokołowski");
content = content.replace(/Егор Лебедев/g, "Igor Lebiediew");

// Replace Positions
content = content.replace(/Нападающий/g, "Napastnik");
content = content.replace(/Полузащитник/g, "Pomocnik");
content = content.replace(/Вратарь/g, "Bramkarz");
content = content.replace(/Защитник/g, "Obrońca");

// Replace News Titles and Summaries
content = content.replace(/Победа в Зимнем Кубке Варшавы/g, "Zwycięstwo w Zimowym Pucharze Warszawy");
content = content.replace(/Наша команда U-17 одержала волевую победу в финале престижного турнира, обыграв сверстников со счетом 2:1./g, "Nasza drużyna U-17 odniosła wspaniałe zwycięstwo w finale prestiżowego turnieju, wygrywając z rówieśnikami 2:1.");
content = content.replace(/Старт нового набора в академию/g, "Start nowego naboru do akademii");
content = content.replace(/Приглашаем юных футболистов 2014-2016 годов рождения на просмотр в нашу академию. Места ограничены./g, "Zapraszamy młodych piłkarzy z roczników 2014-2016 na testy do naszej akademii. Liczba miejsc jest ograniczona.");
content = content.replace(/Товарищеский матч с Legia Warsaw/g, "Mecz towarzyski z Legią Warszawa");
content = content.replace(/Отличный опыт для наших воспитанников: мы провели серию контрольных игр с одной из лучших академий Польши./g, "Świetne doświadczenie dla naszych zawodników: rozegraliśmy serię meczów kontrolnych z jedną z najlepszych akademii w Polsce.");

// Replace tournament names
content = content.replace(/Кубок Варшавы/g, "Puchar Warszawy");
content = content.replace(/Лига Мазовии/g, "Liga Mazowiecka");
content = content.replace(/Международный Кубок/g, "Puchar Międzynarodowy");

// Replace descriptions
content = content.replace(/Уверенная победа в финале со счетом 3:1/g, "Pewne zwycięstwo w finale wynikiem 3:1");
content = content.replace(/Текущее 2-е место, отставание от лидера 2 очка/g, "Obecnie 2. miejsce, 2 punkty straty do lidera");
content = content.replace(/Выход в четвертьфинал турнира/g, "Awans do ćwierćfinału turnieju");

fs.writeFileSync(file, content, 'utf8');
console.log("Updated initialData.js");
