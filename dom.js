
// let smallimages = document.getElementsByClassName("oldImg");
// for (let i = 0; i < smallimages.length; i++) {
//    smallimages[i].src="https://cdn.wallpapersafari.com/44/42/agX6c5.jpg"
//}

console.dir(document.querySelectorAll("div a "))

let links=document.querySelectorAll('.box a')
    for(let i=0 ;i<links.length;i++){
        links[i].style.color="green";
    }

    for(link of links){
        link.style.backgroundColor="red";
    }


    

