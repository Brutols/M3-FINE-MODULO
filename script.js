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

let carouselTitles = ["Trending Now", "Watch It Again", "New Releases"];

let showCarousel = function () {
  let main = document.querySelector(".main");
  for (let i = 0; i < carouselTitles.length; i++) {
    main.innerHTML += `
    <h2>${carouselTitles[i]}</h2>
    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
        <div class="row"></row>
        </div>
        <div class="carousel-item">
        <div class="row"></row>
        </div>
        <div class="carousel-item">
        <div class="row"></row>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
    `;
  }
};

showCarousel();
