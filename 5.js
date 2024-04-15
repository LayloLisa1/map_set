const createBookCollection = () => {
    let books = [];
  
    const create = (title, author, read = false) => {
      const id = books.length + 1;
      books.push({ id, title, author, read });
    };
  
    const findOne = (id) => {
      return books.find(book => book.id === id);
    };
  
    const findAll = () => {
      return books;
    };
  
    const filterByAuthor = (author) => {
      return books.filter(book => book.author === author);
    };
  
    const filterByReaded = () => {
      return books.filter(book => book.read);
    };
  
    const deleteOne = (id) => {
      books = books.filter(book => book.id !== id);
    };
  
    const deleteMany = () => {
      books = [];
    };
  
    return {
      create,
      findOne,
      findAll,
      filterByAuthor,
      filterByReaded,
      deleteOne,
      deleteMany
    };
  };
  const bookCollection = createBookCollection();
  bookCollection.create('The Hobbit', 'J.R.R. Tolkien');
  bookCollection.create('The Great Gatsby', 'F. Scott Fitzgerald', true);
  console.log(bookCollection.findAll());
  console.log(bookCollection.findOne(1));
  console.log(bookCollection.filterByAuthor('J.R.R. Tolkien'));
  console.log(bookCollection.filterByReaded());
  bookCollection.deleteOne(2);
  bookCollection.deleteMany();
  console.log(bookCollection.findAll());
  const afterNYears = (people, n) => {
    const updatedPeople = new Map();
  
    for (const person in people) {
      const updatedAge = Math.abs(people[person] + n);
      updatedPeople.set(person, updatedAge);
    }
  
    return Object.fromEntries(updatedPeople);
  };
  console.log(afterNYears({
    "Joel": 32,
    "Fred": 44,
    "Reginald": 65,
    "Susan": 33,
    "Julian": 13
  }, 1));
  
  console.log(afterNYears({
    "Baby": 2,
    "Child": 8,
    "Teenager": 15,
    "Adult": 25,
    "Elderly": 71
  }, 19));
  
  console.log(afterNYears({
    "Genie": 1000,
    "Joe": 40
  }, 5));
  