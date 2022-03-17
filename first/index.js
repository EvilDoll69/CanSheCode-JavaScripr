const btn = document.querySelector('button');

btn.addEventListener('mouseover', function() {
  const hello = document.querySelector('h2');
  // hello.innerHTML = "Good day!";
  hello.classList.toggle("click-style");
})

document.addEventListener("keydown", function(e) {
  if (e.key === "a") {
    document.body.style.backgroundColor = "#00C897";
  } else if (e.key === "b") {
    document.body.style.backgroundColor = "#FF1818";
  } else if (e.key === "t") {
    document.body.style.backgroundColor = "#6EBF8B"
  } else {
    document.body.style.backgroundColor = "#CDB699"
  }
})