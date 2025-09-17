function sortByPrice(order)
{
    showedProducts.sort(function(a, b) {
        if (order === "LH")
        {
            return a.price - b.price;
        }
        else if (order === "HL")
        {
            return b.price - a.price;
        }
    });

    showProducts(showedProducts);
}

function sortByDiscount(order)
{
    showedProducts.sort((a, b) => {
        let discountA = a.price - a.offerPrice;
        let discountB = b.price - b.offerPrice;
        if (order === "LH")
        {
            return discountA - discountB;
        }
        else if (order === "HL")
        {
            return discountB - discountA;
        }
        return 0;
    });

    showProducts(showedProducts);
}

function sortByRating(order)
{
    showedProducts.sort(function(a, b) {
        if (order === "LH")
        {
            return a.rating - b.rating;
        }
        else if (order === "HL")
        {
            return b.rating - a.rating;
        }
    });
    
    showProducts(showedProducts);
}