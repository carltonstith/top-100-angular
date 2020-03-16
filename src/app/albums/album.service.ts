import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { IAlbum } from './album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private albumUrl = 'assets/albums/albums.json';

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<IAlbum[]> {
    return this.http.get<IAlbum[]>(this.albumUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure instead of just logging it to the console
    let errorMessage = '';
    if (err. error instanceof ErrorEvent) {
      // A client-side or network error occured. Handle it accordingly.
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
  // getAlbums(): IAlbum[] {
  //   return [
  //     {
  //       "albumId": 1,
  //       "albumTitle": "Illmatic",
  //       "artist": "Nas",
  //       "releaseDate": "April 19, 1994",
  //       "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eros lectus, sodales vitae auctor sit amet, pellentesque nec quam. Phasellus vitae dictum odio. Nam rhoncus maximus pharetra. Praesent hendrerit mi convallis ligula scelerisque, at pretium nisi maximus. Mauris sagittis vehicula tincidunt. Vestibulum eu nibh ac nunc volutpat porttitor. Nullam sed risus est. Nulla eget massa sed odio lobortis dictum. Proin sit amet justo sapien. Aenean at ex condimentum, eleifend tellus eget, lacinia sem. Nulla facilisis tincidunt luctus. Nam lorem lectus, dictum ac metus et, varius eleifend arcu. Cras hendrerit purus a turpis fringilla semper.",
  //       "price": 10.99,
  //       "starRating": 5,
  //       "imageUrl": "assets/images/nas-Illmatic.jpg"
  //     },
  //     {
  //       "albumId": 2,
  //       "albumTitle": "The Chronic",
  //       "artist": "Dr. Dre",
  //       "releaseDate": "December 15, 1992",
  //       "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eros lectus, sodales vitae auctor sit amet, pellentesque nec quam. Phasellus vitae dictum odio. Nam rhoncus maximus pharetra. Praesent hendrerit mi convallis ligula scelerisque, at pretium nisi maximus. Mauris sagittis vehicula tincidunt. Vestibulum eu nibh ac nunc volutpat porttitor. Nullam sed risus est. Nulla eget massa sed odio lobortis dictum. Proin sit amet justo sapien. Aenean at ex condimentum, eleifend tellus eget, lacinia sem. Nulla facilisis tincidunt luctus. Nam lorem lectus, dictum ac metus et, varius eleifend arcu. Cras hendrerit purus a turpis fringilla semper.",
  //       "price": 10.99,
  //       "starRating": 2.8,
  //       "imageUrl": "assets/images/dr-dre-the-chronic.jpg"
  //     },
  //     {
  //       "albumId": 3,
  //       "albumTitle": "Reasonable Doubt",
  //       "artist": "Jay-Z",
  //       "releaseDate": "June 25, 1996",
  //       "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eros lectus, sodales vitae auctor sit amet, pellentesque nec quam. Phasellus vitae dictum odio. Nam rhoncus maximus pharetra. Praesent hendrerit mi convallis ligula scelerisque, at pretium nisi maximus. Mauris sagittis vehicula tincidunt. Vestibulum eu nibh ac nunc volutpat porttitor. Nullam sed risus est. Nulla eget massa sed odio lobortis dictum. Proin sit amet justo sapien. Aenean at ex condimentum, eleifend tellus eget, lacinia sem. Nulla facilisis tincidunt luctus. Nam lorem lectus, dictum ac metus et, varius eleifend arcu. Cras hendrerit purus a turpis fringilla semper.",
  //       "price": 10.99,
  //       "starRating": 1.6,
  //       "imageUrl": "assets/images/jay-z-reasonable-doubt.jpg"
  //     },
  //     {
  //       "albumId": 4,
  //       "albumTitle": "It Takes a Nation of Millions To Hold Us Back",
  //       "artist": "Public Enemy",
  //       "releaseDate": "June 28, 1988",
  //       "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eros lectus, sodales vitae auctor sit amet, pellentesque nec quam. Phasellus vitae dictum odio. Nam rhoncus maximus pharetra. Praesent hendrerit mi convallis ligula scelerisque, at pretium nisi maximus. Mauris sagittis vehicula tincidunt. Vestibulum eu nibh ac nunc volutpat porttitor. Nullam sed risus est. Nulla eget massa sed odio lobortis dictum. Proin sit amet justo sapien. Aenean at ex condimentum, eleifend tellus eget, lacinia sem. Nulla facilisis tincidunt luctus. Nam lorem lectus, dictum ac metus et, varius eleifend arcu. Cras hendrerit purus a turpis fringilla semper.",
  //       "price": 10.99,
  //       "starRating": 4.6,
  //       "imageUrl": "assets/images/it_takes_a_nation_of_millions_to_ho.jpg"
  //     },
  //     {
  //       "albumId": 5,
  //       "albumTitle": "Enter The Wu-Tang Clan - 36 Chambers",
  //       "artist": "Wu-Tang Clan",
  //       "releaseDate": "November 9, 1993",
  //       "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eros lectus, sodales vitae auctor sit amet, pellentesque nec quam. Phasellus vitae dictum odio. Nam rhoncus maximus pharetra. Praesent hendrerit mi convallis ligula scelerisque, at pretium nisi maximus. Mauris sagittis vehicula tincidunt. Vestibulum eu nibh ac nunc volutpat porttitor. Nullam sed risus est. Nulla eget massa sed odio lobortis dictum. Proin sit amet justo sapien. Aenean at ex condimentum, eleifend tellus eget, lacinia sem. Nulla facilisis tincidunt luctus. Nam lorem lectus, dictum ac metus et, varius eleifend arcu. Cras hendrerit purus a turpis fringilla semper.",
  //       "price": 10.99,
  //       "starRating": 4.3,
  //       "imageUrl": "assets/images/wu-tang-36-chambers.jpg"
  //     },
  //     {
  //       "albumId": 6,
  //       "albumTitle": "Straight Outta Compton",
  //       "artist": "N.W.A.",
  //       "releaseDate": "August 8, 1988",
  //       "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eros lectus, sodales vitae auctor sit amet, pellentesque nec quam. Phasellus vitae dictum odio. Nam rhoncus maximus pharetra. Praesent hendrerit mi convallis ligula scelerisque, at pretium nisi maximus. Mauris sagittis vehicula tincidunt. Vestibulum eu nibh ac nunc volutpat porttitor. Nullam sed risus est. Nulla eget massa sed odio lobortis dictum. Proin sit amet justo sapien. Aenean at ex condimentum, eleifend tellus eget, lacinia sem. Nulla facilisis tincidunt luctus. Nam lorem lectus, dictum ac metus et, varius eleifend arcu. Cras hendrerit purus a turpis fringilla semper.",
  //       "price": 10.99,
  //       "starRating": 4.1,
  //       "imageUrl": "assets/images/nwa_straight_outta_compton.jpg"
  //     },
  //     {
  //       "albumId": 7,
  //       "albumTitle": "The Low End Theory",
  //       "artist": "A Tribe Called Quest",
  //       "releaseDate": "September 24, 1991",
  //       "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eros lectus, sodales vitae auctor sit amet, pellentesque nec quam. Phasellus vitae dictum odio. Nam rhoncus maximus pharetra. Praesent hendrerit mi convallis ligula scelerisque, at pretium nisi maximus. Mauris sagittis vehicula tincidunt. Vestibulum eu nibh ac nunc volutpat porttitor. Nullam sed risus est. Nulla eget massa sed odio lobortis dictum. Proin sit amet justo sapien. Aenean at ex condimentum, eleifend tellus eget, lacinia sem. Nulla facilisis tincidunt luctus. Nam lorem lectus, dictum ac metus et, varius eleifend arcu. Cras hendrerit purus a turpis fringilla semper.",
  //       "price": 10.99,
  //       "starRating": 4.2,
  //       "imageUrl": "assets/images/tribe-Low-End-Theory.jpg"
  //     },
  //     {
  //       "albumId": 8,
  //       "albumTitle": "Doggystyle",
  //       "artist": "Snoop Doggy Dogg",
  //       "releaseDate": "November 23, 1993",
  //       "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eros lectus, sodales vitae auctor sit amet, pellentesque nec quam. Phasellus vitae dictum odio. Nam rhoncus maximus pharetra. Praesent hendrerit mi convallis ligula scelerisque, at pretium nisi maximus. Mauris sagittis vehicula tincidunt. Vestibulum eu nibh ac nunc volutpat porttitor. Nullam sed risus est. Nulla eget massa sed odio lobortis dictum. Proin sit amet justo sapien. Aenean at ex condimentum, eleifend tellus eget, lacinia sem. Nulla facilisis tincidunt luctus. Nam lorem lectus, dictum ac metus et, varius eleifend arcu. Cras hendrerit purus a turpis fringilla semper.",
  //       "price": 10.99,
  //       "starRating": 4.6,
  //       "imageUrl": "assets/images/snoop-doggy-dogg-doggystyle.jpg"
  //     },
  //     {
  //       "albumId": 9,
  //       "albumTitle": "Only Built For Cuban Linx",
  //       "artist": "Raekwon",
  //       "releaseDate": "August 1, 1995",
  //       "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eros lectus, sodales vitae auctor sit amet, pellentesque nec quam. Phasellus vitae dictum odio. Nam rhoncus maximus pharetra. Praesent hendrerit mi convallis ligula scelerisque, at pretium nisi maximus. Mauris sagittis vehicula tincidunt. Vestibulum eu nibh ac nunc volutpat porttitor. Nullam sed risus est. Nulla eget massa sed odio lobortis dictum. Proin sit amet justo sapien. Aenean at ex condimentum, eleifend tellus eget, lacinia sem. Nulla facilisis tincidunt luctus. Nam lorem lectus, dictum ac metus et, varius eleifend arcu. Cras hendrerit purus a turpis fringilla semper.",
  //       "price": 10.99,
  //       "starRating": 4.1,
  //       "imageUrl": "assets/images/raekwon-only-built-4-cuban-linx.jpg"
  //     },
  //     {
  //       "albumId": 10,
  //       "albumTitle": "Aquemini",
  //       "artist": "OutKast",
  //       "releaseDate": "September 29, 1998",
  //       "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eros lectus, sodales vitae auctor sit amet, pellentesque nec quam. Phasellus vitae dictum odio. Nam rhoncus maximus pharetra. Praesent hendrerit mi convallis ligula scelerisque, at pretium nisi maximus. Mauris sagittis vehicula tincidunt. Vestibulum eu nibh ac nunc volutpat porttitor. Nullam sed risus est. Nulla eget massa sed odio lobortis dictum. Proin sit amet justo sapien. Aenean at ex condimentum, eleifend tellus eget, lacinia sem. Nulla facilisis tincidunt luctus. Nam lorem lectus, dictum ac metus et, varius eleifend arcu. Cras hendrerit purus a turpis fringilla semper.",
  //       "price": 10.99,
  //       "starRating": 4.4,
  //       "imageUrl": "assets/images/outkast-aquemini.jpg"
  //     }
  //   ];
  // }
}
