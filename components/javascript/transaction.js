function deposit_detail() {

    /*Deposite Details to Show in Transaction Histor*/
    let temparr = [];
    let temp = JSON.parse(localStorage.getItem('fund_to_added'));
    if (temp == null) {
        temparr = [];
    } else {
        temparr = JSON.parse(localStorage.getItem('fund_to_added'));
    }
    let html = "";

    Array.from(temparr).forEach(function(element) {
        html += `
        <div class="detail">
            <p> Account Number ${element.acc} has Credit Rs. ${element.fund_add}</p>
        </div>`
    });
    document.getElementById('deposit_details').innerHTML = html;
    /*Tranfer Details to Show in Transaction Histor*/
    let show_arr = [];

    let show_store_note = JSON.parse(localStorage.getItem('transfer'));
    if (show_store_note == null)[
        show_arr = []
    ]
    else {
        show_arr = JSON.parse(localStorage.getItem('transfer'));
    }
    let html2 = "";
    Array.from(show_arr).forEach(function(element) {
        html2 += `
            <div class="detail">
                <p>Rs. ${element.transfer_amount} is transfered from Account No. ${element.from_acc} to  Account No. ${element.to_acc}</p>
            </div>`
    })


    document.getElementById('transfer_detail').innerHTML = html2;


}

function addacitive() {
    document.querySelector('.navbar').classList.toggle('active');
}



window.onload = (event) => {
    deposit_detail();
};