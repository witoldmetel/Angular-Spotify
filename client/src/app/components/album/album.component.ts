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
  track_duration: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let spotify = new SpotifyWebApi();
    spotify.setAccessToken(accessToken);

    this.route.params
      .subscribe(params => {
        spotify.getAlbum(params['id'])
          .then(res => {
            this.album = res;
            // console.log(this.album);
            return this.album.tracks.items.map(track => {
              return track.id
            });
          })
          .then(trackId => {
            return spotify.getTracks(trackId);
          })
          .then(trackInfo => {
            return this.album.tracks.items.map(track => {
              this.track_duration = this.convertDuration(track.duration_ms);
              // console.log(this.track_duration);
            });
          })
          .catch(err => console.error(err));
      })
  }

  convertDuration(ms) {
    let min = Math.floor((ms / 1000 / 60) << 0);
    let sec = Math.floor((ms / 1000) % 60);
    return min + ":" + (sec < 10 ? '0' : '') + sec;
  }

}