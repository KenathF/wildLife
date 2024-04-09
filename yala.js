document.addEventListener("DOMContentLoaded", function () {
    // fetch from json
    fetch('./yala.json')
      .then(response => response.json())
      .then(data => {
        const sec1Data = data.sec1Data;
        const sec2Data = data.sec2Data;
        const sec3Data = data.sec3Data;
  
    
        function showSec1() {
          document.getElementById("sec1Title").textContent = sec1Data.title;
          document.getElementById("sec1Description").textContent = sec1Data.description;
        }
  
      
        function showSec2() {
          document.getElementById("sec2Title").textContent = sec2Data.title;
          document.getElementById("sec2Description").textContent = sec2Data.description;
  
          const sec2ImageGallery = document.getElementById("sec2ImageGallery");
          sec2Data.images.forEach(image => {
            const img = document.createElement("img");
            img.src = image;
            sec2ImageGallery.appendChild(img);
          });
        }
  
        
        function showSec3() {
          document.getElementById("sec3Title").textContent = sec3Data.title;
          document.getElementById("sec3Description").textContent = sec3Data.description;
          document.getElementById("sec3WebsiteLink").href = sec3Data.websiteLink;
          document.getElementById("mapEmbed").src = sec3Data.mapEmbedUrl;
        }
  
        // methods to show content
        showSec1();
        showSec2();
        showSec3();
      })
      .catch(error => console.error('Error fetching JSON:', error));
  });
  