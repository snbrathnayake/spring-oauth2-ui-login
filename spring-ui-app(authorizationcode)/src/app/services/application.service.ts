import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Cookie } from 'ng2-cookies';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApplicationService {

  public clientId = 'clientId19';
  public redirectUri = 'http://localhost:3000/';

  constructor(private _http: HttpClient) { }

  retrieveToken(code) {
    const params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('client_id', this.clientId);
    params.append('redirect_uri', this.redirectUri);
    params.append('code', code);

    const headers = new HttpHeaders({ 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Basic ' + btoa(this.clientId + ':secret19') });
    this._http.post('http://localhost:9445/auth/oauth/token', params.toString(), { headers: headers })
      .subscribe(
        data => this.saveToken(data),
        err => alert('Invalid Credentials')
      );
  }

  saveToken(token): void {
    const expireDate = new Date().getTime() + (1000 * token.expires_in);
    Cookie.set('access_token', token.access_token, expireDate);
    console.log('Obtained Access token');
    window.location.href = 'http://localhost:3000';
  }

  checkCredentials() {
    return Cookie.check('access_token');
  }

  logout() {
    Cookie.delete('access_token');
    window.location.reload();
  }

  getResource(url: string): Observable<any> {
    const params = new HttpParams().set('username', 'test').set('password', 'test1');
    const headers = new HttpHeaders(
      { 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
       'Authorization': 'Bearer ' + Cookie.get('access_token')});
    return this._http
      .get(url, { headers: headers })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }


}
