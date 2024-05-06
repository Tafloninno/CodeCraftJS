let items = ['work',123];
const itemsDiv = document.getElementById("items")



function renderItems(){
    itemsDiv.innerHTML = null;

    for(const [idx, item] of Object.entries(items)){
        const container = document.createElement("div")
        container.style.marginBottom = "10px"

        const text = document.createElement("p")
        text.textContent = item

        const button = document.createElement("button")
        button.textContent = "delete"
        button.onclick = () => removeItem(idx)

        container.appendChild(text)
        container.appendChild(button)

        itemsDiv.appendChild(container)
    }
}
renderItems()

function loadItems(){
   
}



function saveItems(){}

function addItem(){}

function removeItem(idx){}
