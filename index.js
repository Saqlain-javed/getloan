function calculate_loan(){
    const loan_period = document.getElementById("loan_period").value
    const amount = document.getElementById("amount").value
    const installments = document.getElementById("installments").value
    const _m = loan_period*12;
    const _1mi = amount/_m;
    const _i = _1mi*installments
    document.getElementById("installment").innerText = `Your each installment will be ${_i}.`
}

function check_amount(){
    
}

function showError(id, message){
    document.getElementById("error").innerText = "red"
}