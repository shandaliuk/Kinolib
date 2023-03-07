import { Formik } from 'formik';
import { toast } from 'react-toastify';
import { register } from 'redux/auth/authApi';
import { HomeHeader } from 'components/HomeHeader/HomeHeader';
import { Container } from 'components/Container/Container';
import {
  AuthSection,
  AuthTitle,
  AuthForm,
  AuthInput,
  AuthSubmitButton,
  AuthLink,
} from '../Login/Login.styled';

export const Register = () => {
  const handleSubmit = async (values, actions) => {
    try {
      await register(values.email, values.password);
      toast.success('Successfull registration!');
    } catch (error) {
      console.log(error);
      toast.error('The user already exists!');
    }

    actions.resetForm();
  };

  return (
    <>
      <HomeHeader />
      <main>
        <AuthSection>
          <Container>
            <AuthTitle>Sign up</AuthTitle>
            <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={handleSubmit}
            >
              <AuthForm>
                <AuthInput
                  type="email"
                  autoComplete="off"
                  placeholder="Email"
                  name="email"
                />
                <AuthInput
                  type="password"
                  autoComplete="off"
                  placeholder="Password"
                  name="password"
                />
                <AuthSubmitButton type="submit">Register</AuthSubmitButton>
              </AuthForm>
            </Formik>
            <AuthLink to="/login">Already registered?</AuthLink>
          </Container>
        </AuthSection>
      </main>
    </>
  );
};
