let showedProducts;
let showedProductsGender;

function showProductsContainer()
{
    const shoesContainer = document.getElementById('shoes-container');
    shoesContainer.classList.add('container');
    shoesContainer.innerHTML = `
        <h2 id="heading" class="text-center mt-4 mb-4"></h2>
        <div class="d-flex mx-2 mb-4">
            <div class="me-auto">
                <button class="btn border border-1 border-dark" onclick="openFilter()">Filter <i class="bi bi-sliders2"></i></button>
            </div>
            <div class="w-25 me-3">
                <input type="text" id="search-item" class="form-control" placeholder="Search" onkeydown="handleSearchKey(event)">
            </div>
            <div>
                <div class="dropdown">
                    <button class="btn border border-1 border-dark dropdown-toggle" data-bs-toggle="dropdown">Sort By <i class="bi bi-chevron-down"></i></button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" onclick="sortByPrice('LH')">Price Low to High</a></li>
                        <li><a class="dropdown-item" onclick="sortByPrice('HL')">Price High to Low</a></li>
                        <li><a class="dropdown-item" onclick="sortByDiscount('LH')">Discount Low to High</a></li>
                        <li><a class="dropdown-item" onclick="sortByDiscount('HL')">Discount High to Low</a></li>
                        <li><a class="dropdown-item" onclick="sortByRating('LH')">Rating Low to High</a></li>
                        <li><a class="dropdown-item" onclick="sortByRating('HL')">Rating High to Low</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="mb-4" id="shoes">
        </div>
        <div class="modal modal-xl" id="productModal" data-bs-backdrop="static">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-lg-6">
                                <img src="" class="card-img-left img-fluid" alt="" id="img">
                            </div>
                            <div class="col-lg-6">
                                <div class="row mt-2">
                                    <div class="col">
                                        <h2 id="name" class="fw-bold h2"></h2>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <p id="desc"></p>
                                    </div>
                                </div>
                                <div class="row mb-2">
                                    <div class="col mb-0">
                                        <div class="d-flex flex-row">
                                            <div>
                                                <h5 id="offer-price" class="fw-bold mb-0 h5"></h5>
                                            </div>
                                            <div>
                                                <p id="price" class="mt-1 mb-0" style="font-size: 14px;"></p>
                                            </div>
                                        </div>
                                        <p>(inclusive of all taxes)</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <p id="category"></p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <p id="material"></p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <p id="brand"></p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <p id="rating"></p>
                                    </div>
                                </div>
                                <div class="row-12 mb-2">
                                    <div class="col">
                                        <p class="fw-bold">Sizes</p>
                                    </div>
                                </div>
                                <div class="row mb-2">
                                    <div class="col-4 col-xl-2 m-0 p-0">
                                        <div class="form-check form-check-inline">
                                            <input class="btn-check" type="radio" value="6" name="msize" id="1">
                                            <label class="btn btn-outline-dark mb-3" for="1">6</label>
                                        </div>
                                    </div>
                                    <div class="col-4 col-xl-2 m-0 p-0">
                                        <div class="form-check form-check-inline">
                                            <input class="btn-check" type="radio" value="7" name="msize" id="2">
                                            <label class="btn btn-outline-dark mb-3" for="2">7</label>
                                        </div>
                                    </div>
                                    <div class="col-4 col-xl-2 m-0 p-0">
                                        <div class="form-check form-check-inline">
                                            <input class="btn-check" type="radio" value="8" name="msize" id="3">
                                            <label class="btn btn-outline-dark mb-3" for="3">8</label>
                                        </div>
                                    </div>
                                    <div class="col-4 col-xl-2 m-0 p-0">
                                        <div class="form-check form-check-inline">
                                            <input class="btn-check" type="radio" value="9" name="msize" id="4">
                                            <label class="btn btn-outline-dark mb-3" for="4">9</label>
                                        </div>
                                    </div>
                                    <div class="col-4 col-xl-2 m-0 p-0">
                                        <div class="form-check form-check-inline">
                                            <input class="btn-check" type="radio" value="10" name="msize" id="5">
                                            <label class="btn btn-outline-dark mb-3" for="5">10</label>
                                        </div>
                                    </div>
                                    <div class="col-4 col-xl-2 m-0 p-0">
                                        <div class="form-check form-check-inline">
                                            <input class="btn-check" type="radio" value="11" name="msize" id="6">
                                            <label class="btn btn-outline-dark mb-3" for="6">11</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-4">
                                    <div class="col">
                                        <a class="text-black" href="shoeSize.html">Size guide</a>
                                    </div>
                                </div>
                                <div class="row mb-2">
                                    <div class="col d-grid text-center">
                                        <button id="cart-button" class="btn btn-dark" onclick="cart(this)">Add To Cart</button>
                                    </div>
                                </div>
                                <div class="row mb-2">
                                    <div class="col d-grid text-center">
                                        <button id="wishlist-button" class="btn btn-dark" onclick="wishlist(this)">Add To Wishlist</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function showProducts(products)
{
    const shoes = document.getElementById('shoes');
    shoes.innerHTML = ""; 
    
    if (products.length === 0)
    {
        shoes.innerHTML = `
            <div class="container border border-1 border-dark rounded p-4">
                <p class="text-center m-0" style="font-size:24px;">No Products found.</p>
            </div>
        `;
    }
    else
    {
        let rowContainer = document.createElement('div');
        rowContainer.classList.add('row');

        products.forEach((product) => {
            
            const shoeItem = document.createElement('div');
            shoeItem.classList.add('col-6','col-md-4','col-lg-3');
            
            shoeItem.innerHTML = `
                <a href="#productModal" class="text-decoration-none" data-bs-toggle="modal" onclick=productModal(this)>
                    <div class="card mx-sm-1 my-2">
                        <img src="${product.img}" class="card-img-top" alt="${product.pid}" id="product-img">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-12">
                                    <p class="card-title fw-bold">${product.name}</p>
                                </div>
                                <div class="col-12">
                                    <p class="card-text text-danger mb-0"><i class="bi bi-currency-rupee"></i>${product.offerPrice}</p>
                                    <p class="card-text mb-0" style="font-size: 14px;"><del><i class="bi bi-currency-rupee"></i>${product.price}</del></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            `;
            rowContainer.appendChild(shoeItem);
        });
        shoes.appendChild(rowContainer);
    }

    showedProducts = products;
}

function setGender(gender)
{
    showedProductsGender = gender;
}

function handleSearchKey(event)
{
    if (event.key === 'Enter')
    {
        search();
    }
}

function search()
{
    const searchItem = document.getElementById('search-item').value.toLowerCase().split(' ');

    let products = JSON.parse(localStorage.getItem('products')) || [];

    if (showedProductsGender)
    {
        products = products.filter(item => item.gender === showedProductsGender);
    }

    let products1 = [];

    searchItem.forEach((item) => {
        products.forEach((product) => {
            if (product.name.toLowerCase().includes(item) || product.description.toLowerCase().includes(item) || product.color.includes(item) || product.category.includes(item) || product.material.includes(item) || product.brand.includes(item) || product.gender.includes(item) || product.type.includes(item))
            {
                if (!products1.some(product1 => product1.pid === product.pid))
                {
                    products1.push(product);
                }
            }
        });
    });

    showProducts(products1);
}