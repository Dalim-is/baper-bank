/* 
 step-1 add event handler to withdraw button
 2. get the withdraw amount from the withdraw input field
 2.5 also make sure you conver the withdraw input element to number
 3. get previous withdraw total
*/

// step-1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-2
const withdrawField = document.getElementById('withdraw-field');
const newWithdrawAmountString = withdrawField.value;
const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // step-3
    const WithdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = WithdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    // step-4 
    const currentWithdrawTottal = previousWithdrawTotal + newWithdrawAmount;
    WithdrawTotalElement.innerText = currentWithdrawTottal;

    const balanceTotalElements = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElements.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElements.innerText = newBalanceTotal;

    withdrawField.value = '';

})