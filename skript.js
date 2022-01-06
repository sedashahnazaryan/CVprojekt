import { userList } from "./data.js";

//let gridContainer=document.getElementById('grid container')
//let userPage=document.getElementById('user ');
list();
function list() {
  let contanier = document.getElementById("grid-container");
  contanier.innerHTML += `<div class="cvbox">
    
     <div class="grid-item"><a href="#newPerson" class="cv_link"><span>Add new person</span></a><imgs  src="./imgs/images(1).png" alt="images(1).png" class=""></div>
   </div>`;
  userList.forEach(function (data) {
    contanier.innerHTML += ` <div>
          <div class="grid-item">  <a href="#page?id=${data.id}">${data.firstName} ${data.lastName}</a> 
           <img src="" alt=""style width="20%"></div>
    </div>`;
  });
}
//for(let i=0; i <userList.length;i++){
//console.log(userList[i])

window.addEventListener("hashchange", function () {
  let gridContainer = document.getElementById("grid-container");
  let userPage = document.querySelector(".personal_page");
  let addNew = document.querySelector(".addnew");

  gridContainer.classList.add("hidden");
  userPage.classList.remove("hidden");

  let searchId = window.location.hash.split("=");
  const id = searchId[1];
  console.log(searchId);
  let hash = window.location.hash;

  if (hash.includes("newPerson")) {
    gridContainer.classList.add("hidden");
    addNew.classList.remove("hidden");
    userPage.classList.add("hidden");
  } else if (hash.includes("page")) {
    gridContainer.classList.add("hidden");
    userPage.classList.remove("hidden");
    addNew.classList.add("hidden");
    const user=findUserbyId(id);
    addUserData(user);
  } else {
    gridContainer.classList.remove("hidden");
    userPage.classList.add("hidden");
    addNew.classList.add("hidden");
  }
});

function findUserbyId(id) {
  const foundUser = userList.find(function (user) {
    return user.id == id;
  });
  return foundUser;
}

function addUserData(person) {
  console.log(person);
  document.querySelector(".cvName").innerHTML =
    person.firstName + " " + person.lastName;
  document.querySelector(".emailAddress").innerHTML = person.email;
  document.querySelector(".phoneNumber").innerHTML = person.phone;
  document.querySelector(".education").innerHTML = person.education;
  document.querySelector(".educationDate").innerHTML = person.educationDate;
  document.querySelector(".profession").innerHTML = person.profession;
  document.querySelector(".trainings0").innerHTML = person.trainings;
  document.querySelector(".trainingsDate0").innerHTML = person.trainingsDate;
  document.querySelector(".trainingName").innerHTML = person.trainingName;
  document.querySelector(".workExperience").innerHTML = person.workExperience;
  document.querySelector(".workExperienceDate").innerHTML =
    person.workExperienceDate;
  document.querySelector(".position").innerHTML = person.position;
  document.querySelector(".personImg").setAttribute("src", person.image || "");
}
// grid-container elementi display@ dardznel none.
// user classov elementi display@ dardznel block
//DOM-i methodnerov
