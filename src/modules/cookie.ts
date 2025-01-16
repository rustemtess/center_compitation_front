// Функция для сохранения данных с истечением срока
export function setWithExpiry(
  key: string,
  value: string | number,
  ttl: number,
) {
  const now = new Date();

  // Создаем объект, который включает данные и время истечения
  const item = {
    value: value,
    expiry: now.getTime() + ttl, // Время истечения в миллисекундах
  };
  localStorage.setItem(key, JSON.stringify(item));
}

// Функция для получения данных с проверкой истечения срока
export function getWithExpiry(key: string) {
  const itemStr = localStorage.getItem(key);

  // Если ключ не найден, возвращаем null
  if (!itemStr) {
    return null;
  }

  const item = JSON.parse(itemStr);
  const now = new Date();

  // Если срок действия истёк, удаляем данные и возвращаем null
  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }

  // Если ключ 'v' присутствует в данных, удаляем первые 32 символа
  if (key === 'v' && typeof item.value === 'string') {
    item.value = item.value.substring(32); // Убираем первые 32 символа
  }

  return item.value;
}


// Пример использования
// setWithExpiry("username", "JohnDoe", 60000); // Хранить данные 1 минуту (60000 мс)
