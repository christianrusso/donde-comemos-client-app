import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ToastProvider } from '../toast/toast';

@Injectable()
export class ErrorHandlerProvider {

  errorDescriptions = {
    INCORRECT_OLD_PASSWORD: "La contraseña actual ingresada es incorrecta",
    INVALID_CREDENTIALS: "Usuario y/o contraseña inválidos",
    GUEST_USER: "Los invitados no pueden acceder a esta sección"
  }

  constructor(private toastProvider: ToastProvider) { }

  handleError(errorCode) {
    this.toastProvider.show(this.errorDescriptions[errorCode], 3000)
  }

}
