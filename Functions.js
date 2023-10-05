//reuseable Value Function
function GetElementValueById(id) {
    let NewAmount = parseFloat(document.getElementById(id).value);
    return NewAmount;
};
//reuseable innterText Function
function GetElementinnerTextById(id) {
    let PrevAmount = parseFloat(document.getElementById(id).innerText);
    return PrevAmount;
};

