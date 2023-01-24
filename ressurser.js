const resources = [ {
    category: "HTML",
    text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
    sources: [            
    {                
    title: "W3Schools",                
    url: "https://www.w3schools.com/html/"
    },            
    {                
    title: "HTML Living standard",                
    url: "https://html.spec.whatwg.org/multipage/"            
    },            
    {                
    title: "HTML.com Tutorials",                
    url: "https://html.com/"            },        ]
        },
        {
            category: "CSS",
            text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
            sources: [
                {
                    title: "W3Schools",
                    url: "https://www.w3schools.com/css/"
                },
                {
                    title: "W3C HTML & CSS Standards",
                    url: "https://www.w3.org/standards/webdesign/htmlcss.html"
                },
                {
                    title: "W3C CSS Validator",
                    url: "https://jigsaw.w3.org/css-validator/"
                },
                {
                    title: "CSS Tricks",
                    url: "https://css-tricks.com/"
                },
            ]
        },
        {
            category: "JavaScript",
            text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren og gir mulighet for interaktivitet på nettsider.",
            sources: [
                {
                    title: "W3Schools",
                    url: "https://www.w3schools.com/js/"
                },
                {
                    title: "Eloquent JavaScript",
                    url: "https://eloquentjavascript.net/"
                },
                {
                    title: "JavaScript.info",
                    url: "https://javascript.info/"
                },
            ]
        },
        {
            category: "React",
            text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
            sources: [
                {
                    title: "React documentation",
                    url: "https://reactjs.org/docs/getting-started.html"
                },
                {
                    title: "W3Schools",
                    url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
                },
                {
                    title: "How to read JavaScript Documentation",
                    url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
                },
            ]
                            },
                        {
                            category: "Sanity and headless CMS",
                            text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
                sources: [
                            {
                                    title: "Sanity documentation",
                                    url: "https://www.sanity.io/docs"
                            },
                            {
                                title: "OnCrawl: a beginners guide to headless CMS",
                                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
                            },
                            {
                                title: "Section.io: Getting started with Sanity CMS",
                                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
                            },
                    ]
            },
    ];
    
    const menuHTML = document.querySelector('.navbar');
    const mainBox = document.querySelector('.main-box');
    const bulletList = document.querySelector('.bullet-list');
    
    resources.forEach(resource => {
    let newItem = document.createElement('div');
    newItem.classList.add('navbar-item');
    newItem.innerHTML = resource.category;
    menuHTML.appendChild(newItem);
    newItem.addEventListener('click', () => {
    mainBox.innerHTML = resource.text;
    bulletList.innerHTML = "";
    resource.sources.forEach(source => {
    let newSource = document.createElement('li');
    newSource.innerHTML = `<a href="${source.url}">${source.title}</a>`;
    bulletList.appendChild(newSource);
    });
    });
    });

    categoryButton.addEventListener('click', () => {
        mainBox.innerHTML = `
            <br>
            <div class="main-box-title">${resource.category}</div>
            <br>
            <div class="main-box-text">${resource.text}</div>
            <br>
            <div class="main-box-sources">Sources:</div>
            <ul class="bullet-list">
        `;
    } );

    