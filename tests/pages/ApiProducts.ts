export class ApiProducts {
  constructor(request) {
    this.request = request;
    this.baseURL = 'https://automationexercise.com/api';
  }

  async getAllProducts() {
    const response = await this.request.get(`${this.baseURL}/productsList`);
    const responseObject = await response.json();
    return {
      status: response.status(),
      body: responseObject,
      responseCode: responseObject.responseCode,
      message: responseObject.message,
      products: responseObject.products,
    };
  }
}
