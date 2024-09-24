import { useState } from "react";
import { Langugages } from "./language.type";

const SelectLanguage = () => {

    const [isShowLanguagePane, setShowLanguagePane] = useState<boolean>(false);
    const [selectedLanguage, setSelectLangugage] = useState<Langugages>(Langugages.RU);

    const LanguagePane = () => {
        return (
            <div className='absolute bg-white right-0 mt-2 p-3 rounded-md border border-gray-100'>
                { Object.values(Langugages).map( lang => {
                    return (lang !== selectedLanguage) ? (
                        <button key={lang}
                            onClick={ () => {
                                setSelectLangugage(lang as Langugages)
                                setShowLanguagePane(prev => !prev)
                            } } 
                            className='px-3 py-1 w-full text-left rounded hover:bg-gray-100'
                        >{ lang }</button>
                    ) : null;
                } ) }
            </div>
        );
    };

    return (
        <div className='relative'>
            <button className='p-1 hover:text-blue-600' onClick={
                () => setShowLanguagePane(prev => !prev)
            }>{
                Object
                    .keys(Langugages)
                    .find( 
                        key => Object(Langugages)[key] === selectedLanguage 
                    )
              }</button>
            { isShowLanguagePane && <LanguagePane /> }
        </div>
    );
    
};

export default SelectLanguage;