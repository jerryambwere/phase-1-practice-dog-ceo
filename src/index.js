// index.js

document.addEventListener('DOMContentLoaded', function () {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    
    // Challenge 1: Fetch and Display Images
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        const imagesContainer = document.getElementById('dogImages');
        data.message.forEach(imageUrl => {
          const img = document.createElement('img');
          img.src = imageUrl;
          img.alt = 'Dog';
          imagesContainer.appendChild(img);
        });
      })
      .catch(error => console.log(error));
  
    // Challenge 2: Fetch and Display Dog Breeds
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const breedsContainer = document.getElementById('dogBreeds');
        for (let breed in data.message) {
          const li = document.createElement('li');
          li.textContent = breed;
          breedsContainer.appendChild(li);
        }
      })
      .catch(error => console.log(error));
  
    // Challenge 3: Change Font Color on Click
    const breedsList = document.getElementById('dogBreeds');
    breedsList.addEventListener('click', function (event) {
      if (event.target.tagName === 'LI') {
        event.target.style.color = 'blue'; // Change color to your choice
      }
    });
  
    // Challenge 4: Filter Breeds by Starting Letter
    const dropdown = document.getElementById('breedDropdown');
    dropdown.addEventListener('change', function () {
      const selectedLetter = dropdown.value;
      const breeds = breedsList.getElementsByTagName('li');
      
      for (let breed of breeds) {
        const breedName = breed.textContent.toLowerCase();
        if (breedName.startsWith(selectedLetter)) {
          breed.style.display = 'list-item';
        } else {
          breed.style.display = 'none';
        }
      }
    });
  });
  