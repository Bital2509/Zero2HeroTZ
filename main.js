var count = 0;
let button = document.getElementById('btn');
let buyProduct = 0;

new Vue({
    el: "#app",
    data: {
        brand: '',
        size: '',
        color: '',
        count: 0,
        products: [
            {
                id: 1,
                name: 'куртка красная',
                img: 'https://media.istockphoto.com/photos/male-coat-isolated-on-the-white-picture-id163208487',
                category: 'куртки',
                oldPrice: 5880,
                price: 4790,
                brand: 'super',
                size: 31,
                color: 'красный'
            },
            {
                id: 2,
                name: 'куртка большая',
                img: 'https://media.istockphoto.com/photos/red-womans-sports-jacket-picture-id520887025',
                category: 'куртки',
                oldPrice: 5900,
                price: 3790,
                brand: 'super',
                size: 42,
                color: 'зеленый'
            },
            {
                id: 3,
                name: 'куртка модная',
                img: 'https://media.istockphoto.com/photos/male-coat-isolated-on-the-white-picture-id163208487',
                category: 'куртки',
                price: 5550,
                brand: 'puper',
                size: 29,
                color: 'красный'
            },
            {
                id: 4,
                name: 'куртка выгодная',
                img: 'https://media.istockphoto.com/photos/red-womans-sports-jacket-picture-id520887025',
                category: 'куртки',
                oldPrice: 7900,
                price: 1990,
                brand: 'super',
                size: 29,
                color: 'зеленый'
            }
        ],
    },
    methods: {
        clear() {
            this.brand = "";
            this.size = "";
            this.color = "";
            button.disabled = true;
        },
        showPanel(i) {
            document.getElementById(i).classList.toggle('disable');
            document.getElementById(i).classList.toggle('active');
        },
        getProduct(i) {
            buyProduct = this.products[--i].name;
            // console.log("Куплен товар " + buyProduct + " --- " + i);
            alert("Куплен товар " + buyProduct);
        },
    },
    computed: {
        isDisabled: function () {
            if (this.brand === '' && this.size === '' && this.color === '') {
                return true;
            } else {
                return false;
            }
        },
        filteredList: function () {
            if (typeof count === "undefined") {
                count = 0;
            } else {
                this.count = count;
                count = 0;
            }
            var brand = this.brand.toLowerCase();
            var size = this.size;
            var color = this.color.toLowerCase();

            return this.products.filter(function (elem) {

                if (brand === '' && size === '' && color === '') {
                    button.disabled = true;
                    return true;
                } else {
                    button.disabled = false;
                    // console.log(elem.brand + " --- " + elem.size + " --- " + elem.color);
                    // console.log(brand + " --- " + size + " --- " + color);
                    // console.log(" ");

                    if (elem.brand === brand && String(elem.size) === size && elem.color === color) {
                        return elem.brand.indexOf(brand) > -1, String(elem.size).indexOf(size) > -1, elem.color.indexOf(color) > -1;
                    } else if (elem.brand === brand && size === '' && color === '') {
                        return elem.brand.indexOf(brand) > -1;
                    } else if (String(elem.size) === size && brand === '' && color === '') {
                        return String(elem.size).indexOf(size) > -1;
                    } else if (elem.color === color && brand === '' && size === '') {
                        return elem.color.indexOf(color) > -1;
                    } else if (elem.brand === brand && String(elem.size) === size && color === '') {
                        return elem.brand.indexOf(brand) > -1, String(elem.size).indexOf(size) > -1;
                    } else if (elem.brand === brand && elem.color === color && size === '') {
                        return elem.brand.indexOf(brand) > -1, elem.color.indexOf(color) > -1;
                    } else if (String(elem.size) === size && elem.color === color && brand === '') {
                        return String(elem.size).indexOf(size) > -1, elem.color.indexOf(color) > -1;
                    } else {

                    }
                    count++;
                }
            });
        }
    },
});