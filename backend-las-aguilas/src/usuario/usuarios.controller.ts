import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { UsuariosService } from "./usuarios.service";
import { UsuarioDto } from "./dto/usuario.dto";

@Controller("usuarios")
export class UsuariosController {
  constructor(private  usersService: UsuariosService) {}

  @Post()
  create(@Body() createUserDto: UsuarioDto) {
    return this.usersService.create(createUserDto);
  }

  @Get("todos")
  async findAll(): Promise<UsuarioDto[]> {
    return await this.usersService.getAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UsuarioDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.usersService.remove(+id);
  }
}
