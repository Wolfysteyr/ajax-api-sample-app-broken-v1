
let cardEl = document.getElementById("card");
let setupEl = document.getElementById("joke-part");
let punchEl = document.getElementById("joke-part punchline");
let btn = document.getElementById("newJokeBtn");

btn.addEventListener('click', loadJoke);


async function loadJoke() {
  cardEl.classList.add('hidden');

  try {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const data = await response.json();

    setupEl.innerHTML  = data.setup;
    punchEl.innerHTML  = data.punchline;
    cardEl.classList.remove('hidden');

  } catch (err) {
    console.error(err);
    '❗️ Something went wrong. Please try again.';
  }
}

