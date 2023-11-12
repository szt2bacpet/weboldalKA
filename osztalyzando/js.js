const timetableData = [
    {
        day: "Hétfő",
        lessons: [
            { time: "8:00", subject: "Szakmai angol" },
            { time: "8:55", subject: "Webprogramozás" },
            { time: "9:55", subject: "Adatbázis kezelés" },
            { time: "10:50", subject: "Mobilalkalmazás fejlesztés" },
            { time: "11:45", subject: "Frontend fejlesztés" },
            { time: "12:45", subject: "Backend fejlesztés" },
            { time: "13:40", subject: "Java programozás" },
        ]
    },
    {
        day: "Kedd",
        lessons: [
            { time: "8:00", subject: "Javascript programozás" },
            { time: "8:55", subject: "MVVM tervezés" },
            { time: "9:55", subject: "Frentend fejlesztés" },
            { time: "10:50", subject: "Backend fejlesztés" },
            { time: "11:45", subject: "Java programozás" },
        ]
    },
    {
        day: "Szerda",
        lessons: [
            { time: "8:00", subject: "Szakmai angol" },
            { time: "8:55", subject: "Webprogramozás" },
            { time: "9:55", subject: "Adatbázis kezelés" },
            { time: "10:50", subject: "Mobilalkalmazás fejlesztés" },
            { time: "11:45", subject: "Frontend fejlesztés" },
            { time: "12:45", subject: "Backend fejlesztés" },
            { time: "13:40", subject: "Javascript programozás" },
        ]
    },
    {
        day: "Csütörtök",
        lessons: [
            { time: "8:00", subject: "Szakmai angol" },
            { time: "8:55", subject: "Webprogramozás" },
            { time: "9:55", subject: "Adatbázis kezelés" },
            { time: "10:50", subject: "Mobilalkalmazás fejlesztés" },
            { time: "11:45", subject: "Frontend fejlesztés" },
            { time: "12:45", subject: "Backend fejlesztés" },
            { time: "13:40", subject: "MVVM tervezés" },
        ]
    },
    {
        day: "Péntek",
        lessons: [
            { time: "8:00", subject: "Javascript programozás" },
            { time: "8:55", subject: "Java programozás" },
            { time: "9:55", subject: "Webprogramozás" },
            { time: "10:50", subject: "Adatbázis kezelés" },
            { time: "11:45", subject: "Frontend fejlesztés" },
            { time: "12:45", subject: "Backend fejlesztés" },
            { time: "13:40", subject: "MVVM tervezés" },
        ]
    },
    {
        day: "Szombat",
        lessons: [{ time: "-", subject: "Tanítás nélküli nap" }]
    },
    {
        day: "Vasárnap",
        lessons: [{ time: "-", subject: "Tanítás nélküli nap" }]
    },
];

function renderTimetable() {
    const container = document.getElementById('container');
    const cardsContainer = document.getElementById('cardsContainer');
    
    cardsContainer.innerHTML = "";

    timetableData.forEach(dayData => {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('day');

        const dayNameDiv = document.createElement('div');
        dayNameDiv.classList.add('day-name');
        const dayNameHeading = document.createElement('h2');
        dayNameHeading.textContent = dayData.day;
        dayNameDiv.appendChild(dayNameHeading);

        dayDiv.appendChild(dayNameDiv);

        dayData.lessons.forEach(lesson => {
            const lessonDiv = document.createElement('div');
            lessonDiv.classList.add('card');
            lessonDiv.textContent = `${lesson.time}\n${lesson.subject}`;
            dayDiv.appendChild(lessonDiv);
        });

        cardsContainer.appendChild(dayDiv);
    });
}

const darkModeToggle = document.getElementById('dark-mode-toggle');
const currentMode = localStorage.getItem('mode');

if (currentMode === 'dark') {
    document.body.classList.add('dark-mode');
}

darkModeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('mode', 'light'); 
    } else {
        document.body.classList.add('dark-mode');
        localStorage.setItem('mode', 'dark'); 
    }
});

renderTimetable();
