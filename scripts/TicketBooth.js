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
        // console.log(rideEvent)
    } 
})

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "foodTicket"){
        const foodEvent = new CustomEvent("foodTicketPurchased", {
            detail: {
                buttonClicked: "food"
            }
        }) 
        eventHub.dispatchEvent(foodEvent)
        // console.log(foodEvent)
    } 
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
        </div>
    `
}

