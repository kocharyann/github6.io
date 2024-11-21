const productsMap = {
    "product1": {price: 100},
    "product2": {price: 120},
    "product3": {price: 140}
}; // Менять только цену

window.addEventListener("DOMContentLoaded", function () {
    const quantityInput = document.getElementById("quantityInput");
    const Select = document.getElementById("select");
    const button = document.getElementById("calculate")
    const answerDiv = document.getElementById("answerDiv");
    const render = (price) => {
        if (isNaN(price)) {
            answerDiv.innerText = `Не верный ввод`; // перефразировать
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
