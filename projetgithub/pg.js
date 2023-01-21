class Book {
    constructor(a, b, x, y) {
      this.title = a;
      this.author = b;
      this.description = x;
      this.pages = y;
      this.currentPage = 1;
      this.read = false;
    }
  
    readBook(page) {
      if (page < 1 || page > this.pages) {
        console.log(0);
        return;
      }
  
      this.currentPage = page;
  
      if (page === this.pages) {
        this.read = true;
      }
    afficher(){
      console.log(1);
    }
    }
  }
  export default Book;
  