import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Field, Form } from 'formik';
import font from 'images/font.jpg';

export const AuthSection = styled.section`
  min-height: 100vh;
  padding-top: 230px;
  padding-bottom: 40px;
  background-image: url(${font});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;

  @media screen and (min-width: 768px) {
    padding-bottom: 60px;
  }
`;

export const AuthTitle = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  font-size: 30px;
  font-weight: 100;
  text-transform: uppercase;
`;

export const AuthForm = styled(Form)`
  margin: 0 auto;
  padding: 40px 20px 20px 20px;
  width: 280px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  align-items: center;
  text-align: center;
  background-color: rgba(3, 10, 2, 0.85);
  box-shadow: ${props => props.theme.shadows.box};
`;

export const AuthInput = styled(Field)`
  width: 100%;
  background-color: transparent;
  border: none;
  font-size: 14px;
  font-weight: 200;
  line-height: 1.14;
  color: ${props => props.theme.colors.primary};
  outline: none;
  border-bottom: 1px solid ${props => props.theme.colors.primary};

  &::placeholder {
    font-size: 14px;
    line-height: 1.14;
    color: #ffffff4f;
  }
`;

export const AuthSubmitButton = styled(motion.button)`
  padding: 5px;
  width: 100px;
  font-family: inherit;
  font-weight: 200;
  font-size: 12px;
  line-height: 1.33;
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.colors.primary};
  text-shadow: ${props => props.theme.shadows.text};
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.primary};
  outline: none;
  transition: background ${props => props.theme.transitions.main},
    border ${props => props.theme.transitions.main},
    color ${props => props.theme.transitions.main};

  &:hover,
  &:focus {
    background: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.secondary};
    border: 1px solid transparent;
  }

  @media screen and (min-width: 768px) {
    padding: 5px 10px 5px 10px;
  }
`;

export const AuthLink = styled(Link)`
  margin-top: 20px;
  color: ${props => props.theme.colors.primary};
  font-weight: 200;
  transition: color ${props => props.theme.transitions.main};

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accent};
  }
`;
