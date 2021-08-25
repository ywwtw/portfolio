// timline animation
const tl = gsap.timeline({default:{ease:"power1.out"}});
tl.from("#about-img",{height:"0%",duration:1});
tl.from(".menu",{x:"-200%",duration:1},"-=1");
tl.to("#about-text h4",{y:"0%",duration:3,delay:.5,stagger:.25});
// timline animation end

const   topDivMenu = document.getElementById("topDivMenu"),
        gowebsite = document.querySelectorAll(".gowebsite"),
        enlarge = document.querySelectorAll(".imgbox"),
        navbar = document.getElementById("navbar"),
        hamburger = document.getElementById("hamburger"),
        topDivLogo = document.getElementById("topDivLogo"),
        topDivLogoWhite = document.getElementById("topDivLogoWhite");

//Modal
const modalElem = document.querySelectorAll(".modalElem"),
    modal = document.querySelectorAll(".modal"),
    img = document.querySelectorAll(".imgbox");
for(i=0;i<img.length;i++){
    img[i].addEventListener("click",function(e){
        // console.log(e.target.dataset.id);
        // e.preventDefault();
        const modalImg=`        
        <div class="modalImg">
            <img src="./${e.target.dataset.id}.png" alt="">
        </div>
        `
        modalElem[0].innerHTML=modalImg;
        modal[0].classList.remove("hide");
        document.body.classList.add("hidden");
    })
}
function closeModal(){
    modal[0].classList.add("hide");
    document.body.classList.remove("hidden");
} 

// Small devices menu
function menuBtn(){
    if(window.innerWidth<=800){
        topDivMenu.style.display="block";
    } 
}
function closeMenu(){
        topDivMenu.style.display="none";
}
// Small devices menu end


// Small devices scrollY
window.addEventListener('scroll', function () {
    if(window.innerWidth<=800){
        const y = window.scrollY
        for(let i=0 ; i<gowebsite.length;i++){
            const top = gowebsite[i].offsetTop,
             bottom = top + gowebsite[i].offsetHeight;
            if (y>top && y<bottom){
                gowebsite[i].lastElementChild.style.opacity=1;
            }else{
                gowebsite[i].lastElementChild.style.opacity=0;
            }
        }
        
        for(let i=0 ; i<enlarge.length;i++){
            const top = enlarge[i].offsetTop,
             bottom = top + enlarge[i].offsetHeight;

            if (y>top && y<bottom){
                enlarge[i].firstElementChild.style.opacity=1;
            }else{
                enlarge[i].firstElementChild.style.opacity=0;
            }
        }
        if (y>120){
            navbar.style.backgroundColor= "rgba(255,255,255,.9)";
            navbar.style.boxShadow= "0 2px 5px rgba(88,88,88,.3)";
            hamburger.style.color = "black";
            topDivLogoWhite.style.display = "none";
            topDivLogo.style.display = "block";
        }else{
            navbar.style.backgroundColor= "transparent";
            navbar.style.boxShadow= "none";
            hamburger.style.color = "white";
            topDivLogoWhite.style.display = "block";
            topDivLogo.style.display = "none";
        }
    }
})