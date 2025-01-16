import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import { IService } from "@/interfaces/Services";
import ContainerLayout from "@/layouts/ContainerLayout";
import MainLayout from "@/layouts/MainLayout";
import { Icon24Cancel, Icon24PhoneOutline } from "@vkontakte/icons";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const { i18n, t } = useTranslation();
  const [services, setServices] = useState<Array<IService>>();
  const [loading, setLoading] = useState<boolean>(true);
  const [service, setService] = useState<IService>();
  const [isShowService, setIsShowService] = useState<boolean>(false);

  const getServices = async () => {
    const formData = new FormData();
    formData.append("type", "services");
    formData.append("method", "list");
    formData.append("lang", i18n.language.toLowerCase());
    await fetch("https://center-competence.choices.kz/api/", {
      method: "POST",
      body: formData,
    })
      .then(async (response) => setServices(await response.json()))
      .finally(() => setLoading(false));
  };

  const getService = async (id: number) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("type", "services");
    formData.append("method", "get");
    formData.append("id", String(id));
    await fetch("https://center-competence.choices.kz/api/", {
      method: "POST",
      body: formData,
    })
      .then(async (response) => setService(await response.json()))
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getServices();
  }, [i18n.language]);

  useEffect(() => {
    if (isShowService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isShowService]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const productImages =
    service && service?.service_img !== ""
      ? JSON.parse(service.service_img).uploaded_files
      : [];

  const nextImage = () => {
    if (currentImageIndex < productImages.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const ShowService = () => {
    return (
      <div className="z-50 fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)] flex items-center justify-center">
        <div className="bg-white max-w-[450px] w-full h-fit py-6 px-4 rounded-md mx-2">
          <div className="flex justify-between items-center">
            <p className="text-gray-600">{t("servicePopupTitle")}</p>
            <button onClick={() => setIsShowService(false)}>
              <Icon24Cancel color="rgba(0,0,0,0.8)" />
            </button>
          </div>
          <hr className="my-3" />
          <div className="flex flex-col gap-4 items-center">
            {loading ? (
              <Loading />
            ) : (
              <>
                {service?.service_img !== "" ? (
                  <div>
                    <img
                      onClick={() =>
                        window.open(
                          "https://center-competence.choices.kz/api/files/" +
                            productImages[currentImageIndex],
                        )
                      }
                      className="max-w-[150px] w-full"
                      src={
                        "https://center-competence.choices.kz/api/files/" +
                        productImages[currentImageIndex]
                      }
                      alt={`Product Image ${currentImageIndex + 1}`}
                    />
                    <div className="flex justify-center w-full pt-6 gap-6">
                      <button
                        onClick={prevImage}
                        disabled={currentImageIndex === 0}
                        className={`cursor-pointer`}
                      >
                        &#9664; {/* Left Arrow */}
                      </button>
                      <button
                        onClick={nextImage}
                        disabled={
                          currentImageIndex === productImages.length - 1
                        }
                        className={`cursor-pointer`}
                      >
                        &#9654; {/* Right Arrow */}
                      </button>
                    </div>
                  </div>
                ) : null}
                <p className="max-h-[18с0px] overflow-y-auto">
                  {service?.service_description}
                </p>
                <div className="flex w-full gap-2 justify-start">
                  <a
                    href={"https://wa.me/" + service?.service_number}
                    target="_blank"
                    className="flex items-center gap-1 bg-green-500 p-2 px-2 text-white rounded-md"
                  >
                    <Icon24PhoneOutline color="white" />
                    <p>{t("shopProductPopupWhatsapp")}</p>
                  </a>
                  <a
                    href={"tel:+" + service?.service_number}
                    className="flex items-center gap-1 bg-black p-2 px-3 text-white rounded-md"
                  >
                    <Icon24PhoneOutline color="white" />
                    <p>{t("shopProductPopupCall")}</p>
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  };

  const deleteService = async (id: number) => {
    const formData = new FormData();
    formData.append("type", "services");
    formData.append("method", "delete");
    formData.append("id", String(id));
    await fetch("https://center-competence.choices.kz/api/", {
      method: "POST",
      body: formData,
    });
    await getServices();
  };

  return (
    <ContainerLayout>
      <Header pageId={2} />
      <MainLayout className="flex-1 flex flex-col items-center sm:py-10 py-16 px-4">
        <div className="max-w-[800px]">
          <h1 className="text-2xl font-semibold">{t("serviceTitle")}</h1>
          <p className="text-lg text-gray-700 mt-1.5">
            {t("serviceDescription")}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[800px] w-full justify-center items-start mt-12">
          {services &&
            services.map((service) => {
              return (
                <div
                  key={service.service_id}
                  className="flex flex-col gap-3 border bg-white p-4 rounded-lg w-full sm:md:w-1/2 h-[190px]"
                >
                  <p className="line-clamp-4 text-gray-600 flex-1">
                    {service.service_description}
                  </p>
                  <button
                    onClick={() => {
                      getService(service.service_id);
                      setIsShowService(true);
                    }}
                    className="bg-[rgba(0,0,0,0.9)] hover:bg-[rgba(0,0,0,0.8)] text-white p-3 rounded-lg"
                  >
                    {t("serviceButtonSee")}
                  </button>
                  {localStorage.getItem("isAuthed") && (
                    <Link
                      to={"/services/edit/" + service.service_id}
                      className="bg-orange-500 text-white p-3 rounded-lg mt-[-0.5em] text-center"
                    >
                      Редактировать
                    </Link>
                  )}
                  {localStorage.getItem("isAuthed") && (
                    <button
                      onClick={() => deleteService(service.service_id)}
                      className="bg-red-500 text-white p-3 rounded-lg mt-[-0.5em]"
                    >
                      Удалить услугу
                    </button>
                  )}
                </div>
              );
            })}
        </div>
        {isShowService && <ShowService />}
      </MainLayout>
      <Footer />
    </ContainerLayout>
  );
};

export default ServicesPage;
