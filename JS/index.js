const ratingList = document.querySelectorAll('.rating-list li');
ratingList.forEach(item => {
    item.addEventListener('click', () => {
        ratingList.forEach(li => li.classList.remove('active'));
        item.classList.add('active');
    })

    if(item.classList.contains('active')) {
        item.style.backgroundColor = 'var(--white)';
        item.style.color = 'var(--grey-950)';
    }
})

const buttonSubmit = document.querySelector('.buttonSubmit');
buttonSubmit.addEventListener('click', () =>{
    const selectedRating = document.querySelector('.rating-list li.active');
    if(selectedRating) {
        document.getElementById('ratingValue').textContent = selectedRating.textContent;
        document.querySelector('.container').style.display = 'none';
        document.querySelector('.thank-you-state').style.display = 'flex';

    }
}) 

