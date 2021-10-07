const buttonTag = document.getElementById("myButton");
const bgimageTag = document.getElementsByClassName("bg-image")[0];
const firstMainTag = document.getElementsByClassName("firstMain")[0];
const secondMainTag = document.getElementsByClassName("secondMain")[0];
const thirdMainTag = document.getElementsByClassName("thirdMain")[0];
const socialClass = document.getElementsByClassName("social")[0];
const mobileClass = document.getElementsByClassName("mobile")[0];
const iTag = document.getElementsByTagName("i")[0];
// hamburger menu
const hamburgerMenuClass = document.querySelector(".hamburgerMenu");
const hamburgerLine1Tag = document.querySelector(".line1");
const hamburgerLine2Tag = document.querySelector(".line2");
const hamburgerLine3Tag = document.querySelector(".line3");
const overlayMenuTag = document.querySelector(".overlayMenu");
const hamburgerContainerTag = document.querySelector(".hamburgerContainer");

let status = 0;

const darkmode = () => {
    // bodytag.classList.toggle("dark-mode");
    const bodytag = document.body;

    if (status === 0){
        bgimageTag.style.backgroundImage = "url('./Images/darkblur.jpg')"
        firstMainTag.style.background = ("rgba(58, 57, 57, 0.555)")
        secondMainTag.style.background = ("rgba(58, 57, 57, 0.555)")
        thirdMainTag.style.background = ("rgba(58, 57, 57, 0.555)")
        socialClass.style.background = ("rgba(58, 57, 57, 0.555)")
        mobileClass.style.color = ("rgb(36,36,36)")
        iTag.classList.add("fas", "fa-sun");
        document.getElementById("demo").innerHTML = "Lightmode";
        status++;

    }else if(status === 1){
        bgimageTag.style.backgroundImage = ""
        firstMainTag.style.background = ("")
        secondMainTag.style.background = ("")
        thirdMainTag.style.background = ("")
        socialClass.style.background = ("")
        mobileClass.style.color = ("") 
        iTag.classList.remove("fas", "fa-sun");
        iTag.classList.add("fas", "fa-moon");
        document.getElementById("demo").innerHTML = "Darkmode";
        status--;
    }

    bodytag.insertBefore(bgimageTag, bodytag.firstChild);
    console.log(bgimageTag, fasTag);

};

buttonTag.addEventListener("click", darkmode);


// hamburger menu
hamburgerMenuClass.addEventListener("click", () => {
    if(hamburgerMenuClass.classList.contains("isOpen")){
        hamburgerLine2Tag.classList.remove("hideLine2");
        hamburgerLine1Tag.classList.remove("line1Rotate");
        hamburgerLine3Tag.classList.remove("line3Rotate");
        overlayMenuTag.classList.remove("showOverlayMenu");
        hamburgerContainerTag.classList.add("hamburgerContainer");
        hamburgerMenuClass.classList.remove("isOpen");
    }else{
        hamburgerLine2Tag.classList.add("hideLine2");
        hamburgerLine1Tag.classList.add("line1Rotate");
        hamburgerLine3Tag.classList.add("line3Rotate");
        overlayMenuTag.classList.add("showOverlayMenu");
        hamburgerContainerTag.classList.remove("hamburgerContainer");
        hamburgerMenuClass.classList.add("isOpen");
    }
});
