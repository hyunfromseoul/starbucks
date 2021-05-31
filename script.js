const search = document.querySelector('.search'),
    searchInput = document.querySelector('.search-input'),
    coffee = document.querySelector('.nav-coffee'),
    coffeeDropDown = document.querySelector('.drop-1')


// 검색 애니메이션
search.addEventListener('click', ()=> {
    searchInput.classList.add('active')
    console.log('here')
})

coffee.addEventListener('mouseover', ()=> {
    coffeeDropDown.classList.add('active')
})

coffee.addEventListener('mouseout', ()=> {
    coffeeDropDown.classList.remove('active')
})