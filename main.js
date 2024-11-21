const productsMap = {
    "product1": {price: 1000},
    "product2": {price: 1500},
    "product3": {price: 2000}
}; 

window.addEventListener("DOMContentLoaded", function () {
    const quantityInput = document.getElementById("quantityInput");
    const Select = document.getElementById("select");
    const button = document.getElementById("calculate")
    const answerDiv = document.getElementById("answerDiv");
    const render = (price) => {
        if (isNaN(price)) {
            answerDiv.innerText = `Введите ещё раз`; 
        } else {
            answerDiv.innerText =
                `Стоимость: ${price}`;
        }
    }
    const calc = (quantity) => {
        if(quantity === "")
            return 0;
        else if (/^[0-9]+$/.test(quantity)) {
            return productsMap[Select.value].price * quantity;
        } else {
            return NaN;
        }
    };

    button.addEventListener("click", (ev)=>{
        if(Select.value)
            render(calc(quantityInput.value))
    })

});
