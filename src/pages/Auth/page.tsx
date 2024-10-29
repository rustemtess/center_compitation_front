import Header from "@/components/Header";
import ContainerLayout from "@/layouts/ContainerLayout";
import MainLayout from "@/layouts/MainLayout";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {

    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isError, setIsError] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('isAuthed')) navigate('/');
    }, []);

    const handleLogin = () => {
        if(login === 'admin' && password === 'admin') {
            localStorage.setItem('isAuthed', 'true');
            setIsError(false);
            navigate('/');
        } else {
            setIsError(true);
        }
    };

    return (
        <ContainerLayout className="h-svh">
            <Header />
            <MainLayout className='flex flex-col items-center justify-center h-full'>
                <div className='flex flex-col justify-center items-center max-w-[400px] w-full gap-2 h-fit'>
                    <h1 className='text-2xl font-medium text-gray-800'>Войдите в свой аккаунт</h1>
                    <input onChange={(e) => setLogin(e.target.value)} placeholder='Введите логин' className='w-full outline-none border p-2 mt-5' />
                    <input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Введите пароль' className='w-full outline-none border p-2' />
                    <button onClick={() => handleLogin()} className='bg-[rgba(0,0,0,0.9)] hover:bg-[rgba(0,0,0,0.8)] text-white p-3 rounded-md w-full'>
                        Авторизоваться
                    </button>
                    { isError && <p className='bg-red-300 text-red-900 p-2 px-3 rounded-md mt-2'>Неправильный логин или пароль</p> }
                </div>
            </MainLayout>
        </ContainerLayout>
    );
};

export default AuthPage;