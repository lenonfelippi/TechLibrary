import * as S from './styles';
import { Logo } from '@componentes/Logo';
import { useLibrary } from '@contexts/LibraryContext';
import { useNavigate } from 'react-router-dom';

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

export const PageBooks = () => {
  const { books, handleDeleteBook } = useLibrary();
  let navigate = useNavigate();

  return (
    <>
      <S.Header>
        <S.LogoWrapper>
          <Logo />
        </S.LogoWrapper>
      </S.Header>
      <S.Main>
        <S.Container>
          <S.ButtonPrev onClick={() => navigate("/")} />

          <S.Heading>My books</S.Heading>

          <S.ButtonNew onClick={() => navigate('/books/create')} />

          <Table>
            <Thead>
              <Tr>
                <Th>Book</Th>
                <Th>Id</Th>
                <Th>Title</Th>
                <Th>Size</Th>
                <Th>Color</Th>
                <Th>Release Date</Th>
                <Th>Update</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {books.map((book, i) => (
                <Tr key={book.id}>
                  <Td>
                    <img src={`/books/${book.image}`} alt={`Book with the title ${book.title}`} />
                  </Td>
                  <Td>{book.id}</Td>
                  <Td>{book.title}</Td>
                  <Td>{book.size}</Td>
                  <Td>{book.color}</Td>
                  <Td>{book.releaseDate}</Td>
                  <Td>
                    <S.ButtonUpdate onClick={() => navigate(`/books/update/${book.id}`)} />
                  </Td>
                  <Td>
                    <S.ButtonTrash onClick={() => handleDeleteBook(book.id)} />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </S.Container>
      </S.Main>
    </>
  );
}
