let expenses =
    JSON.parse(
        localStorage.getItem("expenses")
    ) || [];

let total = 0;

showExpenses();

function addExpense() {

    let name =
        document.getElementById(
            "expenseName"
        ).value;

    let amount =
        Number(
            document.getElementById(
                "amount"
            ).value
        );

    if (
        name === "" ||
        amount <= 0
    ) {
        alert("Enter valid data");
        return;
    }

    expenses.push({
        name,
        amount
    });

    localStorage.setItem(
        "expenses",
        JSON.stringify(expenses)
    );

    document.getElementById(
        "expenseName"
    ).value = "";

    document.getElementById(
        "amount"
    ).value = "";

    showExpenses();
}


function showExpenses() {

    let list =
        document.getElementById("list");

    list.innerHTML = "";

    total = 0;

    expenses.forEach(
        (item, index) => {

            let li =
                document.createElement("li");

            li.innerHTML = `
                ${item.name} - ₹${item.amount}

                <button onclick="deleteExpense(${index})">
                    Delete
                </button>
            `;

            list.appendChild(li);

            total += item.amount;
        }
    );

    document.getElementById(
        "total"
    ).innerText = total;
}


function deleteExpense(index) {

    // Expense remove
    expenses.splice(index, 1);

    // LocalStorage update
    localStorage.setItem(
        "expenses",
        JSON.stringify(expenses)
    );

    // List + Total update
    showExpenses();
}