const button = document.querySelector("button");
const messageNumber = document.querySelector(".number-of-new-messages");
const redDots = document.querySelectorAll(".message-notification");
const notifications = document.querySelectorAll(".notification")

button.addEventListener("click", markAllAsRead);
notifications.forEach((notification) => {

   notification.addEventListener("click", (e) => {
    markRead(e)
   })
})


function markAllAsRead () {
    messageNumber.innerHTML = "0";
    
    redDots.forEach((dot) => {
        dot.classList.remove("new-message")
    })
    notifications.forEach((notification) => {
        notification.classList.remove("new")
    })

    noNew()
        
}

function markRead (e) {
    if (e.target.classList.contains("new-message")) {
        e.target.parentElement.parentElement.parentElement.parentElement.classList.remove("new");
        e.target.classList.remove("new-message")
        messageNumber.innerHTML = messageNumber.innerHTML - 1;
    }
    noNew()
}

function noNew () {
    if (messageNumber.textContent == "0") {
        button.innerHTML = "No new notifications"
    } else {
        button.innerHTML = "Mark all as read"
    }
}