import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

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
    this._spotifyService.searchMusic(this.searcher)
      .subscribe(res => {
        console.log(res.artists.items);
        // this.searcher = res.artists.items;
      })
  }

  ngOnInit() {
  }

}
