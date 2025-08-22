import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
import { NgFor, NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items : WishItem[] = [
    new WishItem('To Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find grass that cuts itself')
  ];
  title = 'wishlist';

  toggleItem(item : WishItem){
    item.isCompleted = !item.isCompleted
    console.log(item);
  }
}
