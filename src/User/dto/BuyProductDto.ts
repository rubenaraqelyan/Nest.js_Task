import { IsNumber, IsString } from 'class-validator';

export class BuyProductDto {
    @IsNumber()
    readonly id: number | any;

    @IsString()
    readonly address: string;
}
