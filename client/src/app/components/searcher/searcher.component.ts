import { Component, OnInit } from '@angular/core';
import * as SpotifyWebApi from 'spotify-web-api-js';
import { Artist } from '../../../../Artist';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {
  searcher: string;
  searchRes: Artist[];

  constructor() { }

  searchMusic() {
    let spotify = new SpotifyWebApi();
    spotify.setAccessToken('BQAE0dqSr18A51d9uOHC_zdJ-UwvgyFWrGAZd-HrcoyGaGrHiw8fqSUwiOidhapM_F5BrfU4YUB3-Mq1rqyie3eWNkyXQ0gQ2OcD-vREqd8sR3upoMmtKTJfmxwxDnIX0h9cO_VdXQqLyU3zrP73lDhOhR2Ty94OB8qa');
    spotify.searchArtists(this.searcher)
      .then(res => {
          this.searchRes = res.artists.items
      })
      .catch(err => console.error(err));
  }

  ngOnInit() {
  }

}
