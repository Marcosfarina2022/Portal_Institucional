import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { UserDto } from "./dto/user.dto";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  /*@Post()
  create(@Body() createUserDto: UserDto) {
    return this.usersService.create(createUserDto);
  }*/

  @Get("todos")
  async findAll(): Promise<UserDto[]> {
    return await this.usersService.getAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.usersService.remove(+id);
  }
}
