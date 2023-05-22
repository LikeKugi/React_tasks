import axios from "axios";

const CarsService = {
  async getAll() {
    const res = await axios.get('http://localhost:3004/cars')
    return res.data;
  },

  async getById(id) {
    const res = await axios.get(`http://localhost:3004/cars?id=${id}`);
    return res.data;
  },

  async create(data) {
    return axios.post('http://localhost:3004/cars', data);
  }
}

export default CarsService;