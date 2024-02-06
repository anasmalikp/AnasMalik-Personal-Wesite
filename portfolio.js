function showsidebar() {
    const sidebar = document.getElementById('sidebar')
    sidebar.style.display='flex';
}
function hidesidebar() {
    const x = document.getElementById('sidebar').style.display='none';
}
function sendMail() {
    var params= {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    }
    const serviceID = "service_glmwcbe";
const templateID = "template_44yf213";

emailjs.send(serviceID,templateID,params)
.then(
    res=>{
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('message').value = "";
        console.log(res);
        alert("Your Message Sent Successfully")
    }
)
.catch(err=> console.log(err));
}
