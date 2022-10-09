const  product = {
    plainBurger:{
        name:'GAMBURGER',
        price: 10000,
        amount: 0,
        kkal: 125,
        get sum(){
            return this.price * this.amount
        }, 
        get kkalSum(){
            return this.kkal * this.amount
        }
    },
    freshBurger:{
        name:'GAMBURGER FRESH',
        price: 20500,
        amount: 0,
        kkal: 450,
        get sum(){
            return this.price * this.amount
        }, 
        get kkalSum(){
            return this.kkal * this.amount
        }
    },
    freshCombo:{
        name:'FRESH COMBO',
        price: 31900,
        amount: 0,
        kkal: 625,
        get sum(){
            return this.price * this.amount
        }, 
        get kkalSum(){
            return this.kkal * this.amount
        }
    }
}


const btn = document.querySelectorAll('.main__product-btn')
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        plusOrMinus(this)
    })    
}
function plusOrMinus(el) {
    const parent = el.closest('.main__product'),
       num = parent.querySelector('.main__product-num'),
       price = parent.querySelector('.main__product-price span'),
       kkal = parent.querySelector('.main__product-kcall span'),
       symbol = el.getAttribute('data-symbol'),
       parentId = parent.getAttribute('id');
    if (symbol == '+' && product[parentId].amount < 10) {
        product[parentId].amount++
    }else if (symbol == '-' && product[parentId].amount > 0) {
        product[parentId].amount--
    }   
    num.innerHTML = product[parentId].amount
    price.innerHTML = product[parentId].sum
    kkal.innerHTML = product[parentId].kkalSum
}

const lvl = document.querySelector('.header__timer-extra'),
    timer = document.querySelector('.header__timer')
function rec() {
    lvl.innerHTML++
    if (lvl.innerHTML < 50) {
        setTimeout(() => {
            timer.style.color = rgb()
            rec()
        }, 50);
    }else if (lvl.innerHTML < 100) {
        setTimeout(() => {
            timer.style.color = rgb()
            rec()
        }, 100);
    }else if (lvl.innerHTML == 100) {
        timer.style.color = '#FFF'
    }

}
rec()
function random(min , max) {
    return Math.round(Math.random()* (max - min) +min)
}
function rgb(r,g,b) {
    r = random(0 , 255)
    g = random(0 , 255)
    b = random(0 , 255)
    return `rgb(${r},${g},${b})`
}

const img = document.querySelectorAll('.main__product-info'),
close = document.querySelector('.close'),
view = document.querySelector('.view')
for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('dblclick' , function () {
        view.classList.add('active')
        viewImg(this)
    })
}
function viewImg(item) {
    const parent = item.closest('.main__product'),
        img = parent.querySelector('.main__product-img'),
        imgAtt = img.getAttribute('src'),
        viewImg = document.querySelector('.view img')
    viewImg.setAttribute('src', imgAtt)
}
view.onclick = () => view.classList.remove('active')

const addCart = document.querySelector('.addCart'),
receipt = document.querySelector('.receipt'),
receiptWindow = document.querySelector('.receipt__window'),
receiptClose = document.querySelector('.receipt__close'),
receiptWindowOut = document.querySelector('.receipt__window-out'),
receiptWindowBtn = document.querySelector('.receipt__window-btn'),
totalPrice = document.querySelector('.total__price')
 
addCart.addEventListener('click', function () {
    receipt.style = 'display: flex;'
    setTimeout(() => {
        receipt.style.opacity = '1'
        receiptWindow.style.top = '10%'
    }, 500);
    let text = ''
    let total = 0
    let totalkkal = 0
    const objValue = Object.values(product).filter(a => a.amount)
    for (let i = 0; i < objValue.length; i++) {
       if (objValue[i].amount > 0) {
           text += `
            <div class="poduct">
                <span>${i+1}.</span>
                <div class="product__name">${objValue[i].name}</div>
                <div class="product__amount">${objValue[i].amount}x${objValue[i].price} = </div>
                <div class="product__price">${objValue[i].sum}</div>
            </div>`
       }    
       total += objValue[i].sum
       totalkkal += objValue[i].kkalSum
    }
    total =`<div class="total">
Total kkal: ${totalkkal}kkal;  
Total sum: ${total}sum;  
    </div>`
    receiptWindowOut.innerHTML = text + total
})

receiptClose.addEventListener('click', function () {
    receipt.style = 'display: none;'
    receipt.style.opacity = '0'
    receiptWindow.style.top = '-100%'
})
receiptWindowBtn.addEventListener('click', function () {
    location.reload()
})