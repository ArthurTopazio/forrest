import { LanguagesType } from 'models/state/store/AppToolsStore';
import vectorCollection from 'consts/vectors';

export type LanguageSelectType = {
  shortName: LanguagesType,
  fullName: string,
  flagSrc: string | undefined,
};

const LanguageSelectData: LanguageSelectType[] = [
  { shortName: 'en', fullName: 'English', flagSrc: vectorCollection.englandFlag },
  { shortName: 'fi', fullName: 'Finnish', flagSrc: vectorCollection.finnlandFlag },
];

export default LanguageSelectData;
