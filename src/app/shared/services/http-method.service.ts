import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Respuesta } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class HttpMethodService {

  public baseUrl: string;
  
  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8000';
    //this.baseUrl = 'https://musicaha.co';
  }

  async GET<T>(url: string, data: any = {}): Promise<Respuesta<T>> {
    if (data) {
      data.format = 'json';
    } else {
      data = {};
      data.format = 'json';
    }
    return this.http.get<Respuesta<T>>(this.baseUrl + url, {headers: this.header(), params: data})
    .toPromise().then((response) => {
      return response;
    });
  }

  async POST<T>(url: string, data: any): Promise<Respuesta<T>>  {
    const response = await this.http.post<Respuesta<T>>(this.baseUrl + url, data, { headers: this.header() })
      .toPromise();
    return response;
  }

  async PUT<T>(url: string, data: any): Promise<Respuesta<T>>  {
    const response = await this.http.put<Respuesta<T>>(this.baseUrl + url, data, { headers: this.header() })
      .toPromise();
    return response;
  }

  DELETE<T>(url: string) {
    return this.http.delete<T>(this.baseUrl + url, {headers: this.header()});
  }

  async POSTFORMDATA<T>(url: string, data: FormData): Promise<Respuesta<T>>  {
    const response = await this.http.post<Respuesta<T>>(this.baseUrl + url, data, { headers: this.headerFormData() })
      .toPromise();
    return response;
  }

  async PUTFORMDATA<T>(url: string, data: FormData) {
    const response = await this.http.put<Respuesta<T>>(this.baseUrl + url, data, { headers: this.headerFormData() })
      .toPromise();
    return response;
  }

  async POSTNOTOKEN<T>(url: string, data: any): Promise<Respuesta<T>>  {
    const response = await this.http.post<Respuesta<T>>(this.baseUrl + url, data)
      .toPromise();
    return response;
  }

  EXPORTAR<T>(url: string) {
    window.open(this.baseUrl + url, '_blank');
  }
  
  private header() {
  
    const tokenObj = JSON.parse(localStorage.getItem('tokenID'));
    if (tokenObj.access_token) {
        let headers = new HttpHeaders();
        headers = headers.append('Authorization', 'Bearer ' + tokenObj.access_token);
        headers = headers.append('Content-Type', 'application/json');
        return headers;
    }
  }

  private headerFormData() {
    const tokenObj = JSON.parse(localStorage.getItem('tokenID'));
    if (tokenObj.access_token) {
        let headers = new HttpHeaders();
        headers = headers.append('Authorization', 'Bearer ' + tokenObj.access_token);
        return headers;
    }
  }
}

