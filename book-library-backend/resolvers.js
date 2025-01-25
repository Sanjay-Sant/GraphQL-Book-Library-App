// Functions that handle the logic to fetch the requested data.

const { v4: uuidv4 } = require('uuid');

let books = [
  { id: "1", title: "1984", author: "George Orwell", year: 1949 },
  { id: "2", title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
];

const resolvers = {
  Query: {
    books: () => books,
    book: (_, { id }) => books.find((book) => book.id === id),
  },
  Mutation: {
    // addBook: (_, { title, author, year }) => {
    //   const newBook = { id: uuidv4(), title, author, year };
    //   books.push(newBook);
    //   return newBook;
    // },
    addBook: (_, { input }) => {
      const { title, author, year } = input;
      const newBook = { id: uuidv4(), title, author, year };
      books.push(newBook);
      return newBook;
    },
    updateBook: (_, { id, title, author, year }) => {
      const bookIndex = books.findIndex((book) => book.id === id);
      if (bookIndex === -1) return null;

      const updatedBook = {
        ...books[bookIndex],
        title: title || books[bookIndex].title,
        author: author || books[bookIndex].author,
        year: year || books[bookIndex].year,
      };

      books[bookIndex] = updatedBook;
      return updatedBook;
    },
    deleteBook: (_, { id }) => {
      const bookIndex = books.findIndex((book) => book.id === id);
      if (bookIndex === -1) return null;

      const deletedBook = books[bookIndex];
      books.splice(bookIndex, 1);
      return deletedBook;
    },
  },
};

module.exports = resolvers;
