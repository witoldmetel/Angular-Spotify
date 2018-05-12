import { Component, OnInit } from '@angular/core';
import * as SpotifyWebApi from 'spotify-web-api-js';
// import { Artist } from '../../../../Artist';
import { accessToken } from '../../model/AccessToken';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {
  accessToken: string;
  searcher: string;
  searchRes: any;

  constructor() { }

  searchMusic() {
    if (this.searcher !== '') {
      let spotify = new SpotifyWebApi();
      spotify.setAccessToken(accessToken);
      spotify.searchArtists(this.searcher, { limit: 40 })
        .then(res => {
          // console.log(res.artists.items);
          this.searchRes = res.artists.items
        })
        .catch(err => console.error(err));
    } else {
      this.searchRes = [];
    }
  }

  ngOnInit() {
  }

}
