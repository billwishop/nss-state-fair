const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")



eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "foodTicket"){
        const foodEvent = new CustomEvent("foodTicketPurchased", {
            detail: {
                buttonClicked: "food"
            }
        }) 
        eventHub.dispatchEvent(foodEvent)
        
    } else if(clickEvent.target.id === "gameTicket") {
        
        const gameEvent = new CustomEvent("gameTicketPurchased", {
            detail: {
                buttonClicked: "game"
            }
        })
        eventHub.dispatchEvent(gameEvent)
        
    } else if (clickEvent.target.id === "rideTicket"){
        const rideEvent = new CustomEvent("rideTicketPurchased", {
            detail: {
                buttonClicked: "ride"
            }
        }) 
        eventHub.dispatchEvent(rideEvent)
    
    } else if (clickEvent.target.id === "sideshowTicket"){
        const sideshowEvent = new CustomEvent("sideshowTicketPurchased", {
            detail: {}
        })
        eventHub.dispatchEvent(sideshowEvent)
    } else if (clickEvent.target.id === "fullPackageTicket") {
        const fullPackageEvent = new CustomEvent("fullPackagePurchased", {
            detail: {}
        })
        eventHub.dispatchEvent(fullPackageEvent)
    }
})




export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
            <button id="gameTicket">Game Ticket</button>
            <button id="sideshowTicket">Sideshow Ticket</button>
            <button id="fullPackageTicket">Full Package Ticket</button>
        </div>
    `
}

