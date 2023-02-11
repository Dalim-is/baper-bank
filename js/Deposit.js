// step-1: add addEventListener to the deposit button

document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2: get the amount from the deposit input field
    // for input field use .value for get value from input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step-3: get the dep[osit total amount
    // for no input (element other than input,text area) use innerText to get the text
    const depositTotalElements = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElements.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    
    //  step-4 add number to set the total deposit 
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
       // set the deposit total
    depositTotalElements.innerText =currentDepositTotal;
    // step-5: get balance current total
    const balanceTotalElements = document.getElementById('balance-total');
 
    const previousBalanceTotalString = balanceTotalElements.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6 calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the total balance 
    balanceTotalElements.innerText = currentBalanceTotal;
    // step-7: clear deposit input field
    depositField.value = '';
   
})