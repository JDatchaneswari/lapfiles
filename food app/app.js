let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehaviour = "auto";
});

nextBtn.addEventListener("click",()=>{
    scrollContainer.scrollLeft +=900;
    scrollContainer.style.scrollBehaviour = "smooth";
});

backBtn.addEventListener("click",()=>{
    scrollContainer.scrollLeft -=900;
    scrollContainer.style.scrollBehaviour = "smooth";
});