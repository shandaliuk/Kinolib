import { Formik } from 'formik';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'redux/auth/authApi';
import { HomeHeader } from 'components/HomeHeader/HomeHeader';
import { Container } from 'components/Container/Container';
import { selectAuthStatus } from 'redux/auth/selectors';
import {
  AuthSection,
  AuthTitle,
  AuthForm,
  AuthInput,
  AuthSubmitButton,
  AuthLink,
} from './Login.styled';

export const Login = () => {
  const navigate = useNavigate();

  const authStatus = useSelector(selectAuthStatus);

  if (authStatus) {
    navigate('/library');
    return;
  }

  const handleSubmit = async (values, actions) => {
    try {
      await logIn(values.email, values.password);
      toast.success('Logged in!');
    } catch (error) {
      toast.error('Wrong e-mail/password!');
    }
    actions.resetForm();
  };

  return (
    <>
      <HomeHeader />
      <main>
        <AuthSection>
          <Container>
            <AuthTitle>Sign in</AuthTitle>
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
                <AuthSubmitButton type="submit">Log in</AuthSubmitButton>
              </AuthForm>
            </Formik>
            <AuthLink to="/register">Don't have an account?</AuthLink>
          </Container>
        </AuthSection>
      </main>
    </>
  );
};
