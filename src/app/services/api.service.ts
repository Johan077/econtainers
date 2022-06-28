import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public heroSelec = {
    name : '',
    power: '',
    description: '',
    foto:'',
  }
  
  constructor() { }
  
  async getApi() {
    const xhr = new XMLHttpRequest();
    const data = "privateKey=%3CREQUIRED%3E&publicKey=%3CREQUIRED%3E";

    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        console.log(this.responseText);
      }
    });

    xhr.open("POST", "https://marvelstefan-skliarovv1.p.rapidapi.com/getCharacters");
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("X-RapidAPI-Key", "SIGN-UP-FOR-KEY");
    xhr.setRequestHeader("X-RapidAPI-Host", "Marvelstefan-skliarovV1.p.rapidapi.com");

    xhr.send(data);
  }
}
