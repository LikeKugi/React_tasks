import {makeAutoObservable} from "mobx";
import {AuthService} from "../services/auth.service";
import {LoginRequestDto} from "../dto/request/login-request.dto";

export class AuthStore {
  private authenticated = false;

  constructor(private readonly authService: AuthService) {
    makeAutoObservable(this);
  }

  async login(loginRequest: LoginRequestDto) {
    try {
      const tokenPayloadInfo = await this.authService.login(loginRequest);
      localStorage.setItem('access_token', tokenPayloadInfo.access_token);
      this.setAuthenticated(true);
    } catch (e: unknown) {
      this.setAuthenticated(false);
      console.log((e as Error).message);
    }
  }

  private setAuthenticated(authenticated: boolean) {
    this.authenticated = authenticated;
  }

  isAuthenticated() {
    return this.authenticated
  }
}
