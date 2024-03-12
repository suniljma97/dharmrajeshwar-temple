import { useRef } from 'react';
import { LoginFormFields } from './loginFields';
import { AppForm } from '../../../../components/appForm';

export const LoginForm = (): JSX.Element => {
  const formRef = useRef(null);
  console.log(formRef);

  return (
    <AppForm
      ref={formRef}
      initialValues={{ email: '' }}
      onSubmit={async (
        values: Record<string, unknown>,
      ): Promise<{ success: boolean; errors: Record<string, string[]> }> => {
        const modifiedValues = { ...values };
        console.log({ modifiedValues });

        return {
          success: false,
          errors: {},
        };
      }}
    >
      <LoginFormFields />
    </AppForm>
  );
};
