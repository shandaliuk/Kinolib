import { Formik } from 'formik';
import { toast } from 'react-toastify';
import { register } from 'redux/auth/authApi';
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
} from '../Login/Login.styled';

const Register = () => {
  const isPresent = useIsPresent();

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

export default Register;
