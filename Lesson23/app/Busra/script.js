

const formElement = document.querySelector('form');
const searchInput = document.getElementById('search-input');
const searchResults = document.querySelector('.search-results');
const showMoreButton = document.getElementById('show-more-button');


let inputData = "";
let page = 1;

async function searchImages(){
    inputData =searchInput.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

  

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;
        if(page ===1){
        searchResults.innerHTML = "";
    }

    results.map((result) =>{
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('search-result');
        const image = document.createElement('img');
        image.src = result.urls.small;
        image.alt = result.alt_description;

        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = '_blank';
        imageLink.textContent = result.alt_description;


        const photographer = document.createElement('p');
        const photographerLink = document.createElement('a');
        photographerLink.href = result.user.links.html;
        photographerLink.target = '_blank';
        photographerLink.textContent = `📸 ${result.user.name}`;
        photographer.appendChild(photographerLink);





        const fullScreenButtonHtml = document.querySelectorAll('.fullscreen-button');
        const fullScreenButton = document.createElement('button');
        fullScreenButton.textContent = '⛶';
        fullScreenButton.classList.add('fullscreen-button');

        

        function toggleFullScreen(){
            if (image.requestFullscreen) {
                image.requestFullscreen();
            } else if (image.webkitRequestFullscreen) {
                image.webkitRequestFullscreen();
            } else if (image.msRequestFullscreen) {
                image.msRequestFullscreen();
            }
        }

        
       fullScreenButton.addEventListener('click', toggleFullScreen);


     // Ana sayfada görünen resimlerin tam ekran olmasını sağlamak için koydum fakat neden çalışmadığını anlayamadım.Consoleda herhangi bir hata da almıyorum

     fullScreenButtonHtml.forEach((button) => {
        button.addEventListener('click', toggleFullScreen);
     });


        
        imageContainer.appendChild(image); 
        imageContainer.appendChild(fullScreenButton); 
        imageContainer.appendChild(imageLink);
        imageContainer.appendChild(photographer);
        searchResults.appendChild(imageContainer);


    });

    page++;
    if(page >1){
        showMoreButton.style.display='block';
    }  
}

formElement.addEventListener('submit', (e)=>{
    e.preventDefault();
    page = 1;
    searchImages();
    searchInput.value = "";
});  

showMoreButton.addEventListener('click', ()=>{
    searchImages();
});