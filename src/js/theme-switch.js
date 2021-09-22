//Тут находяться темы
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const { LIGHT, DARK } = Theme;

// Принимает ключ `key` по которому будет произведена выборка.
const load = key => {
  try {
    const serializedState = localStorage.getItem(key);

    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (err) {
    console.error('Get state error: ', err);
  }
};
// Принимает ключ `key` и значение `value`.
const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.error('Set state error: ', err);
  }
};
// Проверяет состояние Switch фиксирует его при true и вешает клас на body.
const addClass = (whereAdd, checkbox) => {

    if (load(DARK)) {
        checkbox.checked = true;
        whereAdd.classList.add(DARK);
    } else {
        whereAdd.classList.remove(DARK);
    };
};
 
export default { LIGHT, DARK ,load, save, addClass };