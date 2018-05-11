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
    spotify.setAccessToken('BQA8ptD820nFFaqj08SNLtw8HhoJD7nc7sR7cK1JEfTXGhJXqQByFDF3yP7d-XKQivvbIMaL6tuSpI8qPD2WHJ2kJ3ELBzMMZNMCogCsIpodIrTHiKl2psaDs1ih9wmjAGnUd88GSCJoSIT8MIxTgOWMlIjRi52CXEjD');
    spotify.searchArtists(this.searcher)
      .then(res => {
          this.searchRes = res.artists.items
      })
      .catch(err => console.error(err));
  }

  ngOnInit() {
  }

}
