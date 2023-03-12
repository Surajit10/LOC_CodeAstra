//const api_url = "<heroku_app_url>"
// const api_url = "http://localhost:8088/department-details"
const api_url = "http://localhost:3000/quote-jobs-upload";


function postData() {
  var f_name = document.getElementById("firstName").value;
  var p_link = document.getElementById("p_link").value;
  var email = document.getElementById("email").value;
  var pno = document.getElementById("pno").value;
  var bid_price = document.getElementById("bid_price").value;
  data = {
    name: f_name,
    p_link: p_link,
    email: email,
    pno: pno,
    bid_price:bid_price ,
  };

  fetch(api_url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      window.location.href = "job-bid.html";
    });
}

// function loadData(records = []) {
//   var ht = "";
//   for (let i = 0; i < records.length; i++) {
//     ht += `<div class="col-sm-6" style="margin-top: 30px;">`;
//     ht += `<div class="card">`;
//     ht += `<img class="card-img-top" src="https://i.pinimg.com/564x/0a/e6/bf/0ae6bfb87c59823eddbeee065ab71ba0.jpg" height="10px"; alt="Card image cap"/>`;
//     ht += `<div class="card-body">`;
//     ht += `<h5 class="card-title"><center>${records[i].title}</center></h5>`;
//     ht += `<p class="card-text">${records[i].description}</p>`;
//     ht += `<p class="card-text">${records[i].category}</p>`;
//     ht += `<p class="card-text">${records[i].tag}</p>`;
//     ht += `<a href="single-blog.html?id=${records[i]._id}"><button class="btn btn-primary">View</button></a>`;
//     ht += `</div>`;
//     ht += `</div>`;
//     ht += `</div>`;
//   }
//   //console.log(table_data);
//   document.getElementById("tbody").innerHTML = ht;
// }

// function getData() {
//   fetch(api_url_get)
//     .then((response) => response.json())
//     .then((data) => {
//       console.table(data);
//       loadData(data);
//     });
// }

// function getDataById(id) {
//   fetch(`${api_url_get1}/${id}`)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       // console.log(data[0]._id)
//       console.log(data.title);
//       document.getElementById(
//         "title"
//       ).innerHTML = `<h1><center>${data.title}</center><hr/>`;
//       document.getElementById("description").innerText = data.description;
//       document.getElementById("category").innerText = data.category;
//       document.getElementById("date").innerText = data.createdAt;
//       document.getElementById("tags").innerHTML = `<b>Tags:</b> ${data.tag}`;
//       document.getElementById(
//         "image"
//       ).innerHTML = `<img src="${data.image_url}" alt="" width="1200px" height="678px"/>`;
//     });
// }
