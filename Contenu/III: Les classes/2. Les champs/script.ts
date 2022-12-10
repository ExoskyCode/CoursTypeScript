class Book {
  constructor(
    public title: string,
    public price: number,
    public dateOfParution: string,
    public author: string,
    public theme?: string[]
  ) {}
  promo() {
    return this.price * 0.5;
  }
}

const book1 = new Book("The Great Gatsby", 20, "11/04/1955", "Tom Joe");

const addToShelter = (obj: Book) => {
  console.log("ADDED TO SHELTER", obj);
};
addToShelter(new Book("Nana", 5, "12/07/1905", "Zola"));

let onlyBook: Book[] = [];
onlyBook.push(new Book("Nana", 5, "12/07/1905", "Zola"));
