import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calendar-out',
  templateUrl: './calendar-out.component.html',
  styleUrls: ['./calendar-out.component.scss']
})
export class CalendarOutComponent {
    @Input() public items: { 
        date: string,
        albums: {
            photo: string,
            artist: {
                name: string,
                picture: string
            },
            title: string,
            nbSongs: number,
            feats: string
        }[]
    }[] = [{ 
            date: 'Vendredi 17 Février 2023',
            albums: [
                {
                    photo: 'https://picsum.photos/200/300',
                    artist: {
                        name: 'Artist 1',
                        picture: 'https://picsum.photos/200/300'
                    },
                    title: 'Album 1',
                    nbSongs: 10,
                    feats: 'Feat 1, Feat 2'
                }
            ]
        }
    ]
}
