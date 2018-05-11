import { Component, OnInit } from '@angular/core';
import * as SpotifyWebApi from 'spotify-web-api-js';
// import { Artist } from '../../../../Artist';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {
  searcher: string;
  searchRes: any;

  constructor() { }

  searchMusic() {
    let spotify = new SpotifyWebApi();
    spotify.setAccessToken('BQBc9o1CRYF8kn3UwZQvOQ33G4Ce4JEm_30AD34QHbnQqLfC-MyqxPXYpDR0Ewmj4ruq6LHz5CSun_GmlENjA6ENxs1zaYGlCTtjTVmdvCqzs7PgS04edW_YqXsYCZHuHDHhY5zgWC57rRCg9UWQclNDZI6XCZhYwTNo');
    spotify.searchArtists(this.searcher, { limit: 5 })
      .then(res => {
          // console.log(res.artists.items);
          this.searchRes = res.artists.items
      })
      .catch(err => console.error(err));
  }

  ngOnInit() {
  }

}
