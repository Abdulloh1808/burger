const product = {
    plainBurger: {
        name: 'GAMBURGER',
        price: 10000,
        amount: 0,
        kkal: 125,
        get sum() {
            return this.price * this.amount
        },
        get kkalSum() {
            return this.kkal * this.amount
        }
    },
    freshBurger: {
        name: 'GAMBURGER FRESH',
        price: 20500,
        amount: 0,
        kkal: 450,
        get sum() {
            return this.price * this.amount
        },
        get kkalSum() {
            return this.kkal * this.amount
        }
    },
    freshCombo: {
        name: 'FRESH COMBO ',
        price: 31900,
        amount: 0,
        kkal: 625,
        get sum() {
            return this.price * this.amount
        },
        get kkalSum() {
            return this.kkal * this.amount
        }
    },
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
        parentId = parent.getAttribute('id')

    if (symbol == '+' && product[parentId].amount < 10) {
        product[parentId].amount++
    } else if (symbol == '-' && product[parentId].amount > 0) {
        product[parentId].amount--
    }

    num.innerHTML = product[parentId].amount
    price.innerHTML = product[parentId].sum
    kkal.innerHTML = product[parentId].kkalSum


}
