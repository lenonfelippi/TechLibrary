import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useLibrary } from '@contexts/LibraryContext';

import * as S from './styles';

export const Bookcase = () => {
  const { shelfs, setShelfs } = useLibrary();
  
  const onDragEnd = (result, shelfs, setShelfs) => {
    if (!result.destination) return;

    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceShelf = shelfs[source.droppableId];
      const destShelf = shelfs[destination.droppableId];
      const sourceBooks = [...sourceShelf.books];
      const destBooks = [...destShelf.books];
      const [removed] = sourceBooks.splice(source.index, 1);

      destBooks.splice(destination.index, 0, removed);
      setShelfs({
        ...shelfs,
        [source.droppableId]: {
          ...sourceShelf,
          books: sourceBooks,
        },
        [destination.droppableId]: {
          ...destShelf,
          books: destBooks,
        },
      });

    } else {
      const shelf = shelfs[source.droppableId];
      const copiedBooks = [...shelf.books];
      const [removed] = copiedBooks.splice(source.index, 1);

      copiedBooks.splice(destination.index, 0, removed);
      setShelfs({
        ...shelfs,
        [source.droppableId]: {
          ...shelf,
          books: copiedBooks,
        }
      });
    }
  };

  return (
    <S.Content>
      <DragDropContext onDragEnd={result => onDragEnd(result, shelfs, setShelfs)}>
        {Object.entries(shelfs).map( ([id, shelf]) => {
          return (
            <Droppable droppableId={id} key={id} direction="horizontal">
              {(provided, snapshot) => {
                return (
                  <S.Shelf
                    ref={provided.innerRef}
                    attributes={provided.droppableProps}
                    isDraggingOver={snapshot.isDraggingOver}
                    reverse={shelf.reverse}
                  >
                    {shelf.books.map((book, index) => {
                      return (
                        <Draggable key={book.id} draggableId={book.id} index={index}>
                          {(provided) => (
                            <S.Book
                              ref={provided.innerRef}
                              attributes={{
                                ...provided.draggableProps,
                                ...provided.dragHandleProps,
                                style: provided.draggableProps.style,
                              }}
                            >
                              <img src={`/books/${book.image}`} alt={`Book with the title ${book.title}`} />
                            </S.Book>
                          )}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </S.Shelf>
                );
              }}
            </Droppable>
          );
        })}
      </DragDropContext>
    </S.Content>
  );
}
