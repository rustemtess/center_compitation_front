import MainLayout from "@/layouts/MainLayout";
import { Link } from "react-router-dom";

const NotFound = () => {

    return (
        <MainLayout className='flex flex-col justify-center items-center gap-1.5'>
            <h1 className='text-2xl'>Oops, page not found!</h1>
            <Link to={'/'} className='text-gray-600 hover:text-blue-600'>Назад</Link>
        </MainLayout>
    );

};

export default NotFound;