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
    spotify.setAccessToken('BQD7BdJGm3lZ2Fezzln3o1gXdUVeKdHhZ_lNig1Yr9u7NYdLLptGsknzKvMhglIcfnbYAYnMRdKJlyX4aYQOC09JRH9tpi8dfzE_oUKOYodT-K9MwuKc-juOwia8156re5Fq03zimVR_blTQ-pMwZv1hEWSk5H4ntrhO');
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
