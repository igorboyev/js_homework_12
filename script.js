const vegetables = [
    {
        name: `tomato`,
        icon: `🍅`,
        price: 2.3
    },
    {
        name: `carrot`,
        icon: `🥕`,
        price: 1.5
    },
    {
        name: `corn`,
        icon: `🌽`,
        price: 2.78,
        season: true
    }
];
const fruits = [
    {
        name: `watermelon`,
        icon: `🍉`,
        price: 7.7,
        season: true
    },
    {
        name: `cherries`,
        icon: `🍒`,
        price: 8.5,
        season: true
    },
    {
        name: `pineapple`,
        icon: `🍍`,
        price: 9.8
    }
];
const Product = {
    getPrice(){
        return this.price * this.seasonKoef;
    },
    getInfo(){
        return `Product: ${this.icon} ${this.name}. Type: ${this.type}. 
	Price: ${this.season ? this.getPrice().toFixed(2) : this.price.toFixed(2)}. `
    }
}
let Vegetable = Object.create(Product)
let Fruit = Object.create(Product)
Vegetable.type = `Vegetable`;
Vegetable.seasonKoef = 1.3;
Fruit.type = `Fruit`;
Fruit.seasonKoef = 2;
const makePrototype = (arr, objectProto) =>{
    JSON.parse(JSON.stringify(arr))
    return arr.map(item => {
        item.__proto__ = objectProto	;
        return item;
    })
}
makePrototype(vegetables, Vegetable);
makePrototype(fruits, Fruit);
let renderList = function(arr){
    return `<ul>${arr.map((item) =>{
        if(typeof item === `object`){
        }
        return  `<li>${item.getInfo()}</li>`;
    }).join(``)}</ul>`
};
document.write(renderList(vegetables));
document.write(renderList(fruits));