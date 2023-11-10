import { config } from 'dotenv';
config({ path: __dirname + '/../../.env' });

import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.MYSQL_ADDON_HOST,
  port: parseInt(process.env.MYSQL_ADDON_PORT, 10),
  username: process.env.MYSQL_ADDON_USER,
  password: process.env.MYSQL_ADDON_PASSWORD,
  database: process.env.MYSQL_ADDON_DB,
  entities: ["dist/**/**.entity{.ts,.js}"],
  synchronize: true,
};


console.log(process.env.MYSQL_ADDON_HOST);
console.log(process.env.MYSQL_ADDON_PORT);
console.log(process.env.MYSQL_ADDON_USER);
console.log(process.env.MYSQL_ADDON_PASSWORD);
console.log(process.env.MYSQL_ADDON_DB);
