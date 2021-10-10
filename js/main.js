const schemeSvg = document.querySelector(".scheme-svg");
const TotalPriceTag = document.querySelector(".price-total");
let cost =800;
let totalPrice=0;
schemeSvg.addEventListener("click", (event) =>{
    if (!event.target.classList.contains("booked")){ //Если цель ивента содержит класс букд
        event.target.classList.toggle("active"); // при ивенте к классам добавляется класс active 
        totalPrice = schemeSvg.querySelectorAll(".active").length * cost; // в схимсвг находим все элементы с классом эктив и с помощью lenght получаем их кол-во и умножаем на значение переменной кост
        TotalPriceTag.textContent=totalPrice; // в тоталпрайстег записываем значение переменной тотал прайс
    }
})