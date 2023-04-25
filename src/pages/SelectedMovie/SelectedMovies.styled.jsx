import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SelectedMovieSection = styled.section`
  display: flex;
  padding-top: 170px;
  justify-content: center;
  height: 95vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const MovieWrapper = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    column-gap: 30px;
  }
`;

export const MovieImage = styled.img`
  width: 280px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const SelectedMovieTitle = styled.h2`
  font-weight: 100;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 34px;
  }
`;

export const SelectedMovieReleaseDate = styled.p`
  font-weight: 200;
  color: ${props => props.theme.colors.accent};
`;

export const SelectedMovieCountries = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-weight: 200;
  column-gap: 10px;
  color: ${props => props.theme.colors.accent};
`;

export const SelectedMovieCountry = styled.li`
  &:nth-child(2n + 1) {
    color: ${props => props.theme.colors.accent};
  }
`;

export const SelectedMovieCompanies = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-weight: 200;
  column-gap: 10px;
`;

export const SelectedMovieCompany = styled.li`
  &:nth-child(2n + 2) {
    color: ${props => props.theme.colors.accent};
  }
`;

export const SelectedMovieGenres = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  font-weight: 200;
`;

export const SelectedMovieGenre = styled.li`
  &:nth-child(2n + 1) {
    color: ${props => props.theme.colors.accent};
  }
`;

export const SelectedMovieOverviews = styled.p`
  font-weight: 200;
  color: ${props => props.theme.colors.accent};
`;

export const SelectedMovieRuntime = styled.p`
  font-weight: 200;
`;

export const UserScore = styled.span`
  display: inline-block;
  width: 36px;
  height: 16px;
  border-radius: 2px;
  background-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.secondary};
  text-align: center;
`;

export const Popularity = styled.span`
  color: ${props => props.theme.colors.accent};
`;

export const SelectedMoviePopularity = styled.p`
  font-weight: 200;
`;

export const SelectedMovieScore = styled.p`
  font-weight: 200;
`;

export const ModalButtonList = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

export const WatchedModalButton = styled(motion.button)`
  width: 110px;
  padding: 5px 10px;
  font-family: inherit;
  font-weight: 200;
  font-size: 12px;
  line-height: 1.33;
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.colors.primary};
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.primary};
  outline: none;
  transition: background ${props => props.theme.transitions.main},
    border ${props => props.theme.transitions.main},
    color ${props => props.theme.transitions.main};

  &:hover,
  &:focus {
    background: ${props => props.theme.colors.accent};
    color: #030a02;
    border: 1px solid transparent;
  }

  @media screen and (min-width: 768px) {
    width: 125px;
    padding-top: 14px;
    padding-bottom: 12px;
  }

  @media screen and (min-width: 768px) {
    width: 136px;
    padding-top: 14px;
    padding-bottom: 12px;
  }
`;

export const QueueModalButton = styled(motion.button)`
  width: 110px;
  padding: 13px 0px;
  font-family: inherit;
  font-weight: 200;
  font-size: 12px;
  line-height: 1.33;
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.colors.primary};
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.primary};
  outline: none;
  transition: background ${props => props.theme.transitions.main},
    border ${props => props.theme.transitions.main},
    color ${props => props.theme.transitions.main};

  &:hover,
  &:focus {
    background: ${props => props.theme.colors.accent};
    color: #030a02;
    border: 1px solid transparent;
  }

  @media screen and (min-width: 768px) {
    width: 125px;
    padding-top: 14px;
    padding-bottom: 12px;
  }

  @media screen and (min-width: 768px) {
    width: 136px;
    padding-top: 14px;
    padding-bottom: 12px;
  }
`;
