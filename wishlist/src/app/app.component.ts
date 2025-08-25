import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('To Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find grass that cuts itself'),
  ];

  listFilter: string = '0';

  newWishText = '';

  title = 'wishlist';

  get visibleItems(): WishItem[] {
    let value = this.listFilter;

    if (value === '0') {
      return this.items;
    } else if (value === '1') {
      return this.items.filter((item) => !item.isCompleted);
    } else {
      return this.items.filter((items) => items.isCompleted);
    }
  }

  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';

    //todo - add wish to items array
    //clear the textbox
  }

  toggleItem(item: WishItem) {
    item.isCompleted = !item.isCompleted;
    console.log(item);
  }
}
