const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", (clickEvent) => {
    if(clickEvent.target.id === "rideTicket"){
        const rideEvent = new CustomEvent("rideTicketPurchased", {
            detail: {
                buttonClicked: "ride"
            }
        })
        eventHub.dispatchEvent(rideEvent)
        console.log(rideEvent)
    } 
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
        </div>
    `
}

