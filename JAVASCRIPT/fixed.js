(function () {

    let navbar = document.querySelector('.container');
    let main = document.querySelector('main');
    let navbarHeight = navbar.getBoundingClientRect().height;
    let breakpoint = main.offsetTop - navbarHeight;
    let windowPos;
    let isFixed = false;

    function updatePos() {
        windowPos = window.scrollY;
    }

    function onScroll() {

        updatePos();

        if (windowPos >= breakpoint && !isFixed) {
            navbar.classList.remove('open');

            navbar.classList.add('navbar-fixed');
            main.style.cssText = "margin-top: " + navbarHeight - 30 + 'px;';
            isFixed = true;

        } else if (windowPos < breakpoint && isFixed) {
            navbar.classList.remove('navbar-fixed');
            main.style.cssText = "margin-top: " + 0;
            isFixed = false;
        }
    }

    document.addEventListener('scroll', onScroll);

})()



function filterProducts(category) {
    const products = document.querySelectorAll('.product');
    const categoryButtons = document.querySelectorAll('.lista-categorias div');

    products.forEach(product => {
        if (category === 'Todo') {
            product.style.display = 'block';
        } else {
            if (product.classList.contains(category)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        }
    });

    categoryButtons.forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector(`.lista-categorias div[onclick="filterProducts('${category}')"]`).classList.add('active');
}

// Mostrar todos los productos al cargar la página
window.onload = () => filterProducts('Todo');

document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', () => {
        document.getElementById('menu').checked = false;
    });
    
});