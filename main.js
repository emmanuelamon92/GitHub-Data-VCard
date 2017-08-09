//look at basic HTML...what do I need to do to get HTML. then look at java script and set up global variables.
//look at different sections header / 3 sections using flexbox? / use url and take stuff from GitHub API.
//Fetch incompases everything.
const url = 'https://api.github.com/users/emmanuelamon92'

let findDiv = document.querySelector(".wrapper");

function reqListener(personalDirectory){
  console.log(personalDirectory, 'personalDirectory');
  let data = JSON.parse(this.responseText);
  // let gitHubUrl =
  const personalInfoCard = `
        <header class = "zigZag">
            <h1>${data.name}</h1>
        </header>
        <main>
            <div class = "mainInfo">
              <div id = "withOutPic">
                <div class = "basicInfo">
                    <h2>The Basics</h2>
                        <p><span>Name:</span> ${data.name}</p>
                        <p><span>GitHub URL:</span> <a href = ${data.url}>${data.url}</a></p>
                        <p><span>Email:</span> ${data.email}</p>
                        <p><span>Company:</span> ${data.company}</p>
                        <p><span>Website:</span> <a href = ${data.blog}>${data.blog}</a></p>
                </div>
                <div class = "myStory">
                    <h2>The Story</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam finibus turpis sed semper. Cras non sem erat. Suspendisse vel ornare elit. Integer non dignissim est, eget semper ligula. Morbi vehicula, augue ornare viverra fermentum, nibh tellus consequat enim, ut egestas arcu justo nec risus. Suspendisse potenti. </p>
                </div>
              </div>
                <div id = "profilePic">
                    <img src = "${data.avatar_url}" alt = "${data.name}">
                </div>
            </div>
        </main>

  `
  findDiv.innerHTML = personalInfoCard;
  console.log(personalInfoCard);
  console.log(data);
  // return personalInfoCard;
}

let ajaxRequest = new XMLHttpRequest ();
ajaxRequest.open("GET", url);
ajaxRequest.addEventListener("load", reqListener);
ajaxRequest.send();
