import { upperBodyExercises, lowerBodyExercises, fullBodyExercises } from "./exerciseArrays.js";

const mainContainer = document.getElementById("main-container");
const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");
const button3 = document.getElementById("button-3");
const returnHome = document.getElementById("return-home");

button1.addEventListener("click", () => {
    renderExercises(upperBodyExercises);
});

button2.addEventListener("click", () => {
    renderExercises(lowerBodyExercises);
});

button3.addEventListener("click", () => {
    renderExercises(fullBodyExercises);
});


function renderExercises(exercises) {
    mainContainer.innerHTML = "";

    const shuffledExercises = [...exercises];

    for (let i = shuffledExercises.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledExercises[i], shuffledExercises[j]] = [shuffledExercises[j], shuffledExercises[i]];
    }

    const selectedExercises = shuffledExercises.slice(0, 5);

    selectedExercises.forEach((exercise) => {
        const exerciseDiv = document.createElement("div");

        exerciseDiv.classList.add ("card", "mb-5", "mx-auto");
        mainContainer.appendChild(exerciseDiv);
        exerciseDiv.innerHTML = `
        <div class="card w-100 p-2 text-bg-dark">
            <div class="embed-responsive">
                <iframe class="embed-responsive-item w-100" src="${exercise.link}" allowfullscreen></iframe>
            </div>

            <div class="card-body text-center">
                <h5 class="card-title">${exercise.name}</h5>
                <p class="card-text">Sets: 3 Reps: 10</p>
            </div>
        </div>`

    });

    mainContainer.innerHTML += `
        <ul class="nav nav-pills justify-content-center">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href=".">Return Home</a>
            </li>
        </ul>
    `
}

