import { Test, TestingModule } from '@nestjs/testing';
import { MongoConexionService } from './mongo-conexion.service';

describe('MongoConexionService', () => {
  let service: MongoConexionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MongoConexionService],
    }).compile();

    service = module.get<MongoConexionService>(MongoConexionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
