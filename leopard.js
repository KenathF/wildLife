document.addEventListener("DOMContentLoaded", function () {
    // fetch from json
    fetch('./leopard.json')
      .then(response => response.json())
      .then(data => {
        const sec1Data = data.sec1Data;
        const sec2Data = data.sec2Data;
        const sec3Data = data.sec3Data;
  

        function showSec1() {
          const sec1Title = document.getElementById("sec1Title");
          const sec1Content = document.getElementById("sec1Content");
          sec1Title.textContent = sec1Data.title;
          sec1Data.spots.forEach(spot => {
            const spotDiv = document.createElement("div");
            spotDiv.classList.add("leopard1");
            spotDiv.innerHTML = `
              <img class="image" src="${spot.image}" alt="${spot.name}">
              <div class="leopardtext">
                <h2>${spot.name}</h2>
                <p>${spot.description}</p>
              </div>`;
            sec1Content.appendChild(spotDiv);
          });
        }
  
        function showSec2() {
          const sec2Title = document.getElementById("sec2Title");
          const sec2Content = document.getElementById("sec2Content");
          sec2Title.textContent = sec2Data.title;
          sec2Data.threats.forEach(threat => {
            const threatDiv = document.createElement("div");
            threatDiv.classList.add("threat1");
            threatDiv.innerHTML = `
              <h2>${threat.title}</h2>
              <img src="${threat.image}" alt="${threat.title}">
              <p>${threat.description}</p>
              <h4>Consequences:</h4>
              <p>${threat.consequences}</p>
              <h4>Reduce Methods:</h4>
              <p>${threat.reduceMethods}</p>`;
            sec2Content.appendChild(threatDiv);
          });
        }
  

        function showSec3() {
          const sec3Title = document.getElementById("sec3Title");
          const sec3Content = document.getElementById("sec3Content");
          sec3Title.textContent = sec3Data.title;
          sec3Data.threats.forEach(threat => {
            const threatDiv = document.createElement("div");
            threatDiv.classList.add("threat1");
            threatDiv.innerHTML = `
              <h2>${threat.title}</h2>
              <img src="${threat.image}" alt="${threat.title}">
              <p>${threat.description}</p>
              <h4>Consequences:</h4>
              <p>${threat.consequences}</p>
              <h4>Reduce Methods:</h4>
              <p>${threat.reduceMethods}</p>`;
            sec3Content.appendChild(threatDiv);
          });
        }
  
        // methhod to show content
        showSec1();
        showSec2();
        showSec3();
      })
      .catch(error => console.error('Error fetching JSON:', error));
  });
  