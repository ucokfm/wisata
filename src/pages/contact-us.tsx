import React from 'react';
import { Formik } from 'formik';

interface Props {}

export class ContactUs extends React.Component<Props> {
  render() {
    return (
      <div>
        <h1>Contact Us</h1>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          onSubmit={(values) => {
            console.log({ values });
          }}
        >
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div>
                Nama: <input name="name" onChange={handleChange} onBlur={handleBlur} value={values.name} />
              </div>
              <div>
                Email: <input name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
              </div>
              <div>
                Pesan: <textarea name="message" onChange={handleChange} onBlur={handleBlur} value={values.message} />
              </div>
              <button type="submit">Submit</button>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}
