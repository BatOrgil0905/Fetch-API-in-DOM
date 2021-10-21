// Fetch API in JSON
document.querySelector("#getName").addEventListener('click', getUserDataName);
document.querySelector("#getAge").addEventListener('click', getUserDataAge);
document.querySelector("#getHobby").addEventListener('click', getUserDataHobby);
document.querySelector("#getLang").addEventListener('click', getUserDataLang);
// document.querySelector("#remove").addEventListener('click', function removeElement(){
    
// });


function getUserDataName(){
    //with Function Expression
    // fetch('user.json').then((response)=> response.json()
    // ).then(function(obj){
    //     console.log(obj);
    // }).catch(function(error){
    //     console.log(error)
    // });

    // with Arrow function
    fetch('user.json')
    .then((res)=> res.json())
    .then((obj)=> {
        let nameOutput = '<h2>Users</h2>';
        
        obj.forEach(function(user){
            nameOutput += `
            <ul>
                <li>Name:  ${user.name}</li>
            </ul>
            `
        })
        
        document.querySelector("#myDiv1").innerHTML = nameOutput;

    })
    .catch((err)=> console.log(err));
}

function getUserDataAge(){
    fetch('user.json')
    .then((res)=> res.json())
    .then((data) => {
        let ageOutput = '<h2>Users</h2>';
        data.forEach(function(user){
            ageOutput += `
            <ul>
                <li>Age:  ${user.age}</li>
            </ul>
            `
        })
        document.querySelector("#myDiv2").innerHTML = ageOutput;
    })
    .catch((err)=> console.log(err));
}
function getUserDataHobby(){
    fetch('user.json')
    .then((res)=> res.json())
    .then((output) => {
        let hobbyOutput = '<h2>Users</h2>';
        output.forEach(function(user){
            hobbyOutput += `
            <ul>
                <li>Hobbies:  ${user.hobbies}</li>
            </ul>
            `
        })
        document.querySelector("#myDiv3").innerHTML = hobbyOutput;
    })
    .catch((err)=> console.log(err));
}
function getUserDataLang(){
    fetch('user.json')
    .then((res)=> res.json())
    .then((data) => {
        let langOutput = '<h2>Users</h2>';
        data.forEach(function(user){
            langOutput += `
            <ul>
                <li>Languages:  ${user.languages}</li>
            </ul>
            `
        })
        document.querySelector("#myDiv4").innerHTML = langOutput;
    })
    .catch((err)=> console.log(err));
}


