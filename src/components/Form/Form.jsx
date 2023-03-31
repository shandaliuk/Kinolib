import { Formik, Form } from 'formik';
import { useSearchParams } from 'react-router-dom';
import sprite from 'images/sprite.svg';
import { FormWrapper, Input, SubmitButton, SearchIcon } from './Form.styled';

export const HeaderForm = () => {
  const [, setSearchParams] = useSearchParams();

  const handleSubmit = (values, actions) => {
    setSearchParams({ query: values.query, page: 1 });
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
        </Form>
      </Formik>
    </>
  );
};
