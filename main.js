
function changeTab(num){
    if(num === 2){
        heading = document.getElementById("heading");
        heading.innerText = "The All Disciplines Award can be applied to lecturing and\or researching at any accredited US university.";
        let background1 = document.getElementById("zzb");
        let background2 = document.getElementById("zzd");
        background1.style.backgroundColor = "#fff";
        background2.style.backgroundColor = "#e73f5b";
        background2.style.color = "#fff"
    }else if(num === 4){
        heading = document.getElementById("heading");
        heading.innerText = "Hello Welcome to Fullbright ";
        let background1 = document.getElementById("zzb");
        let background2 = document.getElementById("zzd");
        background1.style.backgroundColor = "#e73f5b";
        background2.style.backgroundColor = "#fff";
        background2.style.borderBottom = "none";
        background2.style.borderTop = "8px solid #e73f5b";
        background2.style.borderRight = "8px solid #e73f5b";
        background2.style.color = "#e73f5b"
        background1.style.color = "#fff"
    }
}