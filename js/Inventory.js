// Object type : Item
// @code String contains the product code
// @name String
// @price Number

function Item(code, name, price){
    this.code = code;
    this.name = name;
    this.price = price;
}

// Use to store all items for sale
var inventory = new Array();

// Example of adding an item
inventory["B01"] = new Item("B01","Beer",6.99);
