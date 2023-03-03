import styled from 'styled-components';
import { Field } from 'formik';

export const FormWrapper = styled.div`
  display: flex;
  border-bottom: 0.5px solid ${props => props.theme.colors.primary};
  transition: border-bottom ${props => props.theme.transitions.main};

  @media screen and (min-width: 768px) {
    width: 336px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1280px) {
    width: 394px;
  }

  &:focus-within {
    border-bottom: 1px solid ${props => props.theme.colors.accent};
  }
`;

export const Input = styled(Field)`
  width: 100%;
  background-color: transparent;
  border: none;
  font-size: 14px;
  font-weight: 200;
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
  font-weight: 200;
  line-height: 1.14;
  color: ${props => props.theme.colors.error};

  @media screen and (min-width: 768px) {
    margin-top: 20px;
    text-align: center;
  }
`;
