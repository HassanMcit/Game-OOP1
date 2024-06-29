import { Detalis } from "./details.js";

let row = document.getElementById("row");
let spinner = document.getElementById("spinner");
let home = document.getElementById("home");
let idClicked;
let detail;

export class DisplayData {
    constructor() {
    }
    display(result) {
        let box = "";
        result.map((e) => {
            box += `
                <div class="col-12 col-md-6 col-lg-3 h-25">
                    <div class="inner border border-2 border-secondary rounded-3 p-3 card-press" id=${e.id}>
                        <div class="card bg-transparent border-0">
                            <img src="${e.thumbnail}" class="card-img-top" alt="${e.title}" />
                            <div class="card-body text-white px-0">
                                <div class="d-flex align-items-center mx-0 justify-content-between">
                                    <h5 class="card-title fs-6">${e.title.split(" ").splice(0, 2).join(" ")}</h5>
                                    <button type="button" class="btn btn-primary fw-bolder fs-6 py-1 px-1">Free</button>
                                </div>
                                <p class="card-text text-center mt-3 " style="height: 80px;">
                                    ${e.short_description.split(" ").splice(0, 8).join(" ")}
                                </p>
                            </div>
                        </div>
                        <div class="border-top border-1 border-secondary text-white d-flex justify-content-between px-2">
                            <p class=" m-0 font-size-14 bg-secondary bg-opacity-25 px-1 py-1 my-2 fw-bolder rounded-3 ">${e.genre}</p>
                            <p class=" m-0 font-size-14 bg-secondary bg-opacity-25 px-1 ms-3 py-1 my-2 fw-bolder rounded-3 ">${e.platform}</p>
                        </div>
                    </div>
                </div>`
        })
        spinner.classList.add("d-none");
        row.classList.remove("d-none");
        row.innerHTML = box;
        let card = Array.from(document.querySelectorAll(".card-press"));
        card.map((e) => {
            e.addEventListener("click", (ele) => {
                ele.stopPropagation();
                idClicked = e.id;
                detail = new Detalis();
                spinner.classList.remove("d-none");
                detail.getDetails(idClicked);
            });
        });
    }
}
