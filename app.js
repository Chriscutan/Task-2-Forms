let userDetails = [];

function AddUserDetails(){
    let username = document.getElementById("add-name").value;
    let usermobile = document.getElementById("add-phone").value;
    let useremail = document.getElementById("add-email").value;

    let details = {
        name: username,
        phone: usermobile,
        mail: useremail
    }

    userDetails.push(details);

    document.getElementById("add-name").value = "";
    document.getElementById("add-phone").value = "";
    document.getElementById("add-email").value = "";
}

function FetchUserDetails(){
    let requiredEmail = document.getElementById("fetch-email").value;

    let requiredUserDetails = userDetails.filter( (user) =>{
        if(user.mail === requiredEmail){
            return user;
        }
    })

    document.getElementById("fetch-email").value = "";

    let resultDiv = document.getElementById("result-details");

    let requiredUserName = document.createElement('p');
    let requiredUserPhone = document.createElement('p');
    let requiredUserEmail = document.createElement('p');

    let title = document.createElement('h1');
    title.classList.add("title");
    title.innerHTML = "Result";

    requiredUserName.innerHTML = "Name: " + requiredUserDetails[0].name;
    requiredUserPhone.innerHTML = "Mobile: " + requiredUserDetails[0].phone;
    requiredUserEmail.innerHTML = "Email: " + requiredUserDetails[0].mail;

    requiredUserName.classList.add("result");
    requiredUserPhone.classList.add("result");
    requiredUserEmail.classList.add("result");

    resultDiv.appendChild(requiredUserName);
    resultDiv.appendChild(requiredUserPhone);
    resultDiv.appendChild(requiredUserEmail);
}