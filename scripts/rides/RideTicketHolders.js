const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

export const RideTicketHolders = () => {
    eventHub.addEventListener("rideEvent", customEvent => {

            contentTarget +=
            `<div class="person rider"></div>`

        console.log("Button has been clicked", customEvent.detail.clickedButton)
    })
}

