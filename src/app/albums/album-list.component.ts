import { Component, OnInit } from '@angular/core';
import { IAlbum } from './album';
import { AlbumService } from './album.service';

@Component({
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})

export class AlbumListComponent implements OnInit {
  pageTitle: string = "Album List";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = true;
  _listFilter: string;
  errorMessage: string;

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value:string) {
    this._listFilter = value;
    this.filteredAlbums = this.listFilter ? this.performFilter(this.listFilter) : this.albums;
  }

  filteredAlbums: IAlbum[];
  albums: IAlbum[] = [];

  constructor(private albumService: AlbumService) {

  }

  onRatingClicked(message: string) : void {
    this.pageTitle = 'Album List: ' + message;
  }

  performFilter(filterBy: string): IAlbum[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.albums.filter((album: IAlbum) =>
      album.albumTitle.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe({
      next: albums => {
        this.albums = albums,
        this.filteredAlbums = this.albums
      },
      error: err => this.errorMessage = err
    });
  }

}
