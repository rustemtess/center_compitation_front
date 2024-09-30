import { FC, useState } from "react";
import { Langugages } from "./language.type";
import { useTranslation } from "react-i18next";
import { ISelectLanguage } from "./selectlanguage.interface";

const SelectLanguage: FC<ISelectLanguage> = ( { isMobile = false } ) => {

    const [isShowLanguagePane, setShowLanguagePane] = useState<boolean>(false);
    const { i18n } = useTranslation();

    const getCurrentLangKey = (lang: Langugages) => {
        return Object
                .keys(Langugages)
                .find( 
                    key => Object(Langugages)[key] === lang
                );
    }

    const changeLanguage = (lang: Langugages): void => {
        i18n.changeLanguage(getCurrentLangKey(lang));
    };

    const LanguagePane = () => {
        return (
            <div className={ !isMobile ? 'absolute right-0 bg-white mt-2 p-3 rounded-md border border-gray-100' : 'mt-1' }>
                { Object.values(Langugages).map( lang => {
                    return <button key={lang}
                        onClick={ () => {
                            changeLanguage(lang as Langugages)
                            setShowLanguagePane(prev => !prev)
                        } } 
                        className={ `${!isMobile ? 'px-3 rounded hover:bg-gray-100' : null } py-1 w-full text-left ` }
                    >{ lang }</button>
                } ) }
            </div>
        );
    };

    return (
        <div className='relative'>
            <button className='hover:text-blue-600' onClick={
                () => setShowLanguagePane(prev => !prev)
            }>{
                i18n.language
              }</button>
            { isShowLanguagePane && <LanguagePane /> }
        </div>
    );
    
};

export default SelectLanguage;