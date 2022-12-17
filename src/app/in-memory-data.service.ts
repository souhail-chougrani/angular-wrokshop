import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Mail } from './mail/components/models/mail.interface';


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const messages:Mail[] = [
        {
          "id": 1,
          "folder": "inbox",
          "from": "Jane Smith",
          "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis, neque at ultricies fringilla, ligula metus",
          "timestamp": 1487848162905
        },
        {
          "id": 2,
          "folder": "inbox",
          "from": "John Doe",
          "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis, neque at ultricies fringilla, ligula metus",
          "timestamp": 1487845787719
        },
        {
          "id": 3,
          "folder": "inbox",
          "from": "Joseph Hanes",
          "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis, neque at ultricies fringilla, ligula metus",
          "timestamp": 1487845787719
        },
        {
          "id": 4,
          "folder": "trash",
          "from": "Laurence Murray",
          "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis, neque at ultricies fringilla, ligula metus",
          "timestamp": 1487845787719
        }
      ]
    return {messages};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(messages: Mail[]): number {
    return messages.length > 0 ? Math.max(...messages.map(message => message.id)) + 1 : 11;
  }
}