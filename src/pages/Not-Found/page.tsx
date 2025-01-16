import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ContainerLayout from "@/layouts/ContainerLayout";
import MainLayout from "@/layouts/MainLayout";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <ContainerLayout className="">
      <Header />
      <MainLayout className="flex-1 flex flex-col gap-4 justify-center items-center">
        <h1 className="text-2xl">404 Page not found</h1>
        <Link to={"/"} className="text-gray-600 hover:text-blue-600">
          {t("back")}
        </Link>
      </MainLayout>
      <Footer />
    </ContainerLayout>
  );
};

export default NotFound;
