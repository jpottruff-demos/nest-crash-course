import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {

    constructor ( @InjectModel('Item') private readonly itemModel: Model<Item>) {}

    // Hardcoded Items (beore we hooked up Mongo)
    // private readonly items: Item[] = [
    //     {
    //         id: "1",
    //         name: "Item 1",
    //         description: "This is item 1",
    //         qty: 10
    //     },
    //     {
    //         id: "2",
    //         name: "Item 2",
    //         description: "This is item two",
    //         qty: 50
    //     }
    // ];

    // findAll(): Item[] {
    //     return this.items;
    // }
    
    // findOne(id: string): Item {
    //     return this.items.find(item => item.id === id)
    // }

    async findAll(): Promise<Item[]> {
        return await this.itemModel.find();
    }

    async findOne(id: string): Promise<Item> {
        return await this.itemModel.findOne({_id: id})
    }

    async create(item: Item): Promise<Item> {
        const newItem = new this.itemModel(item);
        return await newItem.save();
    }

    async delete(id: string): Promise<Item> {
        return await this.itemModel.findByIdAndRemove(id);
    }

    // This will create if there is not one already
    async update(id: string, newItem: Item): Promise<Item> {
        return await this.itemModel.findByIdAndUpdate(id, newItem, {new: true});
    }
} 
