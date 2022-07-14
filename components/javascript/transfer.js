function transfer_fund() {
    let arr = [];

    let store_note = JSON.parse(localStorage.getItem('transfer'));
    if (store_note == null)[
        arr = []
    ]
    else {
        arr = JSON.parse(localStorage.getItem('transfer'));
    }
    let from_account = document.querySelector('.select_account_from');
    let to_account = document.querySelector('.select_account_to');
    let to_transfer_amount = document.querySelector('#transfer_balance');
    let obj = {
        from_acc: from_account.value,
        from_acc_balance: Number(document.querySelector(`#bal_${from_account.value}`).innerHTML),
        to_acc: to_account.value,
        transfer_amount: Number(to_transfer_amount.value),
    }

    if (from_account.value == 'select') {
        alert('Select From Account ')
    } else
    if (to_account.value == 'select') {
        alert('Select From Account ')
    } else if (to_transfer_amount.value == '') {
        alert('Enter Amount ')
    } else if (to_transfer_amount.value > obj.from_acc_balance) {
        alert(`Rs.${to_transfer_amount.value} is not availbale in Account No. ${from_account.value}`)

    } else {
        arr.push(obj);
        document.querySelector('.select_account_from').value == 'select'
        document.querySelector('.select_account_to').value == 'select'
        document.querySelector('#transfer_balance').value == ''
        localStorage.setItem('transfer', JSON.stringify(arr));
        alert('Transfer Sucessful');
        show();

    }

}

function addacitive() {
    document.querySelector('.navbar').classList.toggle('active');
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

window.onload = (event) => {
    show();
};