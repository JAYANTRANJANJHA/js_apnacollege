let todo=[];
let req=prompt("Please enter your request");
while (true){
    if(req=="quit"){
        console.log("quitting app")
        break;
    }
    if (req=="List") {
        console.log("-------------")
        for(i=0;i<todo.length;i++){
            console.log(i,todo[i])
            
        }
        console.log("-------------")
        }
        else if(req=="Add"){
        let newtask=prompt("please eneter the task you want to add");
        todo.push(newtask)
        console.log("task added")
    }
    
    else if(req=="Delete"){
        let idx=prompt("please enter the task index")
        todo.splice(idx,1);
        console.log("task deleted")
    }
    else{
        console.log("wrong request")
    }
    req= prompt("please enter your request")
}
