
let expenses = [];
        document.getElementById('addExpense')
            .addEventListener('click', function () {
                const expenseAmount = parseFloat(document
                    .getElementById('expenseAmount')
                    .value);
                const expenseCategory = document
                    .getElementById('expenseCategory')
                    .value;
                if (!isNaN(expenseAmount) && expenseCategory) {
                    expenses.push({
                        amount: expenseAmount,
                        category: expenseCategory
                    });
                    renderExpenseList();
                } 
                
                else {
                    Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Please enter a valid expense amount and select a category.",
                    });
                }
            });
        function renderExpenseList() {
            const expenseListElement = document.getElementById('expenseList');
            expenseListElement.innerHTML = '';
            let totalExpenses = 0;
            expenses.forEach(expense => {
                const expenseItem = document.createElement('div');
                expenseItem.textContent = `${expense.category}: 
                $${expense.amount.toFixed(2)}`;
                expenseListElement.appendChild(expenseItem);
                totalExpenses += expense.amount;
            });
            document.getElementById('totalExpenses')
                .textContent = `$${totalExpenses.toFixed(2)}`;
        }
        document.getElementById('budgetForm')
                .addEventListener('submit', function (e) {
                e.preventDefault();
                const income = parseFloat(document.getElementById('income')
                    .value);
                const totalExpenses = expenses.reduce((acc, expense) =>
                    acc + expense.amount, 0);
                if (!isNaN(income)) {
                    const savings = income - totalExpenses;
                    document.getElementById('savings')
                        .textContent = `Savings: $${savings.toFixed(2)}`;
                } 
                
                else {
                    Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Please enter a valid income amount.",
                    });
                }
            });


