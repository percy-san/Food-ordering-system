
//FORM VALIDATION//
const validateSignIn = () =>{
  
}

//TAB FUNCTIONALITY//
const openItem = (evt, tabItem) => {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabItem).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

const openSummary = (evt, tabItem) => {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("order-tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("order-tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabItem).style.display = "block";
  evt.currentTarget.className += " active-order-summary";
}
document.getElementById("default").click();

//ADMIN DASHBOARD JS/

//toggle side bar
let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");

btn.onclick = function(){
    sidebar.classList.toggle("active");
}
