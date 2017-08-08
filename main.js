//look at basic HTML...what do I need to do to get HTML. then look at java script and set up global variables.
//look at different sections header / 3 sections using flexbox? / use url and take stuff from GitHub API.
const url = 'https://api.github.com/users/emmanuelamon92'

// fetch(`https://api.github.com/users/emmanuelamon92`)
//     .then(function(url){
//       return url.JSON();
//       })
//     .then(function(url){
//       console.log(url)
//     })

// let findDiv = document.querySelector("mainInfo");

function reqListener(){
  let data = JSON.parse(this.responseText);
  const personalInfoCard = `
        <header>
            <h1>${data.name}</h1>
        </header>
        <main>
            <div class = "mainInfo">
                <div class = "basicInfo">
                    <h2>The Basics</h2>
                        <p>Name:${data.name}</p>
                        <p>GitHub URL:${data.url}</p>
                        <p>Email:${data.email}</p>
                        <p>Company:${data.company}</p>
                        <p>Website:${data.blog}</p>
                </div>
                <div class = "myStory">
                    <h2>The Story</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam finibus turpis sed semper. Cras non sem erat. Suspendisse vel ornare elit. Integer non dignissim est, eget semper ligula. Morbi vehicula, augue ornare viverra fermentum, nibh tellus consequat enim, ut egestas arcu justo nec risus. Suspendisse potenti. In consectetur quam id eros bibendum ullamcorper. Morbi pretium sapien vitae nulla tincidunt, sit amet accumsan magna luctus. Aliquam at risus at nisl malesuada efficitur et sit amet sapien. In ut leo vel magna sagittis feugiat. Mauris porta purus nec tellus lacinia sollicitudin. Praesent vitae sem bibendum, luctus massa in, sagittis ligula. Donec eget nisl dictum, porta mi quis, porta erat. Maecenas ac elit tortor.</p>
                </div>
                <div id = "profilePic">
                    <img src = "${data.avatar_url}" alt = "${data.name}">
                </div>
            </div>
        </main>

  `
  console.log(personalInfoCard);
  console.log(data);
  return personalInfoCard;
}



let ajaxRequest = new XMLHttpRequest ();
ajaxRequest.open("GET", url);
ajaxRequest.addEventListener("load", reqListener);
ajaxRequest.send();




// const personalInfoCard = `
//       <header>
//           <h1>${url.Name}</h1>
//       </header>
//       <main>
//           <div class = "mainInfo">
//               <div class = "basicInfo">
//                   <h2>The Basics</h2>
//                       <p>Name:${url.name}</p>
//                       <p>GitHub URL:${url.url}</p>
//                       <p>Email:${url.email}</p>
//                       <p>Company:${url.company}</p>
//                       <p>Website:${url.blog}</p>
//               </div>
//               <div class = "myStory">
//                   <h2>The Story</h2>
//                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam finibus turpis sed semper. Cras non sem erat. Suspendisse vel ornare elit. Integer non dignissim est, eget semper ligula. Morbi vehicula, augue ornare viverra fermentum, nibh tellus consequat enim, ut egestas arcu justo nec risus. Suspendisse potenti. In consectetur quam id eros bibendum ullamcorper. Morbi pretium sapien vitae nulla tincidunt, sit amet accumsan magna luctus. Aliquam at risus at nisl malesuada efficitur et sit amet sapien. In ut leo vel magna sagittis feugiat. Mauris porta purus nec tellus lacinia sollicitudin. Praesent vitae sem bibendum, luctus massa in, sagittis ligula. Donec eget nisl dictum, porta mi quis, porta erat. Maecenas ac elit tortor.</p>
//               </div>
//               <div id = "profilePic">
//                   <img src = "${url.avatar_url}" alt = "${url.name}">
//               </div>
//           </div>
//       </main>
//
// `
