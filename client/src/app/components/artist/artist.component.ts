import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as SpotifyWebApi from 'spotify-web-api-js';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  id:string;
  artist:any;
  albums:any;

  constructor(private _route:ActivatedRoute) { }

  ngOnInit() {
    let spotify = new SpotifyWebApi();
    spotify.setAccessToken('BQAE0dqSr18A51d9uOHC_zdJ-UwvgyFWrGAZd-HrcoyGaGrHiw8fqSUwiOidhapM_F5BrfU4YUB3-Mq1rqyie3eWNkyXQ0gQ2OcD-vREqd8sR3upoMmtKTJfmxwxDnIX0h9cO_VdXQqLyU3zrP73lDhOhR2Ty94OB8qa');
    this._route.params
      .pipe(map(params => params['id']))
      .subscribe(id => {
        spotify.getArtist(id)
          .then(artist => {
            this.artist = artist;
          })
          .catch(err => console.error(err));
      })
    }

}
