const links = [
    {
      label: "Week 1: notes",
      url: "week1/index.html"
    },
  ]

  function createLinks(listContainer, links) {
    var listItems = "";
    links.forEach(element => {
        listItems += "<li>";
        listItems += `<a href="${element.url}"><span class="linkLabel">${element.label}</span></a>`;
        listItems += "</li>";
      });
    document.getElementById(listContainer).innerHTML = listItems;
    console.log("done");
    }

