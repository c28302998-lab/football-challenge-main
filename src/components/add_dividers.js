const fs = require('fs');
const files = [
  './TournamentsSection.jsx',
  './MediaSection.jsx',
  './TeamsSection.jsx',
  './AcademySection.jsx',
  './SponsorsSection.jsx',
  './NewsSection.jsx',
  './ContactsSection.jsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Try to find the h2 block to add the divider inside it or right below it
  // Most are like: <h2 className="..."> {t.xyz.title} </h2>
  // Let's use a regex to match the closing </h2> after a title and append the divider
  const regex = /(<h2[^>]*>[\s\S]*?\{t\.[a-z]+\.title\}[\s\S]*?<\/h2>)/;
  
  // MediaSection uses a ternary: {mediaTab === 'video' ? t.video.title : t.gallery.title}
  const regexMedia = /(<h2[^>]*>[\s\S]*?t\.gallery\.title\}[\s\S]*?<\/h2>)/;

  const divider = '\n          <div className="w-12 h-1 bg-emerald-500 mx-auto mt-6 rounded-full"></div>';

  if (file.includes('MediaSection')) {
    if (!content.includes('bg-emerald-500 mx-auto mt-6 rounded-full')) {
        content = content.replace(regexMedia, `$1${divider}`);
    }
  } else {
    if (!content.includes('bg-emerald-500 mx-auto mt-6 rounded-full')) {
        content = content.replace(regex, `$1${divider}`);
    }
  }

  fs.writeFileSync(file, content, 'utf8');
});

console.log("Dividers added");
