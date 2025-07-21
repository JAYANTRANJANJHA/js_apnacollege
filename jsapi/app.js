const URL = "https://catfact.ninja/fact";
const factPara = document.querySelector('.catfact')
const btn = document.querySelector("#btn")

const getFacts = async () => {
    console.log("getting CAt fact data")
    let response = await fetch(URL);
    // console.log(response.status)
    console.log(response)
    let data = await response.json();
    console.log(data)
    factPara.innerText = data.fact;
}

function getFacts(){
    fetch(URL).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
        factPara.innerText=data.fact;
    })
}

btn.addEventListener("click", getFacts)