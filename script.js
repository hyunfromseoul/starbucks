const search = document.querySelector('.search'),
    searchInput = document.querySelector('.search-input'),
    dropdownContainer = document.querySelector('.dropdown-container'),
    coffee = document.querySelector('.nav-coffee'),
    coffeeDropdown = document.querySelector('.drop-1'),
    menu = document.querySelector('.nav-menu'),
    menuDropdown = document.querySelector('.drop-2')


// 검색 이벤트리스너
search.addEventListener('click', ()=> {
    searchInput.classList.add('active')
})


// dropdown 이벤트리스너
coffee.addEventListener('mouseenter', ()=> {
    // 다른 dropdown active를 지움
    menuDropdown.classList.remove('active')

    coffeeDropdown.classList.add('active')
})
coffeeDropdown.addEventListener('mouseleave', ()=> {
    coffeeDropdown.classList.remove('active')
})

menu.addEventListener('mouseenter', ()=> {
    // 다른 dropdown active를 지움
    coffeeDropdown.classList.remove('active')

    menuDropdown.classList.add('active')
})
menuDropdown.addEventListener('mouseleave', ()=> {
    menuDropdown.classList.remove('active')
})