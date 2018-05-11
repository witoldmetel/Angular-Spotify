import { Component, OnInit } from '@angular/core';
import * as SpotifyWebApi from 'spotify-web-api-js';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  id: string;
  artist: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let spotify = new SpotifyWebApi();
    spotify.setAccessToken('BQD7BdJGm3lZ2Fezzln3o1gXdUVeKdHhZ_lNig1Yr9u7NYdLLptGsknzKvMhglIcfnbYAYnMRdKJlyX4aYQOC09JRH9tpi8dfzE_oUKOYodT-K9MwuKc-juOwia8156re5Fq03zimVR_blTQ-pMwZv1hEWSk5H4ntrhO');

    this.route.params
      .subscribe(params => {
        spotify.getArtist(params['id'])
          .then(res => {
            this.artist = res;
            console.log(this.artist);
          })
          .catch(err => console.error(err))
      });
  }

}
