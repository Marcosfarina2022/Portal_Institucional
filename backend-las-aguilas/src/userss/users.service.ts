import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Userss } from './entities/userss.entity';
import { UserDto1 } from './dto/user.dto';


@Injectable()
export class Users1Service {

  constructor(
    @InjectRepository(Userss)
    private readonly userRepository:Repository<Userss>
  ){}

  async create(createUserDto: UserDto1) {

    let dato = new Date(createUserDto.date);

    const user = new Userss(createUserDto.email,dato,createUserDto.password,createUserDto.surname,createUserDto.username,createUserDto.role);
    return await this.userRepository.save(user);
  }

  async findOneByEmail(email:string){
    return await this.userRepository.findOneBy({email})
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UserDto1) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
