import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  ParseUUIDPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async users() {
    return this.userService.findAll();
  }

  @UsePipes(ValidationPipe)
  @Post()
  async createUser(@Body() body: CreateUserDto) {
    return this.userService.createUser(body);
  }

  @UsePipes(ValidationPipe)
  @Patch('/:id')
  async updateUser(@Param('id', ParseUUIDPipe) id: string, @Body() body) {
    return this.userService.updateData(id, body);
  }

  @UsePipes(ValidationPipe)
  @Delete('/:id')
  async deleteUser(@Param('id', ParseUUIDPipe) id: string) {
    return this.userService.deleteUser(id);
  }

  @Delete()
  async deleteAll() {
    return this.userService.deleteAll();
  }
}
