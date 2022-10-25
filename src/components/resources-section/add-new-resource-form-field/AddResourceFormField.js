import styles from './AddResourceFormField.module.scss';
import { Field } from 'formik';

export const AddResourceFormField = ({
  errors,
  touched,
  fieldName,
  labelText,
}) => {
  const showError = errors[fieldName] && touched[fieldName];

  return (
    <div>
      <label htmlFor={fieldName} className={styles.label}>
        {labelText}
      </label>
      <Field
        name={fieldName}
        id={fieldName}
        type="text"
        className={styles.pInputText}
      />
      {showError && <div className={styles.error}>{errors[fieldName]}</div>}
    </div>
  );
};
