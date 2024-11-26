function toggleDropdown() {
    document.getElementById('dropdownMenu').classList.toggle('show');
}

// Close the dropdown when clicking outside of it
window.onclick = function(event) {
    if (!event.target.matches('.menu-icon')) {
        const dropdowns = document.getElementsByClassName("dropdown-menu");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Close the dropdown when clicking on a menu item
document.querySelectorAll('.dropdown-menu li a').forEach(item => {
    item.addEventListener('click', () => {
        document.getElementById('dropdownMenu').classList.remove('show');
    });
});

function darkmode(){
    var element = document.body;
    element.classList.toggle("dark-mode")
}

// JavaScript for filtering images in the portfolio
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filter-btn');
    const images = document.querySelectorAll('#portfolio .col-lg-4');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            images.forEach(image => {
                if (filter === 'all') {
                    image.classList.remove('hidden');
                } else if (image.querySelector(`#${filter}`)) {
                    image.classList.remove('hidden');
                } else {
                    image.classList.add('hidden');
                }
            });

            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
});

//JavaScript for scroll-top2bottom

document.addEventListener('DOMContentLoaded', function() {
    const myButton = document.querySelector(".scroll-to-top");

    if (myButton) {
        window.addEventListener('scroll', function() {
            if (window.scrollY <= 10) {
                myButton.style.display = "none";
            } else {
                myButton.style.display = "block";
            }
        });

        myButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        myButton.style.display = "none";
    } else {
        console.error('Scroll-to-top button not found.');
    }
});

