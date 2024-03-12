import { AppInput } from '../../../../components/appInput';

export const LoginFormFields = (): JSX.Element => {
  return (
    <div className="bg-gray-600 py-20">
      <AppInput name="email" placeholder="email" outline="none" className="" />
    </div>
  );
};
