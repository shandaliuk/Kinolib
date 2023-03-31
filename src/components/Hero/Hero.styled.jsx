import styled from 'styled-components';
import { motion } from 'framer-motion';
import { BsStarFill } from 'react-icons/bs';

export const HeroSection = styled.section`
  display: flex;
  align-items: flex-end;
  height: 95vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  font-weight: 200;
`;

export const MovieTitle = styled.h1`
  font-weight: 100;
  font-size: 30px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.accent};

  @media screen and (min-width: 768px) {
    font-size: 40px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 50px;
  }
`;

export const MovieData = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  font-weight: 200;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    row-gap: 0px;
    column-gap: 20px;
    font-size: 16px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const StarIcon = styled(BsStarFill)`
  display: inline-block;
`;

export const Score = styled.span`
  display: inline-block;
  padding: 0px 10px;
  border-radius: 3px;
  background-color: ${props => props.theme.colors.accent};
  color: #030a02;
  text-align: center;
`;

export const Rating = styled.p`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const Dot = styled.span`
  color: ${props => props.theme.colors.accent};
  margin-right: 10px;
`;

export const Overview = styled.p`
  font-size: 12px;
  color: ${props => props.theme.colors.accent};

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const ButtonMore = styled(motion.button)`
  width: 110px;
  padding: 5px 10px;
  font-family: inherit;
  font-weight: 200;
  font-size: 14px;
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
    /* width: 125px;
    padding-top: 14px;
    padding-bottom: 12px; */
  }

  @media screen and (min-width: 768px) {
    /* width: 136px; */
  }
`;
