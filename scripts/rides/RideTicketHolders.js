const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

console.log("hello from RideTicketHolders.js")


export const RideTicketHolders = () => {
    eventHub.addEventListener("rideEvent", customEvent => {
            
          contentTarget +=
            `<div class="person rider"></div>`

        return console.log("Button has been clicked")
    })
}

