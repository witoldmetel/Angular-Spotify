import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable()
export class SpotifyService {
    private searchUrl: string;
    private client_id = '3f0d043b8f6c49a99d31ead28530edab';
    private client_secret = '2e002476fa1243bd8d2dee8390e88e83';
    private artistUrl: string ='https://api.spotify.com/v1/search?type=artist&limit=10&client_id='+this.client_id+'&q=';
    // private access_token: any;
    // private token_type: string;

    constructor(private _http: Http) { }

    // getToken() {
    //     const authorizationTokenUrl = `https://accounts.spotify.com/api/token`;

    //     let headers = new Headers();
    //     headers.append('Authorization', 'Basic  ' + btoa(this.client_id + ':' + this.client_secret));
    //     headers.append('Content-Type', 'application/x-www-form-urlencoded;');

    //     let options = new RequestOptions({ headers: headers });
    //     let body = 'grant_type=client_credentials';

    //     return this._http.post(authorizationTokenUrl, body, options)
    //         .pipe(map(res => res.json()));
    // }

    // private getOptions() {
    //     console.log(this.access_token);
    //     console.log(this.token_type);

    //     let headers = new Headers();
    //     headers.append('Authorization', this.token_type + ' ' + this.access_token);
    //     let options = new RequestOptions({ headers: headers });

    //     return options;
    // }

    searchMusic(str: string) {
    //     const options = this.getOptions();

    //     this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=50&type=' + type;

    //     return this._http.get(this.searchUrl, options)
    //         .pipe(map(res => res.json()));
    // }
    let url = this.artistUrl + str;
    return this._http.get(url)
        .pipe(map(res => res.json()));
    }
}