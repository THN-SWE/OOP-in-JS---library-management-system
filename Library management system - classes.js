
class Library {
  #books = {};
  #members = {};
  //   constructor() {

  //   }
  addBook(bookId, book) {
    this.#books[bookId] = [...book.forLibrary()];
    console.log("\n",this.#books);
  }
  removeBook(book) {
    if (book.returnIsissued() === false) {
      delete this.#books[book.returnBookId()];
      console.log("\n",this.#books);
    } else {
      console.log("\n This book haven't been returned yet!");
    }
  }

  addMemeber(member) {
    this.#members[member.returnMemberId()] = member.returnMembertoLib();
    console.log("\n member added => ", this.#members[1]);

  }
  removeMember(member) {
    if (this.#members[member.returnMemberId()].length === 0) {
      delete this.#members[member.returnMemberId()];
      console.log("\n member removed => ", this.#members[1]);
    } else {
      console.log(
        "\n member can't be removed until they \n return all the books they borrowed!"
      );
    }
  }
}

class Member {
  #name = "";
  #memberId = "";
  #issuedBooks = [];
  constructor(name, id) {
    this.#name = name;
    this.#memberId = id;
  }
  memberInfo() {
    return `name => ${this.#name} ID => ${this.#memberId} \n ${
      this.#issuedBooks
    }`;
  }
  returnMembertoLib() {
    return [this.#memberId, this.#name, this.#issuedBooks];
  }
  returnMemberName() {
    return this.#name;
  }
  returnMemberId() {
    return this.#memberId;
  }
  issueBook(book) {
    if (book.returnIsissued()) {
      console.log("\n", book.bookInfo(), " is issued aldready!");
    } else {
      book.setIsissued(true);
      this.#issuedBooks.push(book.bookInfo());
      console.log(`\n ${this.#name} successfully issued ${book.bookInfo()}`);
    }
  }
}

class Book {
  #tilte = "";
  #author = "";
  #isbn = "";
  #isIssued = false;
  constructor(title, author, bookId) {
    this.#tilte = title;
    this.#author = author;
    this.#isbn = bookId;
  }
  bookInfo() {
    return `${this.#tilte} by ${this.#author} issue status: ${this.#isIssued}`;
  }
  forLibrary() {
    return [this.#tilte, this.#author, this.#isIssued];
  }

  returnBookId() {
    return this.#isbn;
  }
  returnIsissued() {
    return this.#isIssued;
  }
  setIsissued(state) {
    this.#isIssued = state;
  }
}

const library = new Library();

let book1 = new Book("abcd", "sandy", "1");
let book2 = new Book("xxxx", "xandy", "2");
let book3 = new Book("rrrr", "randy", "3");

library.addBook(1, book1);
library.addBook(2, book2);
library.addBook(3, book3);

let alice = new Member("alice", 1);
library.addMemeber(alice);

alice.issueBook(book1);

library.removeBook(book1);
library.removeMember(alice);
