import React from 'react';
import { Formik, FormikHelpers, FormikProps } from 'formik';

export type AppFormEventHandle = FormikProps<Record<string, unknown>>;

export type AppFormProps = {
  initialValues: Record<string, unknown>;
  validationSchema?: unknown | (() => unknown);
  children: React.ReactNode | React.ReactNode[];
  onSubmit?: (
    values: Record<string, unknown>,
  ) => Promise<{ success: boolean; errors: Record<string, string[]> }>;
};

export const AppForm = React.forwardRef<AppFormEventHandle, AppFormProps>(
  (
    { initialValues, children, validationSchema, onSubmit }: AppFormProps,
    ref,
  ): JSX.Element => {
    return (
      <Formik
        innerRef={ref}
        initialValues={initialValues}
        validationSchema={validationSchema}
        enableReinitialize
        onSubmit={async (
          values: Record<string, unknown>,
          { setSubmitting, setErrors }: FormikHelpers<Record<string, unknown>>,
        ) => {
          console.log('Form values', { values });

          const modifiedValues = { ...values };

          try {
            if (onSubmit) {
              const { success, errors } = await onSubmit(modifiedValues);
              console.log('Form response', { success, errors });

              const { message, ...fieldErrors } = errors;
              if (fieldErrors && Object.keys(fieldErrors).length) {
                const formErrors: Record<string, string> = {};
                Object.keys(fieldErrors).forEach((x) => {
                  formErrors[x] = fieldErrors[x].join(', ');
                });
                setErrors(formErrors);
              }
            }
          } catch (error: unknown) {
            console.error('Error occurred while submitting form', { error });
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ handleSubmit, handleReset }) => (
          <form onSubmit={handleSubmit} onReset={handleReset}>
            {children}
          </form>
        )}
      </Formik>
    );
  },
);
