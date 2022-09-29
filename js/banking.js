function doubleIt(num){
   const result = num *2;
   return result;
}
const first = doubleIt(5);
const second = doubleIt(7);

function getInputValue(inputId){
   debugger;
   const depositInput = document.getElementById(inputId);
   const depositAmountText = depositInput.value;
   const depositAmount = parseFloat(depositAmountText);
   // clear input filed
   depositInput.value = '';
    return depositAmount;
}

function updateTotalField(totalFieldId, depositAmount){
   
   const depositTotal = document.getElementById(totalFieldId);
   const depositTotalText = depositTotal.innerText;
   const previousDepositTotal = parseFloat(depositTotalText);

   depositTotal.innerText = previousDepositTotal + depositAmount;
}

function getCurrentBalance(){
   const balanceTotal = document.getElementById('balance-total');
   const balanceTotalText = balanceTotal.innerText;
   const previousBalanceTotal = parseFloat(balanceTotalText);
   return previousBalanceTotal;
}

function updateBalance(depositAmount, isAdd){
   const balanceTotal = document.getElementById('balance-total');
   // const balanceTotalText = balanceTotal.innerText;
   // const previousBalanceTotal = parseFloat(balanceTotalText);
   const previousBalanceTotal = getCurrentBalance();
   if(isAdd == true){
      balanceTotal.innerText = previousBalanceTotal + depositAmount;
   }
   else{
      balanceTotal.innerText = previousBalanceTotal - depositAmount;
   }
}

document.getElementById('deposit-button').addEventListener('click',function(){
   
   // const depositInput = document.getElementById('deposit-input');
   //  const depositAmountText = depositInput.value;
   //  const depositAmount = parseFloat(depositAmountText);
  
    
    // get and update deposit total
    /*
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);

    depositTotal.innerText = previousDepositTotal + depositAmount;
    */
   

    // update  balance
   //  const balanceTotal = document.getElementById('balance-total');
   //  const balanceTotalText = balanceTotal.innerText;
   //  const previousBalanceTotal = parseFloat(balanceTotalText);
   //  balanceTotal.innerText = previousBalanceTotal + depositAmount;
   const depositAmount = getInputValue('deposit-input');
   if(depositAmount>0){
      updateTotalField('deposit-total',depositAmount);
      updateBalance(depositAmount, true);
   }
  
});

// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function(){
   // const withdrawInput = document.getElementById('withdraw-input');
   // const withdrawAmountText =withdrawInput.value;
   // const withdrawAmount = parseFloat(withdrawAmountText);
    
   //get and update withdraw total
   /*
   const withdrawTotal = document.getElementById('withdraw-total');
   const previousWithdrawTotalText = withdrawTotal.innerText;
   const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
   withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
   */
  

   // update balance after withdraw
   // const balanceTotal = document.getElementById('balance-total');
   // const balanceTotalText = balanceTotal.innerText;
   // const previousBalanceTotal = parseFloat(balanceTotalText);
   
   // balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
   
  
   // clear withdraw input filed
   // withdrawInput.value = '';

   const withdrawAmount = getInputValue('withdraw-input');
   const currentBalance = getCurrentBalance();
   if(withdrawAmount>0 && withdrawAmount< currentBalance){
      updateTotalField('withdraw-total',withdrawAmount);
      updateBalance(withdrawAmount,false);
   }
   
})