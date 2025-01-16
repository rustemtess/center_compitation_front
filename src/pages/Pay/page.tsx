import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ContainerLayout from "@/layouts/ContainerLayout";
import MainLayout from "@/layouts/MainLayout";
import { getWithExpiry } from "@/modules/cookie";
import { useEffect } from "react";

const PayPage = () => {
  useEffect(() => {
    if (!getWithExpiry("access_token") && !getWithExpiry("v")) {
      document.location.href = "/";
    }
  }, []);

  if (!getWithExpiry("access_token") && !getWithExpiry("v"))
    document.location.href = "/";

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("v");
    document.location.href = "/";
  };

  return (
    <ContainerLayout>
      <Header />
      <MainLayout className="flex-1 flex flex-col gap-4 justify-center items-center">
        <h4 className="text-lg bg-orange-100 text-orange-600 p-2 px-4 rounded-lg">
          У вас нету доступа к игре
        </h4>
        <button
          onClick={() => logout()}
          className="bg-black text-white p-2 px-4 rounded-lg text-lg"
        >
          Выйти из аккаунта
        </button>
      </MainLayout>
      <Footer />
    </ContainerLayout>
  );
};

export default PayPage;
