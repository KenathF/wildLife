document.addEventListener("DOMContentLoaded", function () {
    // fetch from json
    fetch('./animal.json')
      .then(response => response.json())
      .then(data => {
        const flexboxData = data.flexboxData;
        const sec2Data = data.sec2Data;
  
        
        function showFlexbox() {
          const flexboxContainer = document.getElementById("flexboxContainer");
          flexboxData.forEach(animal => {
            const boxDiv = document.createElement("div");
            boxDiv.classList.add("box");
            boxDiv.innerHTML = `
              <div class="box-image" style="background-image: url(${animal.image})"></div>
              <h2>${animal.name}</h2>
              <p>${animal.description}</p>`;
            flexboxContainer.appendChild(boxDiv);
          });
        }
  
        
        function showSec2() {
          const sec2Content = document.getElementById("sec2Content");
          sec2Content.classList.add("sec2"); 
  
          sec2Data.locations.forEach(location => {
            const locationDiv = document.createElement("div");
            locationDiv.classList.add(location.name.replace(/\s+/g, '-'));
            locationDiv.innerHTML = `
              <br>
              <img src="${location.image}" alt="${location.name}" style="float: left; border: 3px solid; border-color: ${location.name === 'Yala National Park' ? 'rgb(0, 0, 0)' : 'rgb(1, 1, 1)'}; max-width: 420px; border-radius: 10px; margin-right: 15px; margin-left: 30px;">
              <div class="leopardtext">
                <h2>${location.name}</h2>
                <p>${location.description}</p>
                <a href="./${location.name.replace(/\s+/g, '-').toLowerCase()}.html" target="_blank">Read more</a>
              </div>
            `;
            sec2Content.appendChild(locationDiv);
          });
        }
  
        
        showFlexbox();
        showSec2();
      })
      .catch(error => console.error('Error fetching JSON:', error));
  });
  