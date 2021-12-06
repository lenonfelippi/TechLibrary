import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

import * as S from '../styles';
import { Logo } from '@componentes/Logo';
import { useLibrary } from '@contexts/LibraryContext';

const validations = yup.object().shape({
  format: yup.number().required('Format is required'),
  title: yup.string().required('Title is required').max(150, 'Title must be less than 150 characters'),
  releaseDate: yup.date().required('Release date is required'),
  shelf: yup.string().required('Shelf is required'),
});

export const PageCreateBook = () => {
  let navigate = useNavigate();
  const { newBookOptions, handleCreateBook, shelfs } = useLibrary();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validations),
  });

  const createNewBook = (data) => {
    const date = `${data.releaseDate.getFullYear()}-${data.releaseDate.getMonth() + 1}-${data.releaseDate.getDate()}`;
    const newBook = {
      id: uuidv4(),
      title: data.title,
      releaseDate: date,
      ...newBookOptions[data.format],
    }

    handleCreateBook(newBook, data.shelf);
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

          <S.Heading>Create new book</S.Heading>

          <form onSubmit={handleSubmit(createNewBook)}>
            <S.InputGroup>
              <S.Label>Book Format</S.Label>
              <S.BookOptions>
                {newBookOptions.map( (item, index) => (
                  <S.Option key={index}>
                    <label>
                      <input type="radio" name="format" value={index} {...register("format")} />
                      <img src={`/books/${item.image}`} alt={item.color} />
                      {item.color}
                    </label>
                  </S.Option>
                  ))}
              </S.BookOptions>
              <S.ErrorMessage>{errors.format?.message}</S.ErrorMessage>
            </S.InputGroup>
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
            
            <S.InputGroup>
              <S.Label>Put on which shelf?</S.Label>
              {Object.entries(shelfs).map( ([id, shelf]) => (
                <label key={id}>
                  <input type="radio" name="shelf" value={id} {...register("shelf")} />
                  {shelf.name}
                </label>
              ))}
              <S.ErrorMessage>{errors.shelf?.message}</S.ErrorMessage>
            </S.InputGroup>

            <S.ButtonSave type="submit" />
          </form>
        </S.Container>
      </S.Main>
    </>
  );
}
