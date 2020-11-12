// fullPackagePurchased

const elements = [document.querySelector(".rides"), document.querySelector(".food"), document.querySelector(".games"), document.querySelector(".sideshow") ]
const eventHub = document.querySelector("#state-fair")

export const FullPackageTicketHolders = () => {
    eventHub.addEventListener("fullPackagePurchased", clickEvent => {
        elements.forEach(function(x) {
            x.innerHTML += `
                <div class="person bigSpender"></div>`
        })
    })
}


