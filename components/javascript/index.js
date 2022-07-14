function saving() {
    window.location.href = "account_apply.html"
}

function check() {
    document.querySelector('.checkbox').classList.toggle('show_check');
    if (document.querySelector('.checkbox').classList.contains('show_check')) {
        document.querySelector('.submit_btn').setAttribute("onclick", "submit()")
    } else {
        document.querySelector('.submit_btn').removeAttribute("onclick")
    }
}
/*To get random account number*/
function getaccountnumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


/*To submit saving account application*/
function submit() {
    if (document.querySelector('#fname').value.length == 0) {
        alert('Fill the First Name');
    } else if (document.querySelector('#lname').value.length == 0) {
        alert('Fill the Last Name');
    } else if (document.querySelector('#email').value.length == 0) {
        alert('Email is empty');
    } else if (document.querySelector('#state').value.length == 0) {
        alert('State Section is empty');
    } else if (document.querySelector('#phone').value.length == 0) {
        alert('Phone Number section is empty');
    } else if (document.querySelector('#dob').value.length == 0) {
        alert('Give Proper Date of Birth');
    } else {


        let fname = document.querySelector('#fname').value;
        let lname = document.querySelector('#lname').value;
        let accountnumber = getaccountnumber(25047135, 26547890)

        account();
        alert(`${fname} ${lname} DataStore Succesfully Account Will be Creadted after Verification with Account Number ${accountnumber}`);

        window.location.href = "index.html";

    }
}

/*Transaction of Deposit */
let notes = [];

function add_fund() {
    let account_number = document.querySelector('.select_value');
    let fund = document.querySelector('#add_balance');
    let obj = {
        acc: account_number.value,
        fund_add: Number(fund.value),
    }
    let store_note = JSON.parse(localStorage.getItem('fund_to_added'));
    if (store_note == null) {
        notes = [];
    } else {
        notes = JSON.parse(localStorage.getItem('fund_to_added'));
    }
    if (account_number.value == 'select') {
        alert('Select Account Number');
    }
    if (fund.value == '') {
        alert('Enter Amount');
    } else {
        notes.push(obj);
        account_number.value = 'select';
        fund.value = "";
        localStorage.setItem('fund_to_added', JSON.stringify(notes));
        alert('Amount added Succesful');
        show();
    }
}

function show() {
    let arr = [];
    let store_note = JSON.parse(localStorage.getItem('fund_to_added'));
    if (store_note == null) {
        arr = [];
    } else {
        arr = JSON.parse(localStorage.getItem('fund_to_added'));
    }
    Array.from(arr).forEach(function(element) {
        let add = document.querySelector(`#bal_${element.acc}`);
        add.innerHTML = Number(add.innerHTML) + element.fund_add;
    });


    let transfer_arr = [];
    let transfer_store_note = JSON.parse(localStorage.getItem('transfer'));
    if (transfer_store_note == null) {
        transfer_arr = [];
    } else {
        transfer_arr = JSON.parse(localStorage.getItem('transfer'));
    }
    Array.from(transfer_arr).forEach(function(element) {
        let transfer_add = document.querySelector(`#bal_${element.to_acc}`);
        transfer_add.innerHTML = Number(transfer_add.innerHTML) + Number(element.transfer_amount);
        let transfer_sub = document.querySelector(`#bal_${element.from_acc}`);
        transfer_sub.innerHTML = Number(transfer_sub.innerHTML) - Number(element.transfer_amount);
    });
}


function addacitive() {
    document.querySelector('.navbar').classList.toggle('active');
}

function form_button() {
    if (document.getElementById('exampleFormControlInput1').value == "") {
        alert("Enter Email Address ");
    } else if (document.getElementById('exampleFormControlInput1').value.includes('@') == false) {
        alert('Enter Valid Email');
    } else if (document.getElementById('exampleFormControlTextarea1').value == "") {
        alert("Enter Your Queries ");
    } else {
        alert('Your Queries is Submitted');
        document.getElementById('exampleFormControlInput1').value = " ";
        document.getElementById('exampleFormControlTextarea1').value = " ";
    }
}
window.onload = (event) => {
    show();

};