import { useState } from 'react';
import axios from 'axios';
import { validateName, validatePhone, validateCarBrand, validateComment } from '../utils/validation';

interface ApplicationData {
  name: string;
  phone: string;
  car_brand: string;
  comment?: string;
}

interface ApplicationResponse {
  message: string;
  id: number;
}

const ApplicationForm = () => {
  const [formData, setFormData] = useState<ApplicationData>({
    name: '',
    phone: '',
    car_brand: '',
    comment: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');
    setErrors({});

    // Frontend validation
    const validationErrors: {[key: string]: string} = {};
    const nameError = validateName(formData.name);
    const phoneError = validatePhone(formData.phone);
    const carBrandError = validateCarBrand(formData.car_brand);
    const commentError = validateComment(formData.comment || '');

    if (nameError) validationErrors.name = nameError;
    if (phoneError) validationErrors.phone = phoneError;
    if (carBrandError) validationErrors.car_brand = carBrandError;
    if (commentError) validationErrors.comment = commentError;

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post<ApplicationResponse>(
        'http://127.0.0.1:8000/api/applications',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );

      setMessage(response.data.message);
      setIsSuccess(true);
      setFormData({
        name: '',
        phone: '',
        car_brand: '',
        comment: ''
      });
    } catch (error: any) {
      setIsSuccess(false);
      if (error.response?.status === 422) {
        const errors = error.response.data.errors;
        const errorMessages = Object.values(errors).flat().join(', ');
        setMessage(`Ошибка валидации: ${errorMessages}`);
      } else if (error.response?.status === 429) {
        setMessage(error.response.data.message || 'Слишком много запросов');
      } else {
        setMessage('Произошла ошибка при отправке заявки');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="application-form">
      <h2>Оставить заявку</h2>

      {message && (
        <div className={`message ${isSuccess ? 'success' : 'error'}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Имя *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isLoading}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="field-error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Телефон *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="79999999999"
            required
            disabled={isLoading}
            className={errors.phone ? 'error' : ''}
          />
          {errors.phone && <span className="field-error">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="car_brand">Марка автомобиля *</label>
          <input
            type="text"
            id="car_brand"
            name="car_brand"
            value={formData.car_brand}
            onChange={handleChange}
            required
            disabled={isLoading}
            className={errors.car_brand ? 'error' : ''}
          />
          {errors.car_brand && <span className="field-error">{errors.car_brand}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="comment">Комментарий</label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            rows={4}
            disabled={isLoading}
            className={errors.comment ? 'error' : ''}
          />
          {errors.comment && <span className="field-error">{errors.comment}</span>}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="submit-button"
        >
          {isLoading ? 'Отправка...' : 'Отправить заявку'}
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;