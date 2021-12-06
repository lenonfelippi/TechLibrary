import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import * as S from '../styles';

import { Logo } from '@componentes/Logo';
import { useLibrary } from '@contexts/LibraryContext';
import { useNavigate, useParams } from 'react-router-dom';

const validations = yup.object().shape({
  title: yup.string().required('Title is required').max(150, 'Title must be less than 150 characters'),
  releaseDate: yup.date().required('Release date is required'),
});

export const PageUpdateBook = () => {
  let navigate = useNavigate();
  let {id} = useParams();

  const { handleUpdateBook, books } = useLibrary();

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(validations),
  });

  const currentBook = books.find(book => book.id === id);
  useEffect(() => {
    reset({ title: currentBook.title, releaseDate: currentBook.releaseDate })

  }, [currentBook, reset]);

  const updateBook = (data) => {
    const date = `${data.releaseDate.getFullYear()}-${data.releaseDate.getMonth() + 1}-${data.releaseDate.getDate()}`;
    const book = {
      ...currentBook,
      releaseDate: date,
      title: data.title,
    }

    handleUpdateBook(book);
    navigate("/books");
  };

  return (
    <>
      <S.Header>
        <S.LogoWrapper>
          <Logo />
        </S.LogoWrapper>
      </S.Header>
      <S.Main>
        <S.Container>
          <S.ButtonPrev onClick={() => navigate("/books")} />

          <S.Heading>Update book</S.Heading>

          <form onSubmit={handleSubmit(updateBook)}>
            <S.InputGroup>
              <S.Label>Title</S.Label>
              <input type="text" name="title" {...register("title")} />
              <S.ErrorMessage>{errors.title?.message}</S.ErrorMessage>
            </S.InputGroup>
            <S.InputGroup>
              <S.Label>Release date:</S.Label>
              <input type="date" name="releaseDate" {...register("releaseDate")} />
              <S.ErrorMessage>{errors.releaseDate?.message}</S.ErrorMessage>
            </S.InputGroup>

            <S.ButtonSave type="submit"/>
          </form>
        </S.Container>
      </S.Main>
    </>
  );
}
