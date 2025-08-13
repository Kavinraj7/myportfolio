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
// Set up intersection observer
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');
const bottags = document.querySelectorAll('#tabs1 a')

const options = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            console.log(id)
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            bottags.forEach(tags=>{
                tags.classList.remove('active1')
            });
            const correspondingLink = document.querySelector(`nav a[href="#${id}"]`);
            const correspondingLink1 = document.querySelector(`#tabs1 a[href="#${id}"]`);
            if (correspondingLink) {
                correspondingLink.classList.add('active');
                correspondingLink1.classList.add('active1');
            }
        }
    });
}, options);
sections.forEach(section => {
    observer.observe(section);
});

// ------------------------------------------------------------------------------------------
// lighttheme

function lighttheme(){
    const bodyelement = document.body;
    bodyelement.classList.toggle('darktheme')
    const themebutton = document.getElementById("sun");
    if(themebutton.innerText=="sunny"){
        themebutton.innerText =  "bedtime";
    }
    else{
        themebutton.innerText = "sunny";
    }
}
// ---------------------------------------------------------------------------------------------
// Project view
var idd;
var ids;
const overlay = document.createElement('div');
document.addEventListener("click",function(event){
    if(event.target.closest("#g")){
        return;
    }
    const project = event.target.closest(".contxt3"); 
    if (project){
        console.log(project.id)
        idd = "p_"+project.id;
        ids = document.getElementById("p_"+project.id);
        ids.style.display = "flex";
        blockAllClicksExcept([idd]);
    }
});
function blockAllClicksExcept(exceptions) {
    overlay.id = 'click-blocker';
    Object.assign(overlay.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)', 
        zIndex: '11000',
        pointerEvents: 'auto'  
    });

    document.body.appendChild(overlay);

    exceptions.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.style.zIndex = '12000'; 
            el.style.pointerEvents = 'auto';  
        }
    });

     
    overlay.addEventListener('click', (e) => {
        if (!exceptions.some(id => document.getElementById(id)?.contains(e.target))) {
            e.stopPropagation();
            e.preventDefault();
        }
    }, true);
}

function prjct1close(){
    ids.style.display="none";
    document.body.removeChild(overlay);
}

// ---------------------------------------------------------------------------------------------------------
document.querySelectorAll('.messagebox input, .messagebox textarea')
        .forEach(field => {
            field.addEventListener('input', function () {
                if (this.value.trim() !== "") {
                    this.classList.add('activeinput');
                } else {
                    this.classList.remove('activeinput');
                }
            });
        });