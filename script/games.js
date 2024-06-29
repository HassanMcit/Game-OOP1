import { DisplayData } from "./ui.js";

let lists = document.querySelectorAll(".navbar-nav .nav-item");
let row = document.getElementById("row");
let home = document.getElementById("home");
let spinner = document.getElementById("spinner");
let ui;


export class Getdata {
    constructor(cat) {
        ui = new DisplayData();
        lists.forEach((list) => {
            list.addEventListener("click", (e) => {
                this.getAPI(e.target.dataset.category);
            });
        });
        this.getAPI(cat);
    }
    async getAPI(cat) {
        row.classList.add("d-none");
        home.classList.add("d-none");
        spinner.classList.remove("d-none");
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`;
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
            home.classList.remove("d-none");
            ui.display(result)
        } catch (error) {
            console.error(error);
        }
    }
}