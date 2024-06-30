
let details = document.getElementById("details");

export class Detalis {
   constructor() {
   }
   async getDetails(id) {
      document.querySelector(".home-section").classList.add("d-none");
      spinner.classList.remove("d-none");
      const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
      const options = {
         method: 'GET',
         headers: {
            'x-rapidapi-key': 'e910c7b913mshd4fbf8c6cbc4e67p1afe9djsn514bdaf14f92',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
         }
      };

      try {
         const response = await fetch(url, options);
         const result = await response.json();
         spinner.classList.add("d-none");
         // console.log(result);
         this.displayDetails(result);
      } catch (error) {
         console.error(error);
      }
   }
   displayDetails(result) {
      details.classList.remove("d-none");
      let box = `
            <div class="d-flex justify-content-between align-items-center my-3">
                <h2 class="h1">Details Game</h2>
                <img src="image/download (1).svg" alt="close" class="p-2 bg-white rounded-3" width="30" height="30" id="close"/>
            </div>
            <div class="row g-4">
            <div class="col-12 col-md-4">
                <div class="data-image">
                <img src="${result.thumbnail}" alt="${result.title}" class="img-fluid"/>
                </div>
            </div>
            <div class="col-12 col-md-8">
                <div class="data">
                <h3>Title: ${result.title}</h3>
                <h5 class="my-4">Category: <span class="px-1 rounded-3 ms-1 font-size-18">${result.genre}</span></h5>
                <h5 class="my-4">Platform: <span class="px-1 rounded-3 ms-1 font-size-18">${result.platform}</span></h5>
                <h5 class="my-4">Status: <span class="px-1 rounded-3 ms-1 font-size-18">${result.status}</span></h5>
                <P class="font-size-18">${result.description}</P>
                    <a href="${result.game_url}" class="btn btn-outline-warning mb-4 text-white fw-semibold">Show Game</a>
                </div>
            </div>
            </div>`;
      details.innerHTML = box;
      let close = document.getElementById("close");
      close.addEventListener('click', function (e) {
         e.stopPropagation();
         document.querySelector(".home-section").classList.remove("d-none");
         details.classList.add("d-none");
      });
   }
}