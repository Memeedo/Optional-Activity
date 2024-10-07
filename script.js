function filterByTeam() {
    let input = document.getElementById("searchBox");
    let word = input.value.toLowerCase();
  
    let rows = document.querySelectorAll("tbody tr");
    doFilter(rows, 1, word);
  }
  
  function filterByBroadcast() {
    let menuItem = document.getElementsByClassName("select_broadcasters")[0];
    let word = menuItem.value.toLowerCase();
    let rows = document.querySelectorAll("tbody tr");
    doFilter(rows, 2, word);
  }
  
  function doFilter(rows, column, word) {
    for (let i = 0; i < rows.length; i++) {
      let td = rows[i].getElementsByTagName("td")[column];
      let txtValue = td.innerText;
      if (txtValue.toLowerCase().indexOf(word) > -1) {
        rows[i].style.display = "";
      } else {
        rows[i].style.display = "none";
      }
    }
  }
  
  let inputSearchElem = document.getElementById("searchBox");
  inputSearchElem.addEventListener("keyup", filterByTeam);
  
  let selectBroadcasterElem = document.getElementsByClassName("select_broadcasters")[0];
  selectBroadcasterElem.addEventListener("change", filterByBroadcast);
  
  
  function sortTable(columnIndex) {
    let tables = document.querySelectorAll(".nbaSchedule");
    tables.forEach(table => {
      let rows = Array.from(table.querySelectorAll("tbody tr"));
      let isAscending = table.getAttribute("data-order") === "asc";
  
      rows.sort((a, b) => {
        let cellA = a.cells[columnIndex].innerText.toLowerCase();
        let cellB = b.cells[columnIndex].innerText.toLowerCase();
        return isAscending ? cellA.localeCompare(cellB) : cellB.localeCompare(cellA);
      });
  
      
      table.setAttribute("data-order", isAscending ? "desc" : "asc");
      let tbody = table.querySelector("tbody");
      tbody.innerHTML = "";
      rows.forEach(row => tbody.appendChild(row));
    });
  }
  