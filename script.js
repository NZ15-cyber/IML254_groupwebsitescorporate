const figures = document.querySelectorAll('.gallery-section figure img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

figures.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.style.display = 'flex';
  });
});


lightbox.addEventListener('click', (e) => {
  if (e.target !== lightboxImg) {
    lightbox.style.display = 'none';
  }
});


const quotes = [ 
  "“We don’t just cater — we create memories that last.”",
  "“Your story deserves a beautiful meal.”",
  "“Love is sweet — so is our dessert table!”",
  "“Great food, great memories, great prices.”",
  "“Crafting happiness, one dish at a time.”"
];

const quoteBox = document.getElementById("quoteBox");

function rotateQuote() {
  quoteBox.classList.add("fade-out");
  
  setTimeout(() => {
    const newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteBox.textContent = newQuote;
    quoteBox.classList.remove("fade-out");
    quoteBox.classList.add("fade-in");
  }, 500);

  setTimeout(() => {
    quoteBox.classList.remove("fade-in");
  }, 1000);
}

rotateQuote();
setInterval(rotateQuote, 3000);

function showGreeting() {
  const greeting = document.getElementById("greeting");
  greeting.textContent = "Thank you for considering RAHMAH Wedding Catering 💖";
  greeting.classList.add("show-greeting");
}


