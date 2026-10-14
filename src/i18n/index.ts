import spanish from './es';
import english from './en';


const LANGUAGES = {
    SPANISH: "es",
    ENGLISH: "en"
}

export const getI18N = ({currentLocale = 'es'}:{currentLocale?:string}) => {
    if(currentLocale === LANGUAGES.SPANISH) return spanish;
    if(currentLocale === LANGUAGES.ENGLISH) return english;
    return spanish;
}