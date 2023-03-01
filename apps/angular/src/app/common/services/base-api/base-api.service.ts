import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IHttpGetOptions } from '@common/interfaces/base.interface';

@Injectable({ providedIn: 'root' })
export class BaseApiService {
  private apiEndPoint!: string;

  private resourceUri = '';

  constructor(private httpClient: HttpClient) {
    this.apiEndPoint = environment.apiEndPoint;
  }

  get baseUrl() {
    return `${this.apiEndPoint}/${this.resourceUri}`;
  }

  setResourceUri(uri: string) {
    this.resourceUri = uri;
  }

  get(url: string, options?: IHttpGetOptions) {
    this.httpClient.get(this.getUrl(url), options);
  }

  private getUrl(uri: string) {
    return `${this.baseUrl}/${uri}`;
  }
}
