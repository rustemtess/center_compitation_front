import ContainerLayout from "@/layouts/ContainerLayout";
import { Link } from "react-router-dom";

const NotFound = () => {

    return (
        <ContainerLayout className='justify-center'>
            <h1 className='text-2xl'>Oops, page not found!</h1>
            <Link to={'/'} className='text-gray-600 hover:text-blue-600'>Назад</Link>
        </ContainerLayout>
    );

};

export default NotFound;