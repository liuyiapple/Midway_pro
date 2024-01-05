import { Body, Query } from '@midwayjs/core';
import { BaseEntity } from '../entity/base.entity';
import { BaseService } from '../service/base.service';
import { DeleteResult } from 'typeorm';

export abstract class BaseControll<T extends BaseEntity> {
  abstract getService(): BaseService<T>;

  async create(@Body() O: T) {
    return await this.getService().createUser(O);
  }

  async delUser(@Query('id') id: string): Promise<DeleteResult> {
    return await this.getService().deletUser(id);
  }

  async updateUser(@Body() O: T) {
    return await this.getService().updateUser(O);
  }

  async findUser(@Query('id') id: string) {
    return await this.getService().findUser(id);
  }
}
