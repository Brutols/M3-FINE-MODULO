const films = [
  {
    title: "Inception",
    genre: "Science Fiction",
    length: 148,
    image: "./assets/1.png",
  },
  {
    title: "The Shawshank Redemption",
    genre: "Drama",
    length: 142,
    image: "./assets/2.png",
  },
  {
    title: "The Dark Knight",
    genre: "Action",
    length: 152,
    image: "./assets/3.png",
  },
  {
    title: "Pulp Fiction",
    genre: "Crime",
    length: 154,
    image: "./assets/4.png",
  },
  {
    title: "Forrest Gump",
    genre: "Drama",
    length: 142,
    image: "./assets/5.png",
  },
  {
    title: "The Matrix",
    genre: "Science Fiction",
    length: 136,
    image: "./assets/6.png",
  },
  {
    title: "Titanic",
    genre: "Romance",
    length: 195,
    image: "./assets/7.png",
  },
  {
    title: "Jurassic Park",
    genre: "Adventure",
    length: 127,
    image: "./assets/8.png",
  },
  {
    title: "The Godfather",
    genre: "Crime",
    length: 175,
    image: "./assets/9.png",
  },
  {
    title: "Avatar",
    genre: "Science Fiction",
    length: 162,
    image: "./assets/10.png",
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    genre: "Fantasy",
    length: 178,
    image: "./assets/11.png",
  },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    genre: "Romance",
    length: 108,
    image: "./assets/12.png",
  },
  {
    title: "The Silence of the Lambs",
    genre: "Thriller",
    length: 118,
    image: "./assets/13.png",
  },
  {
    title: "The Social Network",
    genre: "Drama",
    length: 120,
    image: "./assets/14.png",
  },
  {
    title: "Inglourious Basterds",
    genre: "War",
    length: 153,
    image: "./assets/15.png",
  },
  {
    title: "The Shawshank Redemption",
    genre: "Drama",
    length: 142,
    image: "./assets/16.png",
  },
  {
    title: "Interstellar",
    genre: "Science Fiction",
    length: 169,
    image: "./assets/17.png",
  },
  {
    title: "The Grand Budapest Hotel",
    genre: "Comedy",
    length: 100,
    image: "./assets/18.png",
  },
];

let cardPerItem = 6;
let carouselNumber = document.querySelectorAll(".carousel");
console.log(carouselNumber);
let start = 0;
let end = start + (cardPerItem - 1);
console.log(start);
console.log(end);

let createCard = function (start, end) {
  let cardsHTML = "";
  for (let i = start; i <= end; i++) {
    cardsHTML += `
    <div class="filmCard d-flex flex-column col-2">
    <img src="${films[i].image}" alt="film-img" class="w-100" />
    <div class="filmInfo">
      <div class="filmButtons d-flex justify-content-between">
        <div class="mainIcons">
          <ion-icon name="play" id="play"></ion-icon>
          <ion-icon name="add"></ion-icon>
          <ion-icon name="thumbs-up"></ion-icon>
        </div>
        <ion-icon name="chevron-down"></ion-icon>
      </div>
      <div class="filmDescription d-flex align-items-center gap-3">
        <p class="filmTitle text-truncate m-0">${films[i].title}</p>
        <p class="filmLenght m-0">${films[i].length}min</p>
      </div>
      <div class="genre">${films[i].genre}</div>
    </div>
  </div>    
    `;
  }
  return cardsHTML;
};

let populateCarousel = function () {
  for (let i = 0; i < carouselNumber.length; i++) {
    cardsHTML = createCard(start, end);
    console.log(cardsHTML);
    carouselNumber[i].children[0].innerHTML = `
    <div class="carousel-item active">
      <div class="row">
        ${cardsHTML}
      </div>
    </div>
    <div class="carousel-item">
      <div class="row">
        ${cardsHTML}
      </div>
    </div>
    <div class="carousel-item">
      <div class="row">
        ${cardsHTML}
      </div>
    </div>
    `;
    start += cardPerItem;
    end = start + (cardPerItem - 1);
    console.log(start);
  }
};

populateCarousel();

let carouselControlsNext = document.querySelectorAll(".carousel-control-next");
let carouselControlsPrev = document.querySelectorAll(".carousel-control-prev");

for (let i = 0; i < carouselControlsPrev.length; i++) {
  carouselControlsPrev[i].classList.add("visibilityHidden")
}

const handleControls = function (ev) {
  let control = ev.target.closest(".carousel-control-next")
  let controlsArray = Array.from(carouselControlsNext);
  let controlIndex = controlsArray.indexOf(control);
  carouselControlsPrev[controlIndex].classList.replace("visibilityHidden", "visibilityVisible")
};

for (let i = 0; i < carouselControlsNext.length; i++) {
  carouselControlsNext[i].onclick = handleControls;
}

let dropdownValues = document.querySelectorAll(".jumboMain .dropdown-item")
let main = document.querySelector(".main")
let mainSearch = document.querySelector(".mainSearch")

let search = function (searchEv) {
  main.classList.add("d-none")
  mainSearch.classList.replace("d-none", "row")
  mainSearch.innerHTML = `
    <h3>${searchEv.target.innerHTML}</h3>
  `
  for (let i = 0; i < films.length; i++) {
    if (searchEv.target.innerHTML.toLowerCase() === films[i].genre.toLowerCase()) {
      mainSearch.innerHTML += `
      <div class="filmCard d-flex flex-column col-2">
      <img src="${films[i].image}" alt="film-img" class="w-100" />
      <div class="filmInfo">
        <div class="filmButtons d-flex justify-content-between">
          <div class="mainIcons">
            <ion-icon name="play" id="play"></ion-icon>
            <ion-icon name="add"></ion-icon>
            <ion-icon name="thumbs-up"></ion-icon>
          </div>
          <ion-icon name="chevron-down"></ion-icon>
        </div>
        <div class="filmDescription d-flex align-items-center gap-3">
          <p class="filmTitle text-truncate m-0">${films[i].title}</p>
          <p class="filmLenght m-0">${films[i].length}min</p>
        </div>
        <div class="genre">${films[i].genre}</div>
      </div>
    </div>
      `
    }
  }
}

for (let i = 0; i < dropdownValues.length; i++) {
  dropdownValues[i].onclick = search;
}

let showHome = function () {
  main.classList.replace("d-none", "d-block")
  mainSearch.classList.replace("row", "d-none")
}

let scrollNav = function () {
  let nav = document.querySelector(".navContainer")
  if (scrollY > 30) {
    nav.classList.replace( "navBackground", "changeBackground")
  } else {
    nav.classList.replace("changeBackground", "navBackground")
  }
}

window.onscroll = setInterval(scrollNav, 100);