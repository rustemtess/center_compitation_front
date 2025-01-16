import { FormEvent, useEffect, useRef, useState } from "react";
import { Icon24Message, Icon24Cancel, Icon24Send } from "@vkontakte/icons";
import { useTranslation } from "react-i18next";

interface IMessage {
  log_id: number;
  user_uid: string;
  user_message: string;
  bot_message: string;
}

interface IData {
  type: string;
  data: string | IMessage[];
}

const URL = "https://center-competence.choices.kz/api/api2.php";

const ChatBot = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [data, setData] = useState<IData>();
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { t } = useTranslation();

  useEffect(() => {
    if (messagesContainerRef.current)
      messagesContainerRef.current?.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
      });
  }, [data?.data, isShow]);
  const userIsExists = async () => {
    const fd = new FormData();
    fd.append("uid", String(localStorage.getItem("uid")));

    try {
      const response = await fetch(URL, {
        method: "POST",
        body: fd,
      });
      const result: IData = await response.json();
      if (result && result.type) {
        if (result.type === "error") {
          setIsRegistered(false);
        } else {
          setIsRegistered(true);
        }
      }

      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userIsExists();
  }, []);

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Получение данных формы
    const formData = new FormData(e.currentTarget);
    const message = formData.get("message")?.toString().trim(); // Получаем поле message

    // Проверка на пустое сообщение
    if (!message) {
      alert("Сообщение не может быть пустым.");
      return;
    }

    // Добавление UID
    formData.append("uid", String(localStorage.getItem("uid")));

    try {
      // Отправка запроса
      const response = await fetch(URL, {
        method: "POST",
        body: formData,
      });

      // Проверка успешности ответа
      if (!response.ok) {
        throw new Error("Ошибка при отправке сообщения");
      }

      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Ошибка:", error);
      alert("Произошла ошибка. Попробуйте снова.");
    }
  };

  const sendMessageWithoutForm = async (message: string, id?: string) => {
    const formData = new FormData();
    formData.append("uid", String(localStorage.getItem("uid")));
    formData.append("message", message);
    if (id) formData.append("id", id);
    const response = await fetch(URL, {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    setData(result);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); // Устанавливаем фокус после обновления `data`
    }
  }, [data]);

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("uid", String(localStorage.getItem("uid")));
    const response = await fetch(URL, {
      method: "POST",
      body: formData,
    });
    const result: IData = await response.json();
    if (result && result.type) {
      if (result.type === "success" && result.data === "User registered") {
        const response = await fetch(URL, {
          method: "POST",
          body: formData,
        });
        const result = await response.json();
        setData(result);
        setTimeout(() => {
          setIsRegistered(true);
        }, 1500);
      } else {
        setIsRegistered(false);
      }
    }
  };

  const YouMessage = ({ message }: { message: string }) => (
    <div className="ml-auto text-right bg-blue-500 rounded-lg p-2 px-3 w-fit">
      <p className="text-white">{message}</p>
    </div>
  );

  interface BotMessageProps {
    message: string;
  }

  const BotMessage: React.FC<BotMessageProps> = ({ message }) => {
    const formatMessageWithButton = (message: string): React.ReactNode => {
      const parts = message.split(/(<button.*?<\/button>|<a.*?<\/a>)/); // Разделяем на кнопки и ссылки
      return parts.map((part, index) => {
        const buttonMatch = part.match(
          /<button(?:\s+id="(.+?)")?>(.*?)<\/button>/,
        ); // Ищем кнопки с id или без

        if (buttonMatch) {
          const [, id, buttonText] = buttonMatch; // Извлекаем id и текст кнопки

          return (
            <button
              key={`button-${index}`}
              onClick={() => sendMessageWithoutForm(buttonText, id ? id : "")} // Если есть id, отправляем его
              className="bg-gray-100 text-black text-sm p-1 rounded-md mx-1 text-left my-1"
            >
              {buttonText}
            </button>
          );
        }

        const linkMatch = part.match(/<a(?:\s+href="(.+?)")?>(.*?)<\/a>/); // Ищем ссылки с href или без

        if (linkMatch) {
          const [, href, linkText] = linkMatch; // Извлекаем href и текст ссылки

          return (
            <a
              key={`link-${index}`}
              href={href ? href : "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              {linkText}
            </a>
          );
        }

        // Обычный текст возвращаем как есть
        return (
          <span className="text-base px-1" key={`text-${index}`}>
            {part}
          </span>
        );
      });
    };

    return (
      <div className="bg-white p-2 text-black rounded-md w-fit">
        <span className="text-gray-500 px-1 pb-2">{t("botTitle")}</span>
        <p>{formatMessageWithButton(message)}</p>
      </div>
    );
  };

  const RegisterUserForChat = () => (
    <form
      onSubmit={(e) => handleRegister(e)}
      className="flex flex-col gap-2 px-4 items-center h-full bg-gray-100"
    >
      <h2 className="w-full text-center text-gray-800 mt-12 mb-6">
        {t("botWelcome")}
      </h2>
      <input
        type="text"
        name="name"
        placeholder={t("botInputName")}
        className="bg-white w-full border p-2 rounded-lg outline-none font-medium"
      />
      <input
        type="tel"
        name="number"
        placeholder={t("botInputNumber")}
        onChange={(e) => e.target.value}
        className="bg-white w-full border p-2 rounded-lg outline-none"
      />
      <button className="bg-blue-500 text-white p-2 rounded-lg w-full">
        {t("homeRelaseButton")}
      </button>
    </form>
  );

  const ChatWindow = () => (
    <div className="fixed bottom-[2%] right-[1%] w-[340px] h-[500px] rounded-lg shadow-lg bg-white z-[99]">
      <header className="bg-blue-500 flex justify-between items-center p-2 px-3 rounded-tl-lg rounded-tr-lg">
        <h2 className="font-sm font-medium text-white flex items-center gap-1.5">
          <div className="w-[8px] h-[8px] bg-green-500 rounded-full"></div>
          {t("bot")}
        </h2>
        <button
          className="text-white text-sm"
          onClick={() => setIsShow((prev) => !prev)}
        >
          <Icon24Cancel />
        </button>
      </header>
      <main className="flex flex-col w-full h-[460px] rounded-bl-lg rounded-br-lg">
        {!isRegistered ? (
          <RegisterUserForChat />
        ) : (
          <>
            <div
              ref={messagesContainerRef}
              className="flex-1 flex flex-col p-2 py-4 bg-gray-100 gap-3 overflow-y-auto"
            >
              {data?.data &&
                (data.data as IMessage[]).map((message) => {
                  return (
                    <>
                      {message.user_message !== "welcome" &&
                        message.user_message !== "questions" && (
                          <YouMessage
                            key={message.log_id + message.user_message}
                            message={message.user_message}
                          />
                        )}
                      <BotMessage
                        key={message.log_id + message.bot_message}
                        message={message.bot_message}
                      />
                    </>
                  );
                })}
            </div>
            <form onSubmit={(e) => sendMessage(e)} className="flex">
              <input
                className="w-full rounded-bl-lg px-2 text-sm outline-none"
                placeholder={t("botInput")}
                name="message"
                ref={inputRef}
              />
              <button className="bg-blue-500 p-2 rounded-br-lg cursor-pointer">
                <Icon24Send color="white" />
              </button>
            </form>
          </>
        )}
      </main>
    </div>
  );

  return (
    <>
      {isShow && <ChatWindow />}
      {!isShow && (
        <button
          className="bg-blue-500 text-white fixed bottom-[1em] right-[1em] font-medium p-3 rounded-xl flex gap-1 items-center"
          onClick={() => setIsShow((prev) => !prev)}
        >
          <Icon24Message color="white" />
          {t("bot")}
        </button>
      )}
    </>
  );
};

export default ChatBot;
