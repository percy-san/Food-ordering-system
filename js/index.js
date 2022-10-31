
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



//ADMIN DASHBOARD JS/

//toggle side bar
let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");

btn.onclick = function(){
    sidebar.classList.toggle("active");
}

//ytabs
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
  evt.currentTarget.className += " active";
}
document.getElementById("default").click();

//Tables javascript
const searchOrdersTable = () => {
  let input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("OrdersTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

const searchCustomersTable = () => {
  let input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchInputCustomers");
  filter = input.value.toUpperCase();
  table = document.getElementById("CustomerTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}








