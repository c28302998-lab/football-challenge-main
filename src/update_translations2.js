const fs = require('fs');
const file = './data/translations.js';
let content = fs.readFileSync(file, 'utf8');

function injectTranslations(lang, data) {
  const regex = new RegExp(`(${lang}: \\{\\s*[\\s\\S]*?)(nav: \\{)`, 'g');
  return content.replace(regex, `$1${data}\n    $2`);
}

content = injectTranslations('ru', `navTitle: "Навигация",\n    contactsTitle: "Контакты",`);
content = injectTranslations('uk', `navTitle: "Навігація",\n    contactsTitle: "Контакти",`);
content = injectTranslations('pl', `navTitle: "Nawigacja",\n    contactsTitle: "Kontakt",`);
content = injectTranslations('en', `navTitle: "Navigation",\n    contactsTitle: "Contacts",`);

function injectAcademy(lang, data) {
  const regex = new RegExp(`(${lang}: \\{\\s*[\\s\\S]*?academy: \\{[\\s\\S]*?)(successMsg: [^,]+,)`, 'g');
  return content.replace(regex, `$1${data}\n      $2`);
}

content = injectAcademy('ru', `formSubtitle: "Заполните поля ниже, и мы свяжемся с вами",\n      placeholderName: "Имя Фамилия",\n      placeholderParent: "Родитель",`);
content = injectAcademy('uk', `formSubtitle: "Заповніть поля нижче, і ми зв'яжемося з вами",\n      placeholderName: "Ім'я Прізвище",\n      placeholderParent: "Батьки",`);
content = injectAcademy('pl', `formSubtitle: "Wypełnij poniższe pola, a my skontaktujemy się z Tobą",\n      placeholderName: "Imię i nazwisko",\n      placeholderParent: "Rodzic",`);
content = injectAcademy('en', `formSubtitle: "Fill out the fields below and we will contact you",\n      placeholderName: "Full Name",\n      placeholderParent: "Parent",`);


fs.writeFileSync(file, content, 'utf8');
console.log("Updated translations");
