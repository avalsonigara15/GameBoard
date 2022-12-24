let countsc = document.getElementById("home-sc");
let count = 0;

function add1() {
  count += 1;
  countsc.innerText = count;
}
function add2() {
  count += 2;
  countsc.innerText = count;
}
function add3() {
  count += 3;
  countsc.innerText = count;
}
function reset() {
  count = 0;
  countsc.textContent = count;
}

let guest = document.getElementById("guest-sc");
let countg = 0;
function addg1() {
  countg += 1;
  guest.textContent = countg;
}
function addg2() {
  countg += 2;
  guest.textContent = countg;
}
function addg3() {
  countg += 3;
  guest.textContent = countg;
}
function reset1() {
  countg = 0;
  guest.textContent = countg;
}
