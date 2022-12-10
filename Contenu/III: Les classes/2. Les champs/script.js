"use strict";
class Book {
    constructor(title, price, dateOfParution, author, theme) {
        this.title = title;
        this.price = price;
        this.dateOfParution = dateOfParution;
        this.author = author;
        this.theme = theme;
    }
    promo() {
        return this.price * 0.5;
    }
}
const book1 = new Book("The Great Gatsby", 20, "11/04/1955", "Tom Joe");
const addToShelter = (obj) => {
    console.log("ADDED TO SHELTER", obj);
};
addToShelter(new Book("Nana", 5, "12/07/1905", "Zola"));
let onlyBook = [];
onlyBook.push(new Book("Nana", 5, "12/07/1905", "Zola"));
