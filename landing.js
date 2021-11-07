var nickname, subject;
function showModal() {
    var container = document.getElementById("modal-container");
    container.style.display = "block";
}
window.onclick = function(event){
    if(event.target == container){
        container.style.display = "none";
    }
}

function returnText(){
     nickname = document.getElementById("name").value;
     subject = document.getElementById("subject").value;
    console.log(nickname+ subject);
}
document.getElementById("output").innerHTML = nickname + ", you are currently studying " + subject + " with x num people. Press start to begin your study session, press stop to end it. ";
