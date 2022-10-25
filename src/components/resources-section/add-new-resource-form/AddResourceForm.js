import React from 'react';
import { Formik, Form } from 'formik';
import { Button } from 'primereact/button';
import { SignupSchema } from './AddResourceFormSchema';
import { AddResourceFormField } from '../add-new-resource-form-field';

const AddResourceForm = ({ onHide, onSubmit }) => {
  const initialValues = {
    name: '',
    url: 'http://',
    user_id: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={SignupSchema}
    >
      {({ errors, touched, isValid, dirty }) => (
        <Form>
          <AddResourceFormField
            errors={errors}
            touched={touched}
            fieldName="name"
            labelText="Nombre"
          />
          <AddResourceFormField
            errors={errors}
            touched={touched}
            fieldName="url"
            labelText="Url"
          />
          <div>
            <Button
              type="button"
              label="Salir"
              icon="pi pi-times"
              onClick={onHide}
              className="p-button-text"
            />
            <Button
              type="submit"
              label="Guardar"
              icon="pi pi-check"
              disabled={!(isValid && dirty)}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddResourceForm;
