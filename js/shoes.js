function showHeader()
{
    const header = document.getElementById('header');
    header.classList.add('header');
    header.innerHTML = `
        <h1>Shoes-Kart</h1>
        <p>Every Step Matters...</p>
    `;
}

function showFooter()
{
    const footer = document.getElementById('footer');
    footer.classList.add('footer');
    footer.innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <h5>Shoes-Kart</h5>
                    <p>Every Step Matters...</p>
                    <div class="social-icons">
                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-twitter"></i>
                        <i class="bi bi-instagram"></i>
                        <i class="bi bi-linkedin"></i>
                    </div>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h5>Quick Links</h5>
                    <ul class="list-unstyled">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="mens.html">Mens</a></li>
                        <li><a href="womens.html">Womens</a></li>
                        <li><a href="kids.html">Kids</a></li>
                        <li><a href="shoeSize.html">Shoe Size</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h5>Customer Service</h5>
                    <ul class="list-unstyled">
                        <li><a href="faqs.html">FAQs</a></li>
                        <li><a href="returnPolicy.html">Return Policy</a></li>
                    </ul>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h5>Newsletter</h5>
                    <p>Subscribe to our newsletter for the latest updates.</p>
                    <form onsubmit="subscribe(event)">
                        <div class="input-group">
                            <input id="subscribe-email" type="email" class="form-control" placeholder="Enter your email">
                            <button id="subscribe-button" class="btn btn-dark" type="submit">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-lg-4 col-md-6">
                    <h5>Contact Us</h5>
                    <ul class="list-unstyled contact-info">
                        <li><i class="bi bi-geo-alt"></i> 123 Shoe Street, Fashion City</li>
                        <li><i class="bi bi-telephone"></i> +1 234 567 890</li>
                        <li><i class="bi bi-envelope"></i> support@shoeskart.com</li>
                    </ul>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h5>About Us</h5>
                    <p>Shoes-Kart is your go-to destination for the latest in shoe fashion and trends. From casual wear to formal footwear, we've got you covered with the best selections.</p>
                </div>
            </div>
        </div>
    `;
}

function showNavbar()
{
    const navbar = document.getElementById('navbar');
    navbar.classList.add('navbar', 'navbar-expand-lg', 'bg-white', 'sticky-top', 'border-bottom', 'border-1', 'border-dark');
    navbar.innerHTML = `
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="navbar-brand" href="index.html">Shoes-Kart</a>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="mens.html">Mens</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="womens.html">Womens</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="kids.html">Kids</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="shoeSize.html">Shoe Size</a>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="wishlist.html">Wishlist <i class="bi bi-heart"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="cart.html">Cart <i class="bi bi-cart"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" onclick="openAccount()">Account <i class="bi bi-person-circle"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    `;
}

function subscribe(event)
{
    event.preventDefault();

    const email = document.getElementById('subscribe-email').value;

    if (isValidEmail(email))
    {
        const emails = JSON.parse(localStorage.getItem('emails')) || [];

        user = {
            email : email
        }

        if (emails.some(item => item.email === email))
        {
            alert("You have already subscribed!");
        }
        else
        {
            emails.push(user);
            localStorage.setItem('emails', JSON.stringify(emails));
            alert("Subscribed successfully!");
        }
    }
    else
    {
        alert("Please enter a valid email address.");
    }

    document.getElementById('subscribe-email').value = "";
}

function isValidEmail(email)
{
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}