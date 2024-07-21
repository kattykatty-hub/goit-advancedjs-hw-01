const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

const formData = {
  email: '',
  message: ''
};

const STORAGE_KEY = 'feedback-form-state';

// Функція для збереження даних у локальне сховище
const saveFormData = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

// Функція для завантаження даних з локального сховища
const loadFormData = () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
};

// Функція для обробки події input
const handleInput = (event) => {
  formData[event.target.name] = event.target.value.trim();
  saveFormData();
};

// Функція для обробки події submit
const handleSubmit = (event) => {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData.email = '';
  formData.message = '';
};

// Завантаження даних з локального сховища при завантаженні сторінки
loadFormData();

// Додавання обробників подій
form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);