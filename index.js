const movies = [
  {
    id: 1,
    title: "Yeh Jawani Hai Deewani",
    image:
      "https://www.sbs.com.au/movies/sites/sbs.com.au.film/files/styles/full/public/images/8/3/8335_yeh-jawaani-hai-deewani-640.jpg?itok=HaWNW9Ok",
  },
  {
    id: 2,
    title: "Green mile",
    image:
      "https://m.media-amazon.com/images/M/MV5BYzA4ZWRhNjktMTA3ZS00NDNiLThmMDMtNzdlYzk0ZjY2ZGFmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
  },
  {
    id: 3,
    title: "The usual suspect",
    image:
      "https://faroutmagazine.co.uk/static/uploads/2021/08/The-puerile-truth-in-the-most-famous-scene-during-The-Usual-Suspects.jpg",
  },
  {
    id: 4,
    title: "Grave of the fireflies",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjE3MzkwMTM4MV5BMl5BanBnXkFtZTcwMDg5MDI2NQ@@._V1_.jpg",
  },
  {
    id: 5,
    title: "3 idiots",
    image:
      "https://stat4.bollywoodhungama.in/wp-content/uploads/2016/05/439558136.jpg",
  },
  {
    id: 6,
    title: "The Graduate",
    image:
      "https://www.sensesofcinema.com/wp-content/uploads/2017/03/1967-The-Graduate-750x400.jpg",
  },
];

const cardCol = document.querySelector(".card-col");
const btn = document.getElementById("btn");
const modal1 = document.querySelector(".modal-body");

function generateHTML(obj) {
  return `<div class="card" style="width: 18rem padding:20px margin-bottom:10px">
  <img
    class="card-img-top"
    src="${obj.image}"
    alt=""
  />
  <div class="card-body">
    <h5 class="card-title">${obj.title}</h5>
  </div>
</div>`;
}
window.addEventListener("DOMContentLoaded", function () {
  let combined = movies.map(function (item) {
    return generateHTML(item);
  });
  combined = combined.join("");
  console.log(combined);
  modal1.innerHTML = combined;
});
