function sendmail(){
    let parms = {
        name:document.getElementById("name").value,
        phone : document.getElementById("phone").value,
        email : document.getElementById("email").value,
        address : document.getElementById("address").value,
        message : document.getElementById("message").value,
    }
    emailjs.send("service_8r3g2uc","template_zme1f1g",parms).then(alert("email sent!!"))
}