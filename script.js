
(function () {
    const buttonId = document.getElementById("button")
    buttonId.addEventListener("click", function () {
        const searchId = document.getElementById("search").value
        if (searchId) {
         userSearch(searchId)
        } else {
            console.log("please enter any username");
        }
    });
   
   async function userSearch(name) {
       let url = ` https://api.github.com/users/${name}`;
       fetch(url)
           .then(response => {
               console.log(response)
               if (!response.ok) {
                   throw Error("ERROR")
               }
               return response.json();
           })
           .then(data => {
                console.log(data);
                console.log(data.name);
               console.log(data.html_url);
               console.log(data.location);
               console.log(data.public_repos);
               console.log(data.followers);
               console.log(data.following);
               console.log(data.repos_url);
               document.getElementById("result").innerHTML =
                   `<ol>
                   <li><h3>User Profile Picture</h3></li>
                   <img src="${data.avatar_url}" width="100" heigth="100"/>
        <li><h3>Name</h3></li>
               <h6>${data.name}</h6>
             <li><h3>location</h3></li>
               <h6>${data.location}</h6>
           <li>  <h3>No.of Repository of user</h3></li>
               <h6>${data.public_repos}</h6>
              <li> <h3>followers</h3></li>
               <h6>${data.followers}</h6>
              <li> <h3>following</h3></li>
               <h6>${data.following}</h6>
              <li><h3>repositary url</h3></li>
               <h6>${data.repos_url}</h6></ol>
               `;
           })
    }   

}())