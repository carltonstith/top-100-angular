import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

import { IAlbum } from './album';
import { AlbumService } from './album.service';

@Component({
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  pageTitle = 'Album Detail';
  errorMessage = '';
  album: IAlbum | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private albumService: AlbumService) {
  }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getAlbum(id);
    }
  }

  getAlbum(id: number) {
    this.albumService.getAlbum(id).subscribe({
      next: album => this.album = album,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/albums']);
  }
}
