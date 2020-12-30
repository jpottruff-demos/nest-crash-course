import { Controller, Get, Post, Put, Delete, Body, Param} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
    // Injecing items service 
    // NOTE: pretty much what you do in angular
    constructor(private readonly itemsService: ItemsService) {}


    // This decorator tells nest to create a'Get' endpoint for /items (eg. localhost:3000/items)
    // No routes file or anything like that 
    @Get()
    findAll(): Promise<Item[]> {
        return this.itemsService.findAll();
    }

    @Get(':id') 
    // findOne(@Param() param): string {
    // findOne(@Param('id') id): string {
    findOne(@Param('id') id): Promise<Item> {
        // return `Item ${param.id}`;
        // return `Item ${id}`;
        return this.itemsService.findOne(id);
    }
    
    // The Body decorator below is similar to using req.body
    // The DTO shows what we would be passing in and gives us access to those properties
    // @Post()
    // create(@Body() createItemDto: CreateItemDto): string {
    //     return `Name ${createItemDto.name} Desc: ${createItemDto.description}`;
    // }
    @Post()
    create(@Body() createItemDto: CreateItemDto): Promise<Item> {
        return this.itemsService.create(createItemDto)
    }

    // @Delete(':id')
    // delete(@Param('id') id): string {
    //     return `Deleted ${id}`;
    // }
    @Delete(':id')
    delete(@Param('id') id): Promise<Item> {
        return this.itemsService.delete(id);
    }

    // @Put(':id') 
    // update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
    //     return `Updated ID: ${id} - ${updateItemDto.name}, Desc: ${updateItemDto.description}`;
    // }
    @Put(':id') 
    update(@Body() updateItemDto: CreateItemDto, @Param('id') id): Promise<Item> {
        return this.itemsService.update(id, updateItemDto);
    }
}
