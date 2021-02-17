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
        let name1 = name;
        let url = `https://api.github.com/users/${name1}/repos`;
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
                const html = data.map(x => {
                 // console.log(x.name);
                    return `
                   <ol> <h6>${x.name}</h6></ol>`
                   
                }).join("")
                //console.log(html);
                 document.getElementById("result1").insertAdjacentHTML("afterbegin", html);
            })
        }
}())