var arr =[];
function To_Do() {
    const taskinput = document.getElementById('textbox');
    if(taskinput=== ''){
        alert("Please enter a task Name");
        return;
    }
    const taskText = taskinput.value.trim();
    if(taskinput){
        console.log(taskinput.value);
        taskinput.value="";
    }
    else if(taskinput=== ' '){
        return;
    }
    else{
        console.log("TextBox not Found!!");
    }
    const pendingList = document.getElementById('pending');
    const completedList = document.getElementById('completed');
    arr_elements(taskText);
}
function applyResponsiveStyles(tile) {
    const mediaQuery = window.matchMedia("(max-width: 350px)");
    function handleScreenSizeChange(e) {
        tile.style.width = e.matches ? "100%" : "300px";
        tile.style.flexDirection = "row";
        tile.style.alignItems = "center";
    }
    mediaQuery.addEventListener("change", handleScreenSizeChange);
    handleScreenSizeChange(mediaQuery);
}
function arr_elements(taskText){
    arr.push(taskText);
    const pend = document.querySelector(".list");
    
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.style.marginRight = "20px";

    const tile = document.createElement("div");
    Object.assign(tile.style, {
        width: "250px",
        height: "50px",
        border: "2px solid black",
        boxShadow : "2px 2px 5px rgba(0, 0, 0, 0.3)",
        margin : "10px",
        padding : "10px",
        display : "flex",
        justifyContent: "space-around",
        alignItems : "center",
        borderRadius : "5px",
    });
    //tile.textContent = taskText;

    applyResponsiveStyles(tile);

    const taskspan = document.createElement("span");
    taskspan.textContent = taskText;

    const deletebutton = document.createElement("button");
    deletebutton.innerHTML = "&#128465;",
    Object.assign(deletebutton.style,{
        padding : "5px",
        border : "none",
        fontSize : "30px",
        color : "black",
        cursor : "pointer",
        background : "transparent",
        //display : "none",// initially
    });

    tile.append(radio,taskspan,deletebutton);

    pend.appendChild(tile);

    const completed = document.querySelector(".list1");
    radio.addEventListener("click",()=>{
        pend.removeChild(tile);
        completed.appendChild(tile);
        tile.removeChild(radio);
    })
    deletebutton.addEventListener("click",()=>{
        pend.removeChild(tile);
        completed.removeChild(tile);
        
    })
    
}

