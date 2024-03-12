import { Field } from 'formik';
type InputSize = 'xs' | 'sm' | 'md' | 'lg';
export type AppInputProps = {
  name: string;
  placeholder: string;
  className?: string;
  type?: 'text' | 'password';
  size?: InputSize;
  outline?: string;
  px?: number;
  py?: number;
  roundedSize?: InputSize;
};

export const AppInput = ({
  type,
  roundedSize = 'md',
  px = 5,
  py = 3,
  placeholder,
  outline = 'none',
  size = 'md',
  className = '',
  name,
}: AppInputProps): JSX.Element => {
  return (
    <Field
      type={type}
      className={`w-full rounded-${roundedSize} py-${py} px-${px} border text-${size} outline-${outline} ${className}`}
      name={name}
      placeholder={placeholder}
    />
  );
};
