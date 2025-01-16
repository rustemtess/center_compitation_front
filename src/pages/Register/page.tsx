import Header from "@/components/Header";
import ContainerLayout from "@/layouts/ContainerLayout";
import MainLayout from "@/layouts/MainLayout";
import { getWithExpiry, setWithExpiry } from "@/modules/cookie";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    if (getWithExpiry("access_token") || getWithExpiry("v")) {
      document.location.href = "/";
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("isAuthed")) navigate("/");
  }, []);

  const handleRegister = async () => {
    if (
      password === "" ||
      repeatPassword === "" ||
      password !== repeatPassword
    ) {
      setIsError(true);
      setErrorMessage("Пароли не совпадают");
      return;
    }

    const formData = new FormData();
    formData.append("type", "auth");
    formData.append("method", "register");
    formData.append("number", login);
    formData.append("password", password);

    await fetch("https://center-competence.choices.kz/api/", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        if (result.access_token && result.v) {
          setWithExpiry("access_token", result.access_token, 172800000);
          setWithExpiry("v", result.v, 172800000);
          setIsError(false);
          navigate("/");
        } else {
          setErrorMessage(result.message);
          setIsError(true);
        }
      });
  };

  return (
    <ContainerLayout className="h-svh">
      <Header pageId={5} />
      <MainLayout className="flex flex-col items-center justify-center h-full">
        <div className="flex flex-col justify-center items-center max-w-[400px] w-full gap-2 h-fit">
          <h1 className="text-2xl font-medium text-gray-800">Регистрация</h1>
          <input
            onChange={(e) => setLogin(e.target.value)}
            placeholder="Введите номер телефона"
            className="w-full outline-none border p-2 mt-5"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Новый пароль"
            className="w-full outline-none border p-2"
          />
          <input
            onChange={(e) => setRepeatPassword(e.target.value)}
            type="password"
            placeholder="Повторите пароль"
            className="w-full outline-none border p-2"
          />
          <button
            onClick={() => handleRegister()}
            className="bg-[rgba(0,0,0,0.9)] hover:bg-[rgba(0,0,0,0.8)] text-white p-3 rounded-md w-full"
          >
            Создать аккаунт
          </button>
          <Link to={"/login"}>У меня есть аккаунт</Link>
          {isError && (
            <p className="bg-red-300 text-red-900 p-2 px-3 rounded-md mt-2">
              {errorMessage}
            </p>
          )}
        </div>
      </MainLayout>
    </ContainerLayout>
  );
};

export default RegisterPage;
