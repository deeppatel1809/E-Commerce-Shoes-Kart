function openFilter()
{
    const filter = document.getElementById('filter-sidebar');
    filter.classList.add('container','d-flex','flex-column','filterSidebar');
    filter.innerHTML = `
        <div class="row">
            <div class="col-8 border-bottom border-secondary border-3 py-3">
                <p class="fw-bold h2">Filter</p>
            </div>
            <div class="col-4 text-end border-bottom border-secondary border-3 py-3">
                <a class="text-decoration-none text-dark" onclick="closeFilter()"><i class="bi bi-x h1"></i></a>
            </div>
        </div>
        <div class="row">
            <div class="col-10 offset-1 filterItem">
                <a class="text-decoration-none text-dark h5 d-block m-0" data-bs-toggle="collapse" href="#filter-color">Color</a>
            </div>
        </div>
        <div class="container collapse py-3" id="filter-color">
            <div class="row">
                <div class="col-10 offset-1 form-check">
                    <input class="form-check-input" type="checkbox" id="red" value="red">
                    <label class="form-check-label" for="red">Red</label>
                </div>
            </div>
            <div class="row">
                <div class="col-10 offset-1 form-check">
                    <input class="form-check-input" type="checkbox" id="brown" value="brown">
                    <label class="form-check-label" for="brown">Brown</label>
                </div>
            </div>
            <div class="row">
                <div class="col-10 offset-1 form-check">
                    <input class="form-check-input" type="checkbox" id="beige" value="beige">
                    <label class="form-check-label" for="beige">Beige</label>
                </div>
            </div>
            <div class="row">
                <div class="col-10 offset-1 form-check">
                    <input class="form-check-input" type="checkbox" id="navyBlue" value="navy blue">
                    <label class="form-check-label" for="navyBlue">Navy Blue</label>
                </div>
            </div>
            <div class="row">
                <div class="col-10 offset-1 form-check">
                    <input class="form-check-input" type="checkbox" id="black" value="black">
                    <label class="form-check-label" for="black">Black</label>
                </div>
            </div>
            <div class="row">
                <div class="col-10 offset-1 form-check">
                    <input class="form-check-input" type="checkbox" id="white" value="white">
                    <label class="form-check-label" for="white">White</label>
                </div>
            </div>
            <div class="row">
                <div class="col-10 offset-1 form-check">
                    <input class="form-check-input" type="checkbox" id="grey" value="grey">
                    <label class="form-check-label" for="grey">Grey</label>
                </div>
            </div>
            <div class="row">
                <div class="col-10 offset-1 form-check">
                    <input class="form-check-input" type="checkbox" id="blue" value="blue">
                    <label class="form-check-label" for="blue">Blue</label>
                </div>
            </div>
            <div class="row">
                <div class="col-10 offset-1 form-check">
                    <input class="form-check-input" type="checkbox" id="green" value="green">
                    <label class="form-check-label" for="green">Green</label>
                </div>
            </div>
            <div class="row">
                <div class="col-10 offset-1 form-check">
                    <input class="form-check-input" type="checkbox" id="pink" value="pink">
                    <label class="form-check-label" for="pink">Pink</label>
                </div>
            </div>
            <div class="row">
                <div class="col-10 offset-1 form-check">
                    <input class="form-check-input" type="checkbox" id="yellow" value="yellow">
                    <label class="form-check-label" for="yellow">Yellow</label>
                </div>
            </div>
            <div class="row">
                <div class="col-10 offset-1 form-check">
                    <input class="form-check-input" type="checkbox" id="nude" value="nude">
                    <label class="form-check-label" for="nude">Nude</label>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-10 offset-1 filterItem">
                <a class="text-decoration-none text-dark h5 d-block m-0" data-bs-toggle="collapse" href="#filter-category">Category</a>
            </div>
        </div>
        <div class="container collapse py-3" id="filter-category">
            <div class="row">
                <div class="col-10 offset-1 form-check">
                    <input class="form-check-input" type="checkbox" id="sport" value="sport">
                    <label class="form-check-label" for="sport">Sport</label>
                </div>
            </div>
            <div class="row">
                <div class="col-10 offset-1 form-check">
                    <input class="form-check-input" type="checkbox" id="casual" value="casual">
                    <label class="form-check-label" for="casual">Casual</label>
                </div>
            </div>
            <div class="row">
                <div class="col-10 offset-1 form-check">
                    <input class="form-check-input" type="checkbox" id="formal" value="formal">
                    <label class="form-check-label" for="formal">Formal</label>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-10 offset-1 filterItem">
                <a class="text-decoration-none text-dark h5 d-block m-0" data-bs-toggle="collapse" href="#filter-type">Type</a>
            </div>
        </div>
        <div class="container collapse py-3" id="filter-type">
            <div class="row">
                <div class="col-10 offset-1 form-check">
                    <input class="form-check-input" type="checkbox" id="runningShoe" value="running shoe">
                    <label class="form-check-label" for="runningShoe">Running shoes</label>
                </div>
            </div>
            <div class="row">
                <div class="col-10 offset-1 form-check">
                    <input class="form-check-input" type="checkbox" id="athleticShoe" value="athletic shoe">
                    <label class="form-check-label" for="athleticShoe">Athletic shoes</label>
                </div>
            </div>
            <div class="row">
                <div class="col-10 offset-1 form-check">
                    <input class="form-check-input" type="checkbox" id="sandal" value="sandal">
                    <label class="form-check-label" for="sandal">Sandals</label>
                </div>
            </div>

            <div class="row">
                <div class="col-10 offset-1 form-check">
                    <input class="form-check-input" type="checkbox" id="flipflop" value="flip flop">
                    <label class="form-check-label" for="flipflop">Flip Flops</label>
                </div>
            </div>

            <div class="row">
                <div class="col-10 offset-1 form-check">
                    <input class="form-check-input" type="checkbox" id="heel" value="heel">
                    <label class="form-check-label" for="heel">Heels</label>
                </div>
            </div>

            <div class="row">
                <div class="col-10 offset-1 form-check">
                    <input class="form-check-input" type="checkbox" id="shoe" value="shoe">
                    <label class="form-check-label" for="shoe">Shoes</label>
                </div>
            </div>

            <div class="row">
                <div class="col-10 offset-1 form-check">
                    <input class="form-check-input" type="checkbox" id="boot" value="boot">
                    <label class="form-check-label" for="boot">Boots</label>
                </div>
            </div>

            <div class="row">
                <div class="col-10 offset-1 form-check">
                    <input class="form-check-input" type="checkbox" id="sneaker" value="sneaker">
                    <label class="form-check-label" for="sneaker">Sneakers</label>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-10 offset-1 filterItem">
                <a class="text-decoration-none text-dark h5 d-block m-0" data-bs-toggle="collapse" href="#filter-brand">Brand</a>
            </div>
        </div>
        <div class="container collapse py-3" id="filter-brand">
            <div class="row">
                <div class="col-10 offset-1 form-check">
                    <input class="form-check-input" type="checkbox" id="nike" value="nike">
                    <label class="form-check-label" for="nike">Nike</label>
                </div>
                <div class="col-10 offset-1 form-check">
                    <input class="form-check-input" type="checkbox" id="adidas" value="adidas">
                    <label class="form-check-label" for="adidas">Adidas</label>
                </div>
                <div class="col-10 offset-1 form-check">
                    <input class="form-check-input" type="checkbox" id="puma" value="puma">
                    <label class="form-check-label" for="puma">Puma</label>
                </div>
                <div class="col-10 offset-1 form-check">
                    <input class="form-check-input" type="checkbox" id="reebok" value="reebok">
                    <label class="form-check-label" for="reebok">Reebok</label>
                </div>
                <div class="col-10 offset-1 form-check">
                    <input class="form-check-input" type="checkbox" id="skechers" value="skechers">
                    <label class="form-check-label" for="skechers">Skechers</label>
                </div>
                <div class="col-10 offset-1 form-check">
                    <input class="form-check-input" type="checkbox" id="crocs" value="crocs">
                    <label class="form-check-label" for="crocs">Crocs</label>
                </div>
                <div class="col-10 offset-1 form-check">
                    <input class="form-check-input" type="checkbox" id="aerosoles" value="aerosoles">
                    <label class="form-check-label" for="aerosoles">Aerosoles</label>
                </div>
                <div class="col-10 offset-1 form-check">
                    <input class="form-check-input" type="checkbox" id="clarks" value="clarks">
                    <label class="form-check-label" for="clarks">Clarks</label>
                </div>
                <div class="col-10 offset-1 form-check">
                    <input class="form-check-input" type="checkbox" id="hushPuppies" value="hush puppies">
                    <label class="form-check-label" for="hushPuppies">Hush Puppies</label>
                </div>
                <div class="col-10 offset-1 form-check">
                    <input class="form-check-input" type="checkbox" id="timberland" value="timberland">
                    <label class="form-check-label" for="timberland">Timberland</label>
                </div>
                <div class="col-10 offset-1 form-check">
                    <input class="form-check-input" type="checkbox" id="bata" value="bata">
                    <label class="form-check-label" for="bata">Bata</label>
                </div>
                <div class="col-10 offset-1 form-check">
                    <input class="form-check-input" type="checkbox" id="allenEdmonds" value="allen edmonds">
                    <label class="form-check-label" for="allenEdmonds">Allen Edmonds</label>
                </div>
                <div class="col-10 offset-1 form-check">
                    <input class="form-check-input" type="checkbox" id="drMartens" value="dr. martens">
                    <label class="form-check-label" for="drMartens">Dr. Martens</label>
                </div>
                <div class="col-10 offset-1 form-check">
                    <input class="form-check-input" type="checkbox" id="ugg" value="ugg">
                    <label class="form-check-label" for="ugg">UGG</label>
                </div>
                <div class="col-10 offset-1 form-check">
                    <input class="form-check-input" type="checkbox" id="teva" value="teva">
                    <label class="form-check-label" for="teva">Teva</label>
                </div>
                <div class="col-10 offset-1 form-check">
                    <input class="form-check-input" type="checkbox" id="sperryTopSider" value="sperry top-sider">
                    <label class="form-check-label" for="sperryTopSider">Sperry Top-Sider</label>
                </div>
                <div class="col-10 offset-1 form-check">
                    <input class="form-check-input" type="checkbox" id="coleHaan" value="cole haan">
                    <label class="form-check-label" for="coleHaan">Cole Haan</label>
                </div>
                <div class="col-10 offset-1 form-check">
                    <input class="form-check-input" type="checkbox" id="samEdelman" value="sam edelman">
                    <label class="form-check-label" for="samEdelman">Sam Edelman</label>
                </div>
                <div class="col-10 offset-1 form-check">
                    <input class="form-check-input" type="checkbox" id="vans" value="vans">
                    <label class="form-check-label" for="vans">Vans</label>
                </div>
                <div class="col-10 offset-1 form-check">
                    <input class="form-check-input" type="checkbox" id="birkenstock" value="birkenstock">
                    <label class="form-check-label" for="birkenstock">Birkenstock</label>
                </div>
                <div class="col-10 offset-1 form-check">
                    <input class="form-check-input" type="checkbox" id="rockport" value="rockport">
                    <label class="form-check-label" for="rockport">Rockport</label>
                </div>
                <div class="col-10 offset-1 form-check">
                    <input class="form-check-input" type="checkbox" id="tommyHilfiger" value="tommy hilfiger">
                    <label class="form-check-label" for="tommyHilfiger">Tommy Hilfiger</label>
                </div>
            </div>
        </div>
        <div class="row mt-auto">
            <div class="col-12 d-grid checkout-container">
                <button class="btn btn-dark btn-lg mt-4 mb-4 fw-bold" onclick="filter()">APPLY FILTERS</button>
            </div>
        </div>
    `;
}

function closeFilter()
{
    const filter = document.getElementById('filter-sidebar');
    filter.classList.remove('container','d-flex','flex-column','filterSidebar');
    filter.innerHTML = "";
}

function filter()
{
    let products = JSON.parse(localStorage.getItem('products')) || [];

    if (showedProductsGender)
    {
        products = products.filter(item => item.gender === showedProductsGender);
    }
    
    let products1 = [];
    let products2 = [];
    const selectedFilters = {};
    const checkboxes = document.querySelectorAll('.form-check-input');

    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked)
        {
            const filterCategory = checkbox.closest('.container').previousElementSibling.textContent.trim().toLowerCase();

            if (!selectedFilters[filterCategory])
            {
                selectedFilters[filterCategory] = [];
            }
            selectedFilters[filterCategory].push(checkbox.value);
        }
    });

    const filterCategories = Object.keys(selectedFilters);

    filterCategories.forEach((item) => {
        selectedFilters[item].forEach((value) => {
            products1 = products.filter(product => {
                return product[item] && product[item]==value;
            });
            products2 = products2.concat(products1);
        });
        products = products2;
        products2 = [];
    });
    
    showProducts(products);
    closeFilter();
}