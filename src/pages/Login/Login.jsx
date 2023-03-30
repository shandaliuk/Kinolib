import { Formik } from 'formik';
import { toast } from 'react-toastify';
import { logIn } from 'redux/auth/authApi';
import { useIsPresent } from 'framer-motion';
import { motion } from 'framer-motion';
import { HomeHeader } from 'components/HomeHeader/HomeHeader';
import { Container } from 'components/Container/Container';
import {
  AuthSection,
  AuthTitle,
  AuthForm,
  AuthInput,
  AuthSubmitButton,
  AuthLink,
} from './Login.styled';

const Login = () => {
  const isPresent = useIsPresent();

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
                <AuthSubmitButton
                  type="submit"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 1 }}
                >
                  Log in
                </AuthSubmitButton>
              </AuthForm>
            </Formik>
            <AuthLink to="/register">Don't have an account?</AuthLink>
          </Container>
        </AuthSection>
      </main>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: 'circOut' } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: 'circIn' } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
    </>
  );
};

export default Login;
