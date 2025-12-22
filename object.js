const obj = {
    products : [
        {
            name: "Laptop",
            ram:14,
            brand: "Dell",
            isActice: true

        },
        {
            name: "Laptop",
            ram:16,
            brand: "HP",
            isActice: true

        },
        {
            name: "Laptop",
            ram:6,
            brand: "Asus",
            isActice: false

        },
        {
            name: "Laptop",
            ram:4,
            brand: "Macbood",
            isActice: false

        },
    ]
}

console.log(obj);

const isActiveProducts = Object.values(obj.products).filter(p => p.isActice);
const isActiveFalse = Object.values(obj.products).filter(p => p.isActice === false);
console.log("Active Products:  ", isActiveProducts);
console.log("Not Active Products: ", isActiveFalse);


