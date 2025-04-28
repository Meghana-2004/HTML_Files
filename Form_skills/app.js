function ToDo(){
    let val = [];
    let value = document.querySelectorAll(".Form1");
    value.forEach((i)=>{
        let k = i.value.trim();
        let regex = /^(10|\d)$/;
    
        if(regex.test(k)){
            val.push(k);
        }
        else{
            alert(`Invalid Input: ${k}.Please enter a number between 0 and 10`);
            let l = prompt("Enter a number");
            val.push(l);
        }
        
        console.log(val);
    })
    let  cont = document.querySelector(".container");
    cont.style.width = "450px";

    let arr = ["Html","CSS","Java Script"];

    arr.forEach((i,j)=>{
        let headding = document.createElement("h3");
        headding.innerHTML = i;

        let divi = document.createElement("div");
        Object.assign(divi.style,{
            border: "2px solid black",
            width: "300px",
            margin : "10px",
            borderRadius: "3px",
            height:"15px"
            
        })

        let divi1 = document.createElement("div");
        Object.assign(divi1.style,{
            // borderRadius: "3px",
            height: "15px",
            padding:"0px",
            width: `${val[j] * 10}%`,
            backgroundColor:"crimson",
        })

        divi.appendChild(divi1);
        cont.appendChild(headding);
        cont.appendChild(divi);


    })
}

function Reset(){
    location.reload(); 
}