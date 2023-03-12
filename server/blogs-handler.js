//const api_url = "<heroku_app_url>"
// const api_url = "http://localhost:8088/department-details"
const api_url = "http://localhost:3000/blog-new"
const api_url_get = "http://localhost:3000/blog-view"
const api_url_get1 = "http://localhost:3000/blog-view-one"


function postData() {
    var dept_name = document.getElementById("article_title").value;
    var dept_location = document.getElementById("article_content").value;
    var dept_incharge_name = document.getElementById("category").value;
    var depti_name = document.getElementById("tags").value;
    var image_url = document.getElementById("image_url").value;
    data = { title: dept_name, description: dept_location, category: dept_incharge_name, tag: depti_name, image_url:image_url }

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
            window.location.href = "blog-new.html";
        })
}

function loadData(records = []) {
    var ht = "";
    for (let i = 0; i < records.length; i++) {
        ht += `<div class="col-sm-6" style="margin-top: 30px;">`;
        ht += `<div class="card">`;
        ht += `<img class="card-img-top" src="https://i.pinimg.com/564x/0a/e6/bf/0ae6bfb87c59823eddbeee065ab71ba0.jpg" height="10px"; alt="Card image cap"/>`;
        ht += `<div class="card-body">`;
        ht += `<h5 class="card-title"><center>${records[i].title}</center></h5>`;
        ht += `<p class="card-text">${records[i].description}</p>`;
        ht += `<p class="card-text">${records[i].category}</p>`;
        ht += `<p class="card-text">${records[i].tag}</p>`;
        ht += `<a href="single-blog.html?id=${records[i]._id}"><button class="btn btn-primary">View</button></a>`;
        ht += `</div>`;
        ht += `</div>`;
        ht += `</div>`;
        
    }
    //console.log(table_data);
    document.getElementById("tbody").innerHTML = ht;
}

function getData() {
    fetch(api_url_get)
        .then((response) => response.json())
        .then((data) => {
            console.table(data);
            loadData(data);
        });
}



function getDataById(id) {
    fetch(`${api_url_get1}/${id}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            // console.log(data[0]._id)
            console.log(data.title)
            document.getElementById("title").innerHTML = `<h1><center>${data.title}</center><hr/>`;
            document.getElementById("description").innerText = data.description;
            document.getElementById("category").innerText=data.category;
            document.getElementById("date").innerText=data.createdAt;
            document.getElementById("tags").innerHTML=`<b>Tags:</b> ${data.tag}`;
            document.getElementById("image").innerHTML=`<img src="${data.image_url}" alt="" width="1200px" height="678px"/>`;
        })
}
