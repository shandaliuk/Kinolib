import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

export const MoviesSection = styled.section`
  padding-top: 20px;
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;

export const HiddenTitle = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  border: 0;
  clip: rect(0 0 0 0);
`;

export const MoviesList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 32px;
    row-gap: 32px;
  }

  @media screen and (min-width: 1280px) {
    column-gap: 16px;
  }
`;

export const Pagination = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  li {
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 5px;

    &.selected {
      background-color: ${props => props.theme.colors.card};
      color: ${props => props.theme.colors.primary};
    }

    &.next,
    &.previous {
      background-color: ${props => props.theme.colors.pagination};

      &:hover,
      &:focus {
        color: ${props => props.theme.colors.primary};
      }
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
