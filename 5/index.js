let expenses = [];
let prices = [];
const input = document.getElementById("expensesInput");
const pricesInput = document.getElementById("priceInput");
const expensesDiv = document.getElementById("expenses");


window.onload = function() {
    loadExpenses();
};

function loadExpenses() {
    const storedExpenses = localStorage.getItem('expenses');
    const storedPrices = localStorage.getItem('prices');
    if (storedExpenses && storedPrices) {
        expenses = JSON.parse(storedExpenses);
        prices = JSON.parse(storedPrices);
        displayExpenses();
    }
}

function saveExpenses() {
    localStorage.setItem('expenses', JSON.stringify(expenses));
    localStorage.setItem('prices', JSON.stringify(prices));
}

function displayExpenses() {
    expensesDiv.innerHTML = "";

    expenses.forEach((expense, i) => {
        const container = document.createElement('div');
        container.style.display = 'flex'
        container.style.alignItems = 'center'
        container.style.border = '1px solid gray'
        container.style.margin = '10px'
        container.style.padding = '10px'
        container.style.width = '50%'

        const text = document.createElement('p');
        text.textContent = `Expense: ${expense}`;
        text.style.marginRight = '20px';

        const text2 = document.createElement('p');
        text2.textContent = `Price: ${prices[i]}$`;
        text2.style.marginRight = '20px';

        const button = document.createElement('button');
        button.textContent = "delete";
        button.addEventListener('click', () => deleteExpense(i));

        container.appendChild(text);
        container.appendChild(text2);
        container.appendChild(button);

        expensesDiv.appendChild(container);
    });
}

function addExpenses(event) {
    event.preventDefault();
    const expenseValue = input.value;
    const priceValue = pricesInput.value;

    if (!expenseValue || !priceValue) {
        alert('Fill in both the expense and price');
        return;
    } else {
        expenses.push(expenseValue);
        prices.push(priceValue);
        displayExpenses();
        input.value = "";
        pricesInput.value = "";

        
        saveExpenses();
    }
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    prices.splice(index, 1);
    displayExpenses();

    saveExpenses();
}

document.getElementById("expensesForm").addEventListener('submit', addExpenses);
