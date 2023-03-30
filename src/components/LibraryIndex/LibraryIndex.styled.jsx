import styled from 'styled-components';
import font from 'images/font.jpg';
import { MdOutlineLocalMovies } from 'react-icons/md';
import { VscLibrary } from 'react-icons/vsc';

export const LibrarySection = styled.section`
  min-height: 100vh;
  padding-top: 230px;
  padding-bottom: 40px;
  background-image: url(${font});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
`;

export const LibraryWrapper = styled.div`
  background-color: rgba(3, 10, 2, 0.85);
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const LibraryIcon = styled(VscLibrary)`
  display: inline-block;
  margin-right: 30px;
`;

export const LibraryMovieIcon = styled(MdOutlineLocalMovies)`
  display: inline-block;
  margin-right: 30px;
`;
