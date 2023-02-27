import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { logIn } from 'redux/auth/authApi';
import { HomeHeader } from 'components/HomeHeader/HomeHeader';

export const Login = () => {
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
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field
            type="text"
            autoComplete="off"
            placeholder="Email"
            name="email"
          />
          <Field
            type="text"
            autoComplete="off"
            placeholder="Password"
            name="password"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <Link to="/register">Here</Link>
    </>
  );
};
