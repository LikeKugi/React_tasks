import {LoginRequestDto} from "../dto/request/login-request.dto";
import {API_URL} from "../utils/url";

export class AuthService {
  async login(loginRequest: LoginRequestDto) {

    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginRequest)
    });

    const parsedResponse = await response.json();

    if (!parsedResponse) {
      console.log(parsedResponse)
      throw new Error(parsedResponse)
    }

    return parsedResponse;
  }
}
