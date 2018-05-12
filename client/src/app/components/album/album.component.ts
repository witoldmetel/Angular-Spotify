import { Component, OnInit } from '@angular/core';
import * as SpotifyWebApi from 'spotify-web-api-js';
import { ActivatedRoute } from '@angular/router';
import { accessToken } from '../../model/AccessToken';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  accessToken: string;
  id: string;
  album: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let spotify = new SpotifyWebApi();
    spotify.setAccessToken(accessToken);

    this.route.params
      .subscribe(params => {
        console.log(params);
        spotify.getAlbum(params['id'])
          .then(res => {
            this.album = res;
            console.log(this.album);
          })
          .catch(err => console.error(err));
      })
  }

}