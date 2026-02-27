export interface ApplicationData {
  name: string;
  phone: string;
  car_brand: string;
  comment?: string;
}

export interface ApplicationResponse {
  message: string;
  id: number;
}