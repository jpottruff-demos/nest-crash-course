import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
    private readonly items: Item[] = [
        {
            id: "1",
            name: "Item 1",
            description: "This is item 1",
            qty: 10
        },
        {
            id: "2",
            name: "Item 2",
            description: "This is item two",
            qty: 50
        }
    ];

    findAll(): Item[] {
        return this.items;
    }

    findOne(id: string): Item {
        return this.items.find(item => item.id === id)
    }
}
