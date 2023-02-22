import sprite from 'images/sprite.svg';
import { SitePagination, PaginationIcon } from './Pagination.styled';

export const Pagination = ({ onClick, pageCount = 20 }) => {
  return (
    <SitePagination
      breakLabel="..."
      nextLabel={
        <PaginationIcon>
          <use href={sprite + '#icon-arrow-right'}></use>
        </PaginationIcon>
      }
      onClick={onClick}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel={
        <PaginationIcon>
          <use href={sprite + '#icon-arrow-left'}></use>
        </PaginationIcon>
      }
      marginPagesDisplayed={1}
      renderOnZeroPageCount={null}
    />
  );
};
