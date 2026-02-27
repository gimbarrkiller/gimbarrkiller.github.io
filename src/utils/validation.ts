export const validatePhone = (phone: string): string | null => {
  const phoneRegex = /^7[0-9]{10}$/;

  if (!phone) {
    return 'Телефон обязателен для заполнения';
  }

  if (!phoneRegex.test(phone)) {
    return 'Телефон должен быть в формате 79999999999';
  }

  return null;
};

export const validateName = (name: string): string | null => {
  if (!name) {
    return 'Имя обязательно для заполнения';
  }

  if (name.length < 2) {
    return 'Имя должно содержать минимум 2 символа';
  }

  if (name.length > 255) {
    return 'Имя не должно превышать 255 символов';
  }

  return null;
};

export const validateCarBrand = (carBrand: string): string | null => {
  if (!carBrand) {
    return 'Марка автомобиля обязательна для заполнения';
  }

  if (carBrand.length < 2) {
    return 'Марка автомобиля должна содержать минимум 2 символа';
  }

  if (carBrand.length > 255) {
    return 'Марка автомобиля не должна превышать 255 символов';
  }

  return null;
};

export const validateComment = (comment: string): string | null => {
  if (comment && comment.length > 1000) {
    return 'Комментарий не должен превышать 1000 символов';
  }

  return null;
};