interface Book {
  title: string;
  author: string;
  isbn: string;
  publishedYear: number;
  genre?: string;
}

class Library{
    
    private books: Book[] = [];
   
    public addBook(book:Book):void{
        this.books.push(book)
    }
    public getBookDetails(isbn:string): Book | undefined{
        return this.books.find(book=>book.isbn === isbn)
    }
    protected getBooks(): Book[] {
        return this.books;
      }
}

class DigitalLibrary extends Library{
    public readonly website: string;
    constructor(website: string) {
        super();
        this.website = website;
      }
    

    public listBooks(): string[] {
        return this.getBooks().map(book => book.title);;
    }
    

}

const digitalLibrary1 = new DigitalLibrary("https://examplelibrary.com")

digitalLibrary1.addBook({
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isbn: "1234567890",
    publishedYear: 1925,
    genre: "Fiction"
  });
  digitalLibrary1.addBook({
    title: "1984",
    author: "George Orwell",
    isbn: "0987654321",
    publishedYear: 1949,
    genre: "Dystopian"
  });
  digitalLibrary1.addBook({
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isbn: "1122334455",
    publishedYear: 1960
  });

const bookDetails = digitalLibrary1.getBookDetails("1234567890");
console.log("Book Details:", bookDetails);

const allBookTitles = digitalLibrary1.listBooks();
console.log("All Book Titles:", allBookTitles);