const daprjct =  document.getElementById("content5_1");
const aiprjct = document.getElementById("content5_2");
const wdprjct = document.getElementById("content5_3");
const c_da = document.getElementById("cda");
const c_ai = document.getElementById("cai");
const c_wd = document.getElementById("cwd")
var arr = [c_da, c_ai, c_wd];

function addcolour(n){
    for (i in arr){
        if(i==n){
            arr[i].style.backgroundColor = "#2E61FF";
        }
        else{
            arr[i].style.backgroundColor = "transparent";
        }
    }
}
addcolour(0); 
function da(){
    daprjct.style.display = "grid"
    aiprjct.style.display = "none";
    wdprjct.style.display = "none";
    addcolour(0);
}
function ai(){
    daprjct.style.display = "none";
    aiprjct.style.display = "grid";
    wdprjct.style.display = "none";;
    addcolour(1);
}
function wd(){
    daprjct.style.display = "none";
    aiprjct.style.display = "none";
    wdprjct.style.display = "grid";
    addcolour(2);
}
// ---------------------------------------------------------------------
const wind_home = document.getElementById("homewindow");
const wind_about = document.getElementById("aboutwindow");
const wind_skills = document.getElementById("skillswindow");   
const wind_projects = document.getElementById("projectswindow");
const wind_experience = document.getElementById("experiencewindow");
const wind_contact = document.getElementById("contactwindow");
const but_home = document.getElementById("but_homewindow");
const but_about = document.getElementById("but_aboutwindow");
const but_skills = document.getElementById("but_skillswindow");
const but_projects = document.getElementById("but_projectswindow");
const but_experience = document.getElementById("but_experiencewindow");
const but_contact = document.getElementById("but_contactwindow");

function scrollWithOffset(elementId, offset) {
    const element = document.getElementById(elementId);
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

function underlinetabs(){
    [but_home, but_about, but_skills, but_projects, but_experience, but_contact].forEach(button => {
        Object.assign(button.style, {
            backgroundColor: "transparent",
            borderRadius: "0px",
        });
    });   
    [wind_about, wind_home, wind_skills, wind_projects, wind_experience, wind_contact].forEach(window => {  
        window.style.borderBottom = "none";
    });
}
wind_home.style.borderBottom = "3px solid #ffffffff";
function scrolltohome() {
    scrollWithOffset("wind1", 100);
    underlinetabs();
    Object.assign(but_home.style, {
        backgroundColor: "#2E61FF",
        borderRadius: "20px",
    });
    Object.assign(wind_home.style, {
        borderBottom: "3px solid #ffffffff"
    });
}

function scrolltoabout() {
    scrollWithOffset("wind2", 150);
    underlinetabs();
    Object.assign(but_about.style, {
        backgroundColor: "#2E61FF",
        borderRadius: "20px",
    });
    Object.assign(wind_about.style, {
        borderBottom: "3px solid #ffffffff"
    });
}

function scrolltoskills() {
    scrollWithOffset("win4", 120);
    underlinetabs();
    Object.assign(but_skills.style, {
        backgroundColor: "#2E61FF",
        borderRadius: "20px",
    });
    Object.assign(wind_skills.style, {
        borderBottom: "3px solid #ffffffff"
    });

}

function scrolltoprojects() {
    scrollWithOffset("wind5", 180);
    underlinetabs();
    Object.assign(but_projects.style, {
        backgroundColor: "#2E61FF",
        borderRadius: "20px",
    });
    Object.assign(wind_projects.style, {
        borderBottom: "3px solid #ffffffff"
    });
}

function scrolltoexperience() {
    scrollWithOffset("win6", 160);
    underlinetabs();
    Object.assign(but_experience.style, {
        backgroundColor: "#2E61FF",
        borderRadius: "20px",
    });
    Object.assign(wind_experience.style, {
        borderBottom: "3px solid #ffffffff"
    });
}

function scrolltocontact() {
    scrollWithOffset("win7", 140);
    underlinetabs();
    Object.assign(but_contact.style, {
        backgroundColor: "#2E61FF",
        borderRadius: "20px",
    });
    Object.assign(wind_contact.style, {
        borderBottom: "3px solid #ffffffff"
    });
}
// ---------------------------------------------------------------------
