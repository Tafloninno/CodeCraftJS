let expenses = []
const input = document.getElementById("expensesInput")
// const priceInput = documnet.getElementById("price")
const expensesDiv = document.getElementById("expenses")


function displayExpenses(){
    expensesDiv.innerHTML = null;

    for(const [idx, expense] of Object.entries(expenses)){
        const container = document.createElement('div')

        const text = document.createElement('p')
        text.textContent = expense

        const button = document.createElement('button')
        button.textContent = "delete"

        container.appendChild(text)
        container.appendChild(button)

        expensesDiv.appendChild(container)
    }
}

function addExpenses(){
    event.preventDefault();
    const value = input.value
    if(!value){
        alert('Fill in the expenses')
        return
    }else{
        expenses.push(value)
        displayExpenses()
        input.value = ""
    }

}






