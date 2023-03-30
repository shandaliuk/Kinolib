import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const SitePagination = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }

  li {
    position: relative;
    width: 40px;
    height: 40px;

    &.selected {
      color: ${props => props.theme.colors.accent};
      border: 1px solid ${props => props.theme.colors.accent};
      pointer-events: none;
    }

    &.next,
    &.previous {
      background-color: transparent;

      &:hover,
      &:focus {
        color: ${props => props.theme.colors.accent};
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
    font-weight: 200;
    font-size: 12px;
    line-height: 1.33;
  }

  a:hover,
  &:focus {
    background-color: rgb(224, 234, 210, 0.3);
    color: ${props => props.theme.colors.card};
  }
`;

export const PaginationIcon = styled.svg`
  width: 16px;
  height: 16px;
`;
