import { Select, Option } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const AppLanguageSelector = (): JSX.Element => {
  const { i18n } = useTranslation();
  const [value, setValue] = useState(i18n.language);

  const languages = [
    { code: 'en', lang: 'English' },
    { code: 'hi', lang: 'Hindi' },
  ];

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  const changeLanguage = (lng?: string): void => {
    setValue(lng || 'en');
    i18n.changeLanguage(lng);
  };
  return (
    <div className="w-50">
      <Select
        label="Select a language"
        value={value}
        onChange={changeLanguage}
        placeholder="Select.."
      >
        {languages.map(({ code, lang }) => (
          <Option value={code}>{lang}</Option>
        ))}
      </Select>
    </div>
  );
};
