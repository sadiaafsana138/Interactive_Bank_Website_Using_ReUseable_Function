document.getElementById('btn-diposit').addEventListener('click', function () {
    let dipositAmount = GetElementValueById("New-Diposit-Amount");
    let dipositPrevAmount =GetElementinnerTextById("Diposit-Current-Amount"); 
if (dipositAmount > 0) {
    dipositPrevAmount += dipositAmount;
    document.getElementById('Diposit-Current-Amount').innerText = dipositPrevAmount;
    let BalanceAmount = GetElementinnerTextById("Balance-Current-Amount");
    BalanceAmount += dipositAmount;
    document.getElementById('Balance-Current-Amount').innerText = BalanceAmount;
    //clear the field
    document.getElementById("New-Diposit-Amount").value = "";
}
else {
    alert("Enter a Valid Amount to deposit!!")
}
});

document.getElementById('btn-withdraw').addEventListener('click', function () {
    let WithdrawAmount = GetElementValueById("New-Withdraw-Amount");
    let CurrentAmount =GetElementinnerTextById("Withdraw-Current-Amount"); 
    let BalanceAmount = GetElementinnerTextById("Balance-Current-Amount");
    //clear the field
    document.getElementById('New-Withdraw-Amount').value = "";
if (BalanceAmount >= WithdrawAmount) {
    CurrentAmount += WithdrawAmount;
    document.getElementById('Withdraw-Current-Amount').innerText = CurrentAmount;
    BalanceAmount -= WithdrawAmount;
    document.getElementById('Balance-Current-Amount').innerText = BalanceAmount;
}
else {
    alert("No Sufficient Money!!!")
}
});

document.getElementById('btn-logout').addEventListener('click', function () {
    window.location.href = "index.html";
})
