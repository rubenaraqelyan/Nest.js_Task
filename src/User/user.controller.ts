import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { BuyProductDto } from './dto/BuyProductDto';

@Controller('')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('buyProduct')
    buyProduct(@Body() buyProductDto: BuyProductDto) {
        return this.userService.buyProduct(buyProductDto);
    }
}
