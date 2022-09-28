// function doubleIt(num){
//    const result = num *2;
//    return result;
// }
// const first = doubleIt(5);
// const second = doubleIt(7);

function getInputValue(){
   const depositInput = document.getElementById('deposit-input');
   const depositAmountText = depositInput.value;
   const depositAmount = parseFloat(depositAmountText);
   // clear input filed
   depositInput.value = '';
    return depositAmount;
}

function updateTotalField(totalFieldId, depositAmount){
   // debugger;
   const depositTotal = document.getElementById(totalFieldId);
   const depositTotalText = depositTotal.innerText;
   const previousDepositTotal = parseFloat(depositTotalText);

   depositTotal.innerText = previousDepositTotal + depositAmount;
}

function updateBalance(depositAmount){
   const balanceTotal = document.getElementById('balance-total');
   const balanceTotalText = balanceTotal.innerText;
   const previousBalanceTotal = parseFloat(balanceTotalText);
   balanceTotal.innerText = previousBalanceTotal + depositAmount;
}

document.getElementById('deposit-button').addEventListener('click',function(){
   
   // const depositInput = document.getElementById('deposit-input');
   //  const depositAmountText = depositInput.value;
   //  const depositAmount = parseFloat(depositAmountText);
   const depositAmount = getInputValue('deposit-input');
    
    // get and update deposit total
    /*
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);

    depositTotal.innerText = previousDepositTotal + depositAmount;
    */
   updateTotalField('deposit-total',depositAmount);

    // update  balance
   //  const balanceTotal = document.getElementById('balance-total');
   //  const balanceTotalText = balanceTotal.innerText;
   //  const previousBalanceTotal = parseFloat(balanceTotalText);
   //  balanceTotal.innerText = previousBalanceTotal + depositAmount;
   updateBalance(depositAmount);
});

// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function(){
   const withdrawInput = document.getElementById('withdraw-input');
   const withdrawAmountText =withdrawInput.value;
   const withdrawAmount = parseFloat(withdrawAmountText);
    
   //get and update withdraw total
   /*
   const withdrawTotal = document.getElementById('withdraw-total');
   const previousWithdrawTotalText = withdrawTotal.innerText;
   const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
   withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
   */
  updateTotalField('withdraw-total',withdrawAmount);

   // update balance after withdraw
   const balanceTotal = document.getElementById('balance-total');
   const balanceTotalText = balanceTotal.innerText;
   const previousBalanceTotal = parseFloat(balanceTotalText);
   
   balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

   // clear withdraw input filed
   withdrawInput.value = '';
})