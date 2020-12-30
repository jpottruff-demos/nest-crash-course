import * as mongoose from 'mongoose'
// export class CreateItemDto {
export class CreateItemDto extends mongoose.Document{
    readonly name: string;
    readonly description: string;
    readonly qty: number;
}