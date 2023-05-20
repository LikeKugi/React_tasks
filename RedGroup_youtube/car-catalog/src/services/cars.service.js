import {cars} from "./cars.data.js";

const CarsService = {
  async getAll() {
    return new Promise((resolve) => {
      setTimeout(() => resolve({result: 200, data: cars}), 1500);
    })
  },
  async getById(id) {
    return new Promise((resolve) => {
      setTimeout(() => resolve({result: 200, data: cars.filter(car => car.id === +id)}), 1500);
    })
  }
}

export default CarsService;