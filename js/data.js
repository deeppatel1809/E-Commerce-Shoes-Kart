function productModal(element)
{
    let products = JSON.parse(localStorage.getItem('products')) || [];

    const card = element.querySelector('.card');
    const pid = card.querySelector('#product-img').alt;
    
    let product = products.find(item => item.pid === pid);
    const modalImage = document.getElementById('img');
    const modalName = document.getElementById('name');
    const modalDescription = document.getElementById('desc');
    const modalOfferPrice = document.getElementById('offer-price');
    const modalPrice = document.getElementById('price');
    const modalCategory = document.getElementById('category');
    const modalMaterial = document.getElementById('material');
    const modalBrand = document.getElementById('brand');
    const modalRating = document.getElementById('rating');


    modalImage.alt = product.pid;
    modalImage.src = product.img;
    modalName.textContent = product.name;
    modalDescription.textContent = product.description;
    modalOfferPrice.innerHTML = `<i class="bi bi-currency-rupee"></i>${product.offerPrice}`;
    modalPrice.innerHTML = `<del><i class="bi bi-currency-rupee"></i>${product.price}</del>`;
    modalCategory.innerHTML = `<b>Category :</b> ${product.category}`;
    modalMaterial.innerHTML = `<b>Material :</b> ${product.material}`;
    modalBrand.innerHTML = `<b>Brand :</b> ${product.brand}`;
    modalRating.innerHTML = `<b>Rating :</b> ${product.rating}`;

    const wishlistButton = document.getElementById('wishlist-button');
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const currentUser = JSON.parse(localStorage.getItem('loginUser'));
    let user;

    if (currentUser)
    {
        user = users.find(item => item.login.email === currentUser.email || item.login.phone === currentUser.phone);
        const isInWishlist = user.wishlist.some(item => item.pid === pid);

        if (isInWishlist)
        {
            wishlistButton.textContent = "Remove From Wishlist";
            wishlistButton.classList.remove('btn-dark');
            wishlistButton.classList.add('btn-danger');
        }
        else
        {
            wishlistButton.textContent = "Add To Wishlist";
            wishlistButton.classList.remove('btn-danger');
            wishlistButton.classList.add('btn-dark');
        }
    }
}

function cart(element)
{
    const modal = element.closest('.modal');
    const pid = modal.querySelector('#img').alt;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const currentUser = JSON.parse(localStorage.getItem('loginUser'));
    let user;

    if (currentUser)
    {
        user = users.find(item => item.login.email === currentUser.email || item.login.phone === currentUser.phone);

        const sizeSelected = document.querySelector('input[name="msize"]:checked');

        if (sizeSelected)
        {
            const size = parseInt(sizeSelected.value);
            const id = user.cart.length + 1;

            const product = {
                id: id,
                pid: pid,
                size: size,
                quantity: 1
            };

            if (user.cart.some(item => item.pid === pid))
            {
                const item = user.cart.find(item => item.pid === pid);
                if(item.size==size)
                {
                    item.quantity++;
                }
                else
                {
                    user.cart.push(product);
                }
            }
            else
            {
                user.cart.push(product);
            }
            localStorage.setItem('users', JSON.stringify(users));
            alert("Added to cart");
        }
        else
        {
            alert("Please select a size");
        }
    }
    else
    {
        alert("Please log in first.");
        setTimeout(function() {
            window.location.href = "login.html";
        }, 1000);
    }
}

function wishlist(element)
{
    const modal = element.closest('.modal');
    const pid = modal.querySelector('#img').alt;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const currentUser = JSON.parse(localStorage.getItem('loginUser'));
    let user;

    if (currentUser)
    {
        user = users.find(item => item.login.email === currentUser.email || item.login.phone === currentUser.phone);

        if (element.textContent === "Add To Wishlist")
        {
            const product = {
                pid: pid
            };
    
            user.wishlist.push(product);
            localStorage.setItem('users', JSON.stringify(users));
            element.textContent = "Remove From Wishlist";
            element.classList.remove('btn-dark');
            element.classList.add('btn-danger');
            alert("Added to wishlist");
        }
        else
        {
            user.wishlist = user.wishlist.filter(item => item.pid !== pid);
            localStorage.setItem('users', JSON.stringify(users));
            element.textContent = "Add To Wishlist";
            element.classList.remove('btn-danger');
            element.classList.add('btn-dark');
            alert("Removed From wishlist");
            if (document.title === "Wishlist")
            {
                location.reload();
            }
        }
    }
    else
    {
        alert("Please log in first.");
        setTimeout(function() {
            window.location.href = "login.html";
        }, 1000);
    }
}