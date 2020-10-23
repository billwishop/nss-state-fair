const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

console.log("hello from RideTicketHolders.js")


export const RideTicketHolders = () => {
    eventHub.addEventListener("rideTicketPurchased", customEvent => {
            
          contentTarget.innerHTML +=
            `<div class="person rider"></div>`

    })
}