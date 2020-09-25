///////////////////////////////
//Section 2 Combining Datatypes

const crayonBox = {
    company: "Crayola",
    crayons: ["blue", "yellow", "orange"],
};

console.log(crayonBox.crayons[1]);

const bottle = {
    types: ["longneck", "widemouth"],
    cap: { 
        material: ["metal", "plastic"],
        color: ["blue", "white"],
    }
};

console.log(bottle.cap.color[1]);

const receipt = ["water", "food", {name: "toilet paper", price: 1000}];

console.log(receipt[2].price)

const apartmentBuilding = [
    "landlord", 
    ["brian", "maisel", "bodega cats"]
];

console.log(apartmentBuilding[1][2]);

const winterWear = {
    item: "scarf", size: "6ft"
};
// console.log(winterWear.item)
const knit = () => {
    return winterWear.item;
};

console.log(knit(winterWear));

const crayonBox = {
    company: "Crayola",
    crayons: ["blue", "yellow", "orange"],
};

const crayonSelector = () => {
    return crayonBox;
};

console.log(crayonBox.crayons[2]);


const options = () => {
    console.log("select a song");
}

const powerButton = () => {
    return options();
}

powerButton();