// Hamburger Menu-Dropdown
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

document.addEventListener("DOMContentLoaded", function () {
    function DigitalClock() {
        var date = new Date();
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();

        h = h < 10 ? "0" + h : h;
        m = m < 10 ? "0" + m : m;
        s = s < 10 ? "0" + s : s;

        var time = h + ":" + m + ":" + s;

        var clockDisplay = document.getElementById("Clock_Display");
        if (clockDisplay) {
            clockDisplay.innerText = time;
            clockDisplay.textContent = time;
        }

        setTimeout(DigitalClock, 1000);
    }

    DigitalClock();
});

// Dynamically generate star ratings

let formData = {};

function createStars() {
    document.querySelectorAll('.stars').forEach((starContainer) => {
        for (let i = 1; i <= 10; i++) {
            const star = document.createElement('span');
            star.classList.add('fa', 'fa-star');
            star.dataset.value = i;
            star.addEventListener('click', function () {
                updateStars(starContainer, i);
            });
            starContainer.appendChild(star);
        }
    });
}

function updateStars(container, value) {
    container.querySelectorAll('.fa-star').forEach((star) => {
        star.classList.toggle('selected', star.dataset.value <= value);
    });
    container.dataset.rating = value;
}

function saveData() {
    const form = document.getElementById('form');
    const data = {
        firstName: form.querySelector('#input-name').value,
        lastName: form.querySelector('#input-surname').value,
        email: form.querySelector('#input-email').value,
        phone: form.querySelector('#input-tel').value,
        address: form.querySelector('#input-address').value,
    };

    if (!data.firstName || !data.lastName || !data.email || !data.phone || !data.address) {
        alert('Please fill in all the fields.');
        return;
    }

    if (!validateEmail(data.email)) {
        alert('Invalid email address!');
        return;
    }
    if (!validatePhone(data.phone)) {
        alert('Invalid phone number!');
        return;
    }
    if (data.address.trim() === '') {
        alert('Address cannot be empty!');
        return;
    }

    const questions = ['Question_1', 'Question_2', 'Question_3', 'Question_4', 'Question_5'];
    const scores = questions.map((q) => {
        const container = document.querySelector(`.stars[data-question="${q}"]`);
        return Number(container.dataset.rating || 0);
    });

    if (scores.includes(0)) {
        alert('Please rate all aspects of the website.');
        return;
    }

    formData = {
        ...data,
        ratings: questions.reduce((acc, q, i) => {
            acc[q] = scores[i];
            return acc;
        }, {}),
        averageScore: (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(2)
    };

    displayOutput(formData);
}

function displayOutput(data) {
    const outputDiv = document.getElementById('output');
    let averageScoreClass = 'red';
    if (data.averageScore > 4 && data.averageScore <= 7) {
        averageScoreClass = 'orange';
    }
    else if (data.averageScore > 7) {
        averageScoreClass = "green";
    }

    outputDiv.innerHTML = `
        <p><strong>Name:</strong> ${data.firstName}</p>
        <p><strong>Surname:</strong> ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Address:</strong> ${data.address}</p>
        ${Object.keys(data.ratings).map((q) => `<p><strong>${q.replace('_', ' ')}:</strong> ${data.ratings[q]}</p>`).join('')}
        <p><strong>${data.firstName} ${data.lastName} (${data.email}):</strong> <span class="${averageScoreClass}">${data.averageScore}</span></p>
    `;
    console.log(data);
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^\+?[0-9]{7,15}$/;
    return re.test(phone);
}

document.addEventListener('DOMContentLoaded', () => {
    createStars();
});


