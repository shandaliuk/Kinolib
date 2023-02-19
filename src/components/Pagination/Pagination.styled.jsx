import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const SitePagination = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }

  li {
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 5px;

    &.selected {
      background-color: ${props => props.theme.colors.card};
      color: ${props => props.theme.colors.primary};
      pointer-events: none;
    }

    &.next,
    &.previous {
      background-color: ${props => props.theme.colors.pagination};

      &:hover,
      &:focus {
        color: ${props => props.theme.colors.primary};
      }
    }

    &.disabled {
      pointer-events: none;
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.33;
  }

  a:hover,
  &:focus {
    background-color: ${props => props.theme.colors.pagination};
    color: ${props => props.theme.colors.card};
  }
`;

export const PaginationIcon = styled.svg`
  width: 16px;
  height: 16px;
`;
