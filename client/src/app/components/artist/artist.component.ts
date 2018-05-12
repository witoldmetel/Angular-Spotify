import { Component, OnInit } from '@angular/core';
import * as SpotifyWebApi from 'spotify-web-api-js';
import { ActivatedRoute } from '@angular/router';
import { accessToken } from '../../model/AccessToken';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  accessToken: string;
  id: string;
  artist: any;
  albums: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let spotify = new SpotifyWebApi();
    spotify.setAccessToken(accessToken);

    this.route.params
      .subscribe(params => {
        spotify.getArtist(params['id'])
          .then(res => {
            this.artist = res;
            console.log(this.artist);
          })
          .catch(err => console.error(err));

        spotify.getArtistAlbums(params['id'])
          .then(res => {
            this.albums = res.items;
            // console.log(this.albums);
          })
          .catch (err => console.error(err));
      });
  }

}
