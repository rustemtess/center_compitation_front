import Header from "@/components/Header";
import ContainerLayout from "@/layouts/ContainerLayout";
import MainLayout from "@/layouts/MainLayout";
import Shop from "@/assets/img/shop.png";
import { useTranslation } from "react-i18next";
import { Icon24SquareStackUpOutline } from "@vkontakte/icons";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { IProduct } from "@/interfaces/Product";

const ShopPage = () => {
  const { t, i18n } = useTranslation();
  const [products, setProducts] = useState<Array<IProduct>>();

  const getProducts = async () => {
    const formData = new FormData();
    formData.append("type", "product");
    formData.append("method", "list");
    formData.append("lang", i18n.language.toLowerCase());
    await fetch("https://center-competence.choices.kz/api/", {
      method: "POST",
      body: formData,
    }).then(async (response) => setProducts(await response.json()));
  };

  useEffect(() => {
    getProducts();
  }, [i18n.language]);

  const deleteProduct = async (id: number) => {
    const formData = new FormData();
    formData.append("type", "product");
    formData.append("method", "delete");
    formData.append("id", String(id));
    await fetch("https://center-competence.choices.kz/api/", {
      method: "POST",
      body: formData,
    });
    await getProducts();
  };

  return (
    <ContainerLayout>
      <Header pageId={3} />
      <MainLayout className="flex-1 flex flex-col gap-[5em] sm:pt-[8em] pt-[3em] px-4">
        <div className="w-full flex justify-center items-center p-1 gap-8 flex-wrap">
          <img src={Shop} width={380} />
          <div className="w-full max-w-[800px] flex flex-col gap-3">
            <h1 className="text-4xl font-semibold text-gray-700">
              {t("shopTitle")}
            </h1>
            <p className="text-xl">{t("shopInfo")}</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6">
          <h1 className="sm:text-2xl text-xl font-medium text-gray-800 flex items-center gap-2.5">
            <Icon24SquareStackUpOutline color="black" />
            <>{t("shopCategory")}</>
          </h1>
          <div className="flex flex-wrap gap-6 w-full justify-center">
            {products &&
              products.map((product) => {
                const img =
                  product.product_img !== ""
                    ? JSON.parse(product.product_img).uploaded_files[0]
                    : "";
                return (
                  <div
                    key={product.product_id}
                    className="bg-white flex h-inherit w-[320px] flex-col justify-between items-center gap-0 border border-[transparent]  rounded-md p-3"
                  >
                    <img
                      className="m-auto"
                      width={250}
                      height={280}
                      src={
                        "https://center-competence.choices.kz/api/files/" + img
                      }
                    />
                    <div className="flex flex-col w-full">
                      <p className="mt-6 ml-1.5 text-gray-500 text-sm">
                        {t("shopProductTitle")}
                      </p>
                      <h2 className="text-gray-700 text-lg ml-1.5">
                        {product.product_title}
                      </h2>
                      {/** <h1 className='text-gray-900 text-xl ml-1.5 mb-1.5'>9,000 ₸</h1> */}
                      <Link
                        state={product}
                        to={"/product/" + product.product_id}
                        className="bg-[rgba(0,0,0,0.9)] text-white p-2 rounded-md text-center mt-2 text-sm"
                      >
                        {t("shopGoToProduct")}
                      </Link>
                      {localStorage.getItem("isAuthed") && (
                        <Link
                          to={"/product/edit/" + product.product_id}
                          className="bg-orange-500 text-white p-2 rounded-md text-sm mt-1 text-center"
                        >
                          Редактировать
                        </Link>
                      )}
                      {localStorage.getItem("isAuthed") && (
                        <button
                          onClick={() => deleteProduct(product.product_id)}
                          className="bg-red-500 text-white p-2 rounded-md text-sm mt-1"
                        >
                          Удалить товар
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </MainLayout>
      <Footer />
    </ContainerLayout>
  );
};

export default ShopPage;
