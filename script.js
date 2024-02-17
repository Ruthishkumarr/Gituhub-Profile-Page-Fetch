const userInput = document.getElementById("userName");
const getDetailsButton = document.getElementById("getDetails");
const profileInfo = document.getElementById("profileInfo");
const repoInfo = document.getElementById("repoInfo");

//!Using Async function to get User Details

getDetailsButton.addEventListener("click", async () => {
  const userName = userInput.value;
  //   console.log(userName);

  //! Using the Github api to Fetch the Data from server

  const res = await fetch(`https://api.github.com/users/${userName}`);
  const data = await res.json();
  //console.log(data);
  getProfile(data);
  getRepo(userName);
});

//! get Profile Function is used to get user details in server

function getProfile(data) {
  // console.log(data);
  profileInfo.innerHTML = `<div class="card">
  <div class="card-img">
  <img src =${data.avatar_url} src=${data.name}>
  </div>
  <div class="card-body">
  <h2><i class="fa-solid fa-user"></i> ${data.name}</h2>
  <h5 class="login">${data.login}</h5>
  <p class="bio">${data.bio}</p>
  <h5 class="location">${data.location}</h5>
  <button class="b"><a href =${data.html_url} target="_blank">Click Me</a></button>
  </div></div>
  `;
}

//! Get Repo Based on their UserName and Passing another api to get that

async function getRepo(userName) {
  const res = await fetch(`https://api.github.com/users/${userName}/repos`);
  const project = await res.json();
  //   console.log(project);
  for (i = 0; i < project.length; i++) {
    repoInfo.innerHTML += `<div class="card">
    <div class="card-body">
    <h3><i class="fa-solid fa-user"></i> ${project[i].name}</h3>
  <h5>${project[i].language}</h5>
  <div class="card-text">
  <button class="ba"><a href =${project[i].html_url} target="_blank">Visit Projects</a></button>
  </div>
  </div>
  </div>`;
  }
}
