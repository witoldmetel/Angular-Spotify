import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import * as SpotifyWebApi from 'spotify-web-api-js';



@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css'],
  providers: [SpotifyService]
})
export class SearcherComponent implements OnInit {
  searcher: string;



  constructor(private _spotifyService: SpotifyService) { }

  searchMusic() {
    let spotify = new SpotifyWebApi();
    spotify.setAccessToken('BQAE0dqSr18A51d9uOHC_zdJ-UwvgyFWrGAZd-HrcoyGaGrHiw8fqSUwiOidhapM_F5BrfU4YUB3-Mq1rqyie3eWNkyXQ0gQ2OcD-vREqd8sR3upoMmtKTJfmxwxDnIX0h9cO_VdXQqLyU3zrP73lDhOhR2Ty94OB8qa');
    spotify.searchArtists(this.searcher)
      .then(function (data) {
        console.log('Search artists by "Love"', data);
      }, function (err) {
        console.error(err);
      });
  }

  ngOnInit() {
  }

}
