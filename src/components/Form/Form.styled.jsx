import styled from 'styled-components';
import { Field } from 'formik';

export const FormWrapper = styled.div`
  display: flex;
  padding: 5px;
  transition: border-bottom ${props => props.theme.transitions.main};
  border: 2px solid ${props => props.theme.colors.tertiary};
  box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 1);

  @media screen and (min-width: 768px) {
    width: 336px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1280px) {
    width: 394px;
  }

  &:focus-within {
    background-color: ${props => props.theme.colors.accent};
  }
`;

export const Input = styled(Field)`
  width: 100%;
  background-color: transparent;
  border: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.14;
  color: ${props => props.theme.colors.primary};
  outline: none;

  &::placeholder {
    font-size: 14px;
    line-height: 1.14;
    color: #ffffff4f;
  }
`;

export const SubmitButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => props.theme.colors.primary};
  transition: color ${props => props.theme.transitions.main};
  outline: none;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accent};
  }
`;

export const SearchIcon = styled.svg`
  width: 12px;
  height: 12px;
`;

export const ErrorText = styled.p`
  display: block;
  margin-top: 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.14;
  color: ${props => props.theme.colors.error};

  @media screen and (min-width: 768px) {
    margin-top: 20px;
    text-align: center;
  }
`;
