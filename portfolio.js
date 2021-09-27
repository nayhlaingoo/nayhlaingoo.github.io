const buttonTag = document.getElementById("myButton");
const bgimageTag = document.getElementsByClassName("bg-image")[0];
const firstMainTag = document.getElementsByClassName("firstMain")[0];
const secondMainTag = document.getElementsByClassName("secondMain")[0];
const thirdMainTag = document.getElementsByClassName("thirdMain")[0];
const socialClass = document.getElementsByClassName("social")[0];
const mobileClass = document.getElementsByClassName("mobile")[0];
const iTag = document.getElementsByTagName("i")[0];

new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    // scrollingSpeed: 700,
});


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
        document.getElementsByClassName("iconMoon")[0].classList.add("fas", "fa-sun");
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
        document.getElementsByClassName("iconMoon")[0].classList.remove("fas", "fa-sun");
        document.getElementsByClassName("iconMoon")[0].classList.add("fas", "fa-moon");
        status--;
    }

    bodytag.insertBefore(bgimageTag, bodytag.firstChild);
    console.log(bgimageTag, fasTag);

};

buttonTag.addEventListener("click", darkmode);
