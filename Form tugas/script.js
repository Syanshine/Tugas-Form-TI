document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const txtname = document.getElementById("txtname");
    const txtmail = document.getElementById("txtmail");
    const divresult = document.getElementById("divResult");

    
    if (txtname.value.trim() === "" || txtmail.value.trim() === "") {
        divresult.innerHTML = "Please fill in your name and email";
        divresult.style.color = "black";
        divresult.style.background = "#EECCCC"; 
        divresult.style.padding = "10px 20px";
        divresult.style.margin = "4px";
    } else {
        divresult.innerHTML = "Thank you for your interest in our workshop. We will send you a confirmation mail if your name is added to a guest list";
        divresult.style.color = "black";
        divresult.style.background = "#CCEECC"; 
        divresult.style.padding = "10px 20px";
        divresult.style.margin = "4px";
    
    }
});

document.getElementById("registrationForm").addEventListener("reset", function() {
    const divresult = document.getElementById("divResult");

    
    divresult.innerHTML = "";

   
    divresult.style.background = "";  
    divresult.style.color = "";      
    divresult.style.padding = "";     
    divresult.style.margin = "";      
});

