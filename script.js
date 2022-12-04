const rate = document.querySelectorAll('input');
const divThanks = document.querySelector('.thanks');
const btnSubmit = document.querySelector('button');
const starSelected = document.querySelector('.selectedstar');
const rateCard = document.querySelector('.rate-card');
const label = document.querySelectorAll('label');
var stars = '';

rate.forEach((rating, index) => {
  rating.addEventListener('click', () => {
    label.forEach((labelItem) => {
      labelItem.style.background = 'rgba(124, 135, 152, .2)';
    });
    stars = rate[index].value;
    label[index].style.background = 'var(--orange-primary)';
  });
});

btnSubmit.addEventListener('click', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  if (stars) {
    starSelected.innerText = stars;
    divThanks.classList.remove('displaynone');
    rateCard.classList.add('displaynone');
  } else {
    window.alert('Select a Rating to Continue');
  }
}
