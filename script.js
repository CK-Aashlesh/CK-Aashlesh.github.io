function sendMail(){
    let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
    }
    emailjs.send("service_fy6bv8u","template_cwb00u1" , parms).then(alert("Email Send!!")); 
}       