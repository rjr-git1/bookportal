const search = document.getElementById('search-bar');
//const resultParagraph = document.getElementById('#instant-search__paragraph');

//Search books.json and filter it
const searchBooks = async (searchText) => {
  const res = await fetch('./books.json');
  const books = await res.json;
  JSON.stringify(books);

  //Get matches to current text input
  /*
  let matches = books.filter((book) => {
    const regex = new RegExp(`^${searchText}`, 'gi');
    return book.name.match(regex) || book.abbr.match(regex);
  });
*/
  // Paso final es crear el outputHTML()
};
//search.addEventListener('input', () => searchBooks(search.value));
searchBooks();
