const div = document.createElement('div')
div.classList.add('nav')
const body = document.body
body.appendChild(div)
const headerImg = document.createElement('img')
const header = document.createElement('h1')
header.textContent = 'Тестовый сайт'
div.insertAdjacentElement('beforebegin', header)

const img = document.createElement('img')
img.src = 'https://picsum.photos/240';
img.width = 40
img.alt = 'phone'

header.appendChild(img)


const ul = `
<ul>
<li>Цены</li>
<li>О нас</li>
<li>Контакты</li>
</ul>
`

// ul.classList.add('nav__list')
header.innerHTML += ul

const generatePhoneCard = (brand, model, color, price) => {
    return `
    <div class="phoneCard">
    <h2 class="phoneCard__item_h2">${brand.toUpperCase()}</h2>
    <p class="phoneCard__item">Модель ${model.toUpperCase()}</p>
    <p class="phoneCard__item">Цвет: ${color}</p>
    <p class="phoneCard__item">Цена: ${price}$</p>
    <button type='button' class='btn'>Удалить</button>
    </div>
    `;
    }

const phoneDiv = document.createElement('div');
phoneDiv.classList.add('phone__list');
const phoneList = [
    {brand: 'Xiaomi', model: 'Note 9 Pro', color: 'Красный', price: 170},
    {brand: 'Samsung', model: 'A70', color: 'Синий', price: 210},
    {brand: 'Xiaomi', model: 'PocoPhone X3', color: 'Серый', price: 270},
    {brand: 'LG', model: 'V50', color: 'Красный', price: 352},
    {brand: 'Iphone', model: 'X', color: 'Белый', price: 320},
    {brand: 'Meizu', model: 'Pro 5', color: 'Черный', price: 285},
    {brand: 'Sky', model: 'A910', color: 'Серый', price: 125},
    {brand: 'Motorola', model: 'Razr', color: 'Черный', price: 77},
    ]


const phoneHTML = phoneList.map(phone => {
        return generatePhoneCard(phone.brand, phone.model, phone.color, phone.price);
        }).join('');

phoneDiv.innerHTML = phoneHTML;
div.insertAdjacentElement('beforebegin', phoneDiv);
const buttons = document.querySelectorAll('.btn');

function handleClick(e) {
    const currentButton = e.currentTarget;
    currentButton.closest('.phoneCard').remove();
}

buttons.forEach(button => {

    button.addEventListener('click', handleClick)
    })


let data = new Date().getHours()
if (data > 15) (
    document.body.classList.add('dark__style')
)
else {
    document.body.classList.add('light__style')
}