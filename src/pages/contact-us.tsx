import React from 'react';
import { Formik } from 'formik';
import { observer } from 'mobx-react';
import { Button, Form, Input } from 'semantic-ui-react';

import { appStore } from '../store';

interface Props {}

@observer
export class ContactUs extends React.Component<Props> {
  render() {
    return (
      <div style={{ padding: 30 }}>
        <h1>Contact Us</h1>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          onSubmit={(values) => {
            appStore.guests.push(values);
            (this.props as any).history.push('/dashboard');
          }}
        >
          {({ values, handleChange, handleBlur, handleSubmit, resetForm }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Field>
                <label>Nama</label>
                <Input name="name" onChange={handleChange} onBlur={handleBlur} value={values.name} />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <Input name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
              </Form.Field>
              <Form.Field>
                Pesan: <Input name="message" onChange={handleChange} onBlur={handleBlur} value={values.message} />
              </Form.Field>
              <Button type="submit" primary>Submit</Button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}
