const api_url = "http://localhost:3000/user-jobs-upload"
const api_url_get = "http://localhost:3000/user-jobs-view"

function postData() {
    var email = document.getElementById("email").value;
    var title = document.getElementById("title").value;
    var requirement = document.getElementById("requirement").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var minimum = document.getElementById("minimum").value;
    var maximum = document.getElementById("maximum").value;
    data = { email: email, title: title, requirements: requirement, date: date, time:time,minimum:minimum,maximum:maximum }

    fetch(api_url, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            window.location.href = "job-create.html";
        })
}



function loadData(records = []) {
    var table_data = "";
    for (let i = 0; i < records.length; i++) {

        table_data += `<div class="card">`;
        table_data += `<h5 class="card-header">${records[i].title}</h5>`;
        table_data += `<div class="card-body">`;
        table_data += `<p class="card-text">${records[i].requirements}</p>`;
        table_data += `</div>`;
        table_data += `<table class="table">`;
        table_data += `<tbody>`;
        table_data += `<tr>`;
        table_data += `<th scope="row">Date:</th>`;
        table_data += `<td>${records[i].date}</td>`;
        table_data += `<th scope="row">Time:</th>`;
        table_data += `<td>${records[i].time}</td>`;
        table_data += `</tr>`;
        table_data += `<tr>`;
        table_data += `<th scope="row">Pay Range:</th>`;
        table_data += `<td>${records[i].minimum + "-" + records[i].maximum}</td>`;
        table_data += `<th scope="row">Bid:</th>`;
        table_data += `<td><button type="button" class="btn btn-primary">Primary</button>`;
        table_data += `</td>`;
        table_data += `</tr>`;
        table_data += `</tbody>`;
        table_data += `</table>`;
        table_data += ` </div>`;
        
    }
    //console.log(table_data);ssss
    document.getElementById("job_data").innerHTML = table_data;
}

function getData() {
    fetch(api_url_get)
        .then((response) => response.json())
        .then((data) => {
            console.table(data);
            loadData(data);
        });
}
