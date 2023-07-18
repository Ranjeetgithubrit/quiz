const wrongAns = document.querySelectorAll('.box');
const rightAns = document.querySelectorAll('.rightBox');
wrongAns.forEach(item => {
    item.addEventListener('click', () => item.classList.add("wrong"));
});
rightAns.forEach(item => {
    item.addEventListener('click', () => item.classList.add("right"));
});

