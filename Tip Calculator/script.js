const btnEl = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("total");


function calculateTotal() {
    let billValue = billInput.value;
    let tipValue = tipInput.value; 
    
    if(billValue < 0 || tipValue < 0){
        alert("Price information cannot be negative!");
    } else {
        let totalValue = billValue * (1 + tipValue / 100);
        totalSpan.innerText = `$ ${totalValue.toFixed(2)}`;
    }
}

btnEl.addEventListener("click", calculateTotal);