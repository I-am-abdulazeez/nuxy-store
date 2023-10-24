export type ProductType = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

export type ErrorObject = {
  url: string;
  statusCode: number;
  statusMessage: string;
  message: string;
  description: string;
  data: any;
};
