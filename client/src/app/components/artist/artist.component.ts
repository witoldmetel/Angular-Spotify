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
  albums: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let spotify = new SpotifyWebApi();
    spotify.setAccessToken('BQBc9o1CRYF8kn3UwZQvOQ33G4Ce4JEm_30AD34QHbnQqLfC-MyqxPXYpDR0Ewmj4ruq6LHz5CSun_GmlENjA6ENxs1zaYGlCTtjTVmdvCqzs7PgS04edW_YqXsYCZHuHDHhY5zgWC57rRCg9UWQclNDZI6XCZhYwTNo');

    this.route.params
      .subscribe(params => {
        spotify.getArtist(params['id'])
          .then(res => {
            this.artist = res;
            // console.log(this.artist);
          })
          .catch(err => console.error(err));

        spotify.getArtistAlbums(params['id'])
          .then(res => {
            this.albums = res.items;
            console.log(this.albums);
          })
          .catch (err => console.error(err));
      });
  }

}
