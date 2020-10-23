const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

console.log("Hello from FoodTicketHolder.js")

export const FoodTicketHolders = () => {
    eventHub.addEventListener("foodTicketPurchased", customEvent => {

        contentTarget.innerHTML += 
        `<div class="person eater"></div>`
    })

}