import { Component, Input } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

interface Coffe {
  id: number;
  name: string;
  image: string;
  price: string;
  rating: number | null;
  votes: number;
  popular: boolean;
  available: boolean;
}

// "id": 1,
//     "name": "Cappuccino",
//     "image": "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/cappuccino.jpg",
//     "price": "$5.20",
//     "rating": 4.7,
//     "votes": 65,
//     "popular": true,
//     "available": true

@Component({
  selector: 'app-coffe-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './coffe-card.component.html',
  styleUrls: ['./coffe-card.component.scss'],
})
export class CoffeCardComponent {
  @Input() coffe!: Coffe;
}
