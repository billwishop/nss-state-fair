// keeps track of how many tickets are sold 

let ticketCount = 0

const ticketCountLocation = document.querySelector(".ticketCounter")

export const renderTicketCounter = () => {
    ticketCountLocation.innerHTML = `
        <div id="ticketTotal">
            Total tickets purchased: ${ticketCount}
        </div>
    `
}

const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("gameTicketPurchased", clickEvent => {
    ticketCount++
    renderTicketCounter()
})

eventHub.addEventListener("foodTicketPurchased", clickEvent => {
    ticketCount++
    renderTicketCounter()
})

eventHub.addEventListener("rideTicketPurchased", clickEvent => {
    ticketCount++
    renderTicketCounter()
})

eventHub.addEventListener("sideshowTicketPurchased", clickEvent => {
    ticketCount++
    renderTicketCounter()
})

eventHub.addEventListener("fullPackagePurchased", clickEvent => {
    ticketCount += 4
    renderTicketCounter()
})



