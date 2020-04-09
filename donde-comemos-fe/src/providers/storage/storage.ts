import { Injectable } from '@angular/core';
import { UserInterface } from '../../interfaces/user';
import { NativeStorage } from '@ionic-native/native-storage';

@Injectable()
export class StorageProvider {

  constructor(
    private nativeStorage: NativeStorage) {}

  storeUser(user: UserInterface) {
    this.nativeStorage.remove("user")
    return this.nativeStorage.setItem("user", user);
  }

  removeUser() {
    return this.nativeStorage.remove("user")
  }

  getUser() {
    return this.nativeStorage.getItem("user")
  }

}