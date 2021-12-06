import { createContext, useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import orderBy from 'lodash/orderBy';

export const LibraryContext = createContext({});

export function LibraryProvider({ children }) {
  const [lastSort, setLastSort] = useState({
    order: 'asc',
    sortType: '',
  });

  const [books, setBooks] = useState([
    {
      id: uuidv4(),
      title: 'A',
      size: 8,
      color: 'Amarelo',
      colorPosition: '3',
      image: 'book_a.svg',
      releaseDate: '2020-01-01',
    },
    {
      id: uuidv4(),
      title: 'B',
      size: 6,
      color: 'Vermelho',
      colorPosition: '1',
      image: 'book_b.svg',
      releaseDate: '2018-01-01',
    },
    {
      id: uuidv4(),
      title: 'C',
      size: 10,
      color: 'Laranja',
      colorPosition: '2',
      image: 'book_c.svg',
      releaseDate: '2016-01-01',
    },
    {
      id: uuidv4(),
      title: 'D',
      size: 10,
      color: 'Violeta',
      colorPosition: '7',
      image: 'book_d.svg',
      releaseDate: '2020-01-10',
    },
    {
      id: uuidv4(),
      title: 'E',
      size: 4,
      color: 'Azul Claro',
      colorPosition: '5',
      image: 'book_e.svg',
      releaseDate: '2020-08-01',
    },
    {
      id: uuidv4(),
      title: 'F',
      size: 5,
      color: 'Rosa Escuro',
      colorPosition: '9',
      image: 'book_f.svg',
      releaseDate: '2000-05-01',
    },
    {
      id: uuidv4(),
      title: 'G',
      size: 5,
      color: 'Rosa Claro',
      colorPosition: '8',
      image: 'book_g.svg',
      releaseDate: '2014-01-01',
    },
    {
      id: uuidv4(),
      title: 'H',
      size: 10,
      color: 'Azul Escuro',
      colorPosition: '6',
      image: 'book_h.svg',
      releaseDate: '2020-07-06',
    },
    {
      id: uuidv4(),
      title: 'I',
      size: 7,
      color: 'Verde',
      colorPosition: '4',
      image: 'book_i.svg',
      releaseDate: '2021-01-01',
    },
  ]);

  const [shelfs, setShelfs] = useState({
   first: {
      name: 'First shelf',
      books: [],
      reverse: false,
    },
    second: {
      name: 'Second shelf',
      books: books,
      reverse: true,
    },
  });

  const handleDeleteBook = (id) => {
    setBooks(books.filter(item => item.id !== id));

    Object.keys(shelfs).forEach((item) => {
      const shelf = shelfs[item];
      const copiedBooks = [...shelf.books];
      const index = copiedBooks.findIndex(book => book.id === id);

      if (index !== -1) {
        copiedBooks.splice(index, 1);
        setShelfs({
          ...shelfs,
          [item]: {
            ...shelf,
            books: copiedBooks,
          },
        });
      }
    });
  };

  const handleCreateBook = (book, shelf) => {
    setBooks([...books, book]);

    const copiedBooks = [...shelfs[shelf].books];
    copiedBooks.push(book);

    const copiedShelfs = {
      ...shelfs,
      [shelf]: {
        ...shelfs[shelf],
        books: copiedBooks,
      },
    };

    setShelfs(copiedShelfs);   
  };

  const handleUpdateBook = (book) => {
    const copiedBooks = books.filter((item) => item.id !== book.id);
    copiedBooks.push(book);

    setBooks(copiedBooks);

    Object.keys(shelfs).forEach((item) => {
      const shelf = shelfs[item];
      const copiedBooks = [...shelf.books];
      const index = copiedBooks.findIndex(item => item.id === book.id);

      if (index !== -1) {
        copiedBooks[index] = book;
        setShelfs({
          ...shelfs,
          [item]: {
            ...shelf,
            books: copiedBooks,
          },
        });
      }
    });
  };

  const handleSort = (sortType) => {
    const fieldBySortType = {
      alphabetic: 'title',
      colors: 'colorPosition',
      size: 'size',
      date: 'releaseDate',
    };

    let order = 'asc';
    if (sortType === lastSort.sortType) {
      order = lastSort.order === 'asc' ? 'desc' : 'asc';
    }

    setLastSort({
      order: order,
      sortType: sortType,
    });

    if (sortType === 'date') {
      orderBooksByDate(order);

      return;
    }

    orderBooks(fieldBySortType[sortType], order);
  };

  const orderBooks = (field, order) => {
    Object.keys(shelfs).forEach((item) => {
      if (shelfs[item].reverse) {
        shelfs[item] = {
          ...shelfs[item],
          books: orderBy(shelfs[item].books, field, order).reverse(),
        }
      } else {
        shelfs[item] = {
          ...shelfs[item],
          books: orderBy(shelfs[item].books, field, order),
        }
      }
    });
  };

  const orderBooksByDate = (order) => {
    Object.keys(shelfs).forEach((item) => {
      if (shelfs[item].reverse) {
        shelfs[item] = {
          ...shelfs[item],
          books: orderBy(shelfs[item].books, (item) => new Date(item.releaseDate), order).reverse(),
        }
      } else {
        shelfs[item] = {
          ...shelfs[item],
          books: orderBy(shelfs[item].books, (item) => new Date(item.releaseDate), order),
        }
      }
    });
  };

  const newBookOptions = [
    {
      color: 'Amarelo',
      size: 8,
      colorPosition: '3',
      image: 'book_yellow.svg',
    },
    {
      color: 'Vermelho',
      size: 6,
      colorPosition: '1',
      image: 'book_red.svg',
    },
    {
      color: 'Laranja',
      size: 10,
      colorPosition: '2',
      image: 'book_orange.svg',
    },
    {
      color: 'Violeta',
      size: 10,
      colorPosition: '7',
      image: 'book_violet.svg',
    },
    {
      color: 'Azul Claro',
      size: 4,
      colorPosition: '5',
      image: 'book_light_blue.svg',
    },
    {
      color: 'Rosa Escuro',
      size: 5,
      colorPosition: '9',
      image: 'book_dark_pink.svg',
    },
    {
      color: 'Rosa Claro',
      size: 5,
      colorPosition: '8',
      image: 'book_light_pink.svg',
    },
    {
      color: 'Azul Escuro',
      size: 10,
      colorPosition: '6',
      image: 'book_dark_blue.svg',
    },
    {
      size: 7,
      color: 'Verde',
      colorPosition: '4',
      image: 'book_green.svg',
    },
  ];

  return (
    <LibraryContext.Provider
      value={{
        books,
        setBooks,
        handleDeleteBook,
        handleCreateBook,
        handleUpdateBook,
        shelfs,
        setShelfs,
        handleSort,
        newBookOptions
      }}
    >
      {children}
    </LibraryContext.Provider>
  )
}

export const useLibrary = () => useContext(LibraryContext);
