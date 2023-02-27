import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register } from 'redux/auth/authApi';
import { HomeHeader } from 'components/HomeHeader/HomeHeader';

export const Register = () => {
  const handleSubmit = async (values, actions) => {
    try {
      await register(values.email, values.password);
      toast.success('Successfull registration!');
    } catch (error) {
      toast.error('The user already exists!');
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
      <Link to="/login">Here</Link>
    </>
  );
};
