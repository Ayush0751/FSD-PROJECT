
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth;
  })

  preBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth;
  })
})
// Wishlist
let btnwatchlist = document.querySelector('#bookmark-button');
let watchlist = document.querySelector('#fa-watchlist');

const colors = ['white', '#0095EB'];
let index = 0;


btnwatchlist.addEventListener('click', () => watchlist.style.color = colors[index = index >= colors.length - 1 ? 0 : index + 1])
btnwatchlist.addEventListener('click', function confirmation() {
  if (index % 2 == 1) {
    alert('Added to watchlist');
  }
  else {

    alert('removed from watchlist');
  }
});
