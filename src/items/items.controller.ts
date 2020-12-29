import { Controller, Get, Post, Put, Delete, Body, Param} from '@nestjs/common';
import { CreateItemDto } from './DTO/create-item.dto';

@Controller('items')
export class ItemsController {
    // This decorator tells nest to create a'Get' endpoint for /items (eg. localhost:3000/items)
    // No routes file or anything like that 
    @Get()
    findAll(): string {
        return 'Get all items';
    }

    @Get(':id') 
    // findOne(@Param() param): string {
    findOne(@Param('id') id): string {
        // return `Item ${param.id}`;
        return `Item ${id}`;
    }
    
    // The Body decorator below is similar to using req.body
    // The DTO shows what we would be passing in and gives us access to those properties
    @Post()
    create(@Body() createItemDto: CreateItemDto): string {
        return `Name ${createItemDto.name} Desc: ${createItemDto.description}`;
    }

    @Delete(':id')
    delete(@Param('id') id): string {
        return `Deleted ${id}`;
    }

    @Put(':id') 
    update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
        return `Updated ID: ${id} - ${updateItemDto.name}, Desc: ${updateItemDto.description}`;
    }
}
