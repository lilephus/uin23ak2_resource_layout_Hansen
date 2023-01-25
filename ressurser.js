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
// Velger elementer på HTML-siden etter klasse og ID ved å bruke metodene document.querySelector() og document.getElementById()//
const navbar = document.querySelector(".navbar");
const mainBoxTitle = document.getElementById("main-box-title");
const mainBoxText = document.getElementById("main-box-text");
const bulletList = document.querySelector(".bullet-list");
//Når du er på side uten å ha klikka noe skal bullet-list lenker ikke vises
bulletList.style.display = "none";

resources.map((resource) => {
    // oppretter nytt knappeelement
    const navbarItem = document.createElement("button");
    // Setter knapens ID og innerHTML
    navbarItem.id = "navbar-item";
    navbarItem.innerHTML = resource.category;
    //legger knappen til navbar
    navbar.appendChild(navbarItem);
});
//  Legger til click event listener til navbar
navbar.addEventListener("click", (e) => {
    // sjekker om det klikkede elementet er et navbar item
    if (e.target.id === "navbar-item") {
        // Filtrering av resources array til å finne den resource som matcher den klikkede item category.
        const category = e.target.innerHTML;
        const filteredResource = resources.find((resource) => resource.category === category);
        // Oppdater mainBoxTitle og mainBoxText elementer med kategorien og teksten til den filtrerte resource
        mainBoxTitle.innerHTML = filteredResource.category;
        mainBoxText.innerHTML = filteredResource.text;
        // bulletList.style.display = "block"; og bulletList.innerHTML = ""; gjør slikk at bullet-list vises når en av navbar-items er klikket, og å oppdatere bullet-list med opdatterte innhold.
        bulletList.style.display = "block";
        bulletList.innerHTML = "";
        // Går gjennom sources til de filtrerte resource og lager list items
        filteredResource.sources.map((source) => {
            // Lager nye list item og link elements
            const listItem = document.createElement("li");
            const link = document.createElement("a");
            // Setter href og innerHTML til lenker
            link.href = source.url;
            link.innerHTML = source.title;
            // Legger link til list item
            link.target = "_blank";
            listItem.appendChild(link);
            bulletList.appendChild(listItem);
                        // legger list item til bulletList
        });
    }
});

// For å bytte farger when navbar-items er clicked 
let navbarItems = document.querySelectorAll(".navbar button");

navbarItems.forEach(function(navbarItem) {
    navbarItem.addEventListener("click", function() {
        navbarItems.forEach(function(item) {
            item.style.backgroundColor = "";
        });
        this.style.backgroundColor = "#25DFE6";

    });
});




