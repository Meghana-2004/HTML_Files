function passwrd() {
    const regex = /^(?=.*[A-Z])(?=.*[\W])[A-Za-z\d\W_]{12}$/g;
    const password = document.querySelector("#textbox1").value;

    // Get all the requirement paragraphs
    const requirements = document.querySelectorAll('.p1');

    // Reset all the tick/cross marks before validation
    requirements.forEach(requirement => {
        requirement.innerHTML = requirement.innerHTML.split(' ')[0]+" ";
        console.log(requirement);
    });

    let isValid = true;

    if (/[A-Z]/.test(password)) {
        requirements[0].innerHTML+= "✔️ Atleast a Capital Letter"; 
        // Add tick mark
    } else {
        requirements[0].innerHTML += "❌ Atleast a Capital Letter"; // Add cross mark
        isValid = false;
    }

    
    if (password.length <= 12 && password.length>=1 ) {
        requirements[1].innerHTML += "✔️ Length should be max 12 letters"; // Add tick mark
    } else {
        requirements[1].innerHTML += "❌ Length should be max 12 letters"; // Add cross mark
        isValid = false;
    }

    
    if (/[\W]/.test(password)) {
        requirements[2].innerHTML += "✔️  Include a Special Character"; // Add tick mark
    } else {
        requirements[2].innerHTML += "❌  Include a Special Character"; // Add cross mark
        isValid = false;
    }

   
    const button = document.querySelector("#button1");
    if (isValid) {
        button.disabled = false;
        button.style.color = "rgb(137, 125, 125);"
    } else {
        button.disabled = true;
    }
}

// Add event listener to the password field to validate on input
document.querySelector("#textbox1").addEventListener("input", passwrd);


