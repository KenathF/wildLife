document.addEventListener("DOMContentLoaded", function () {
  // fetch from json
  fetch('./wilpattuwa.json')
    .then(response => response.json())
    .then(data => {
      const sec1Data = data.sec1Data;
      const sec2Data = data.sec2Data;
      const sec3Data = data.sec3Data;

      function showSec1() {
        document.getElementById("sec1").innerHTML = `
            <h2>${sec1Data.title}</h2>
            <p>${sec1Data.description}</p>
          `;
      }

      function showSec2() {
        document.getElementById("sec2").innerHTML = `
            <h2>${sec2Data.title}</h2>
            <p>${sec2Data.description}</p>
            <div class="container wilpattu-image-gallery" id="sec2ImageGallery"></div>
          `;

        const sec2ImageGallery = document.getElementById("sec2ImageGallery");
        sec2Data.images.forEach(image => {
          const img = document.createElement("img");
          img.src = image;
          sec2ImageGallery.appendChild(img);
        });
      }

      function showSec3() {
        document.getElementById("sec3").innerHTML = `
            <h2>${sec3Data.title}</h2>
            <p>${sec3Data.description}</p>
          `;
      }


      
      // methods to show content
      showSec1();
      showSec2();
      showSec3();
    })
    .catch(error => console.error('Error fetching JSON:', error));
});
