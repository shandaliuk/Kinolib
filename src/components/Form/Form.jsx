import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import sprite from 'images/sprite.svg';
import {
  FormWrapper,
  Input,
  SubmitButton,
  SearchIcon,
  ErrorText,
} from './Form.styled';

export const HeaderForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (values, actions) => {
    navigate(`/movies/${values.query}`);
    actions.resetForm();
  };

  return (
    <>
      <Formik initialValues={{ query: '' }} onSubmit={handleSubmit}>
        <Form>
          <FormWrapper>
            <Input
              type="text"
              autoComplete="off"
              placeholder="Movie search"
              name="query"
            />
            <SubmitButton type="submit">
              <SearchIcon>
                <use href={sprite + '#icon-search'}></use>
              </SearchIcon>
            </SubmitButton>
          </FormWrapper>
          {false && (
            <ErrorText>
              Search result not successful. Enter the correct movie name and try
              again.
            </ErrorText>
          )}
        </Form>
      </Formik>
    </>
  );
};
