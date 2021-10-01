const links = [
    {
      label: "Week 1",
      url: "week1/index.html"
    },
    {
      label: "Week 2",
      url: "week2/index.html"
    },
    {
      label: "Week 3",
      url: "week3/index.html"
    },
  ]

  function createLinks(listContainer, links) {
    let listItems = "";
    links.forEach(element => {
        listItems += "<li>";
        listItems += `<a href="${element.url}"><span class="linkLabel">${element.label}</span></a>`;
        listItems += "</li>";
      });
    document.getElementById(listContainer).innerHTML = listItems;
    }

    // trying to make the index dynamic. Getting CORS errors, but it may be due to me running it locally
    // function createLinks(listContainer, links) {
    //   let xhr = new XMLHttpRequest();
    //   let url = "week1/index.html"
    //   let listItems = "";
    //   let label = "";

    //   for(let i=1;xhr.status != "404";i++) {
    //     url = "week"+i+"/index.html";
    //     label = "Week "+ i;
    //     xhr.open('HEAD', url, false);
    //     xhr.send();
        
    //     if (xhr.status == "404") {
    //         break;
    //     } else {
    //       listItems += "<li>";
    //       listItems += `<a href="${url}"><span class="linkLabel">${label}</span></a>`;
    //       listItems += "</li>";            
    //     }
    //   }
    //   document.getElementById(listContainer).innerHTML = listItems;
    // }
