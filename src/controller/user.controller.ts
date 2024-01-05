import { Body, Controller, Inject, Post, Query } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { UserService } from '../service/user.service';
import { UserInfo } from '../entity/user.entity';
import { DeleteResult } from 'typeorm';
import { BaseControll } from './base.controller';
import { BaseService } from '../service/base.service';

@Controller()
export class User extends BaseControll<UserInfo> {
  @Inject()
  userService: UserService;

  @Inject()
  ctx: Context;

  @Post('/register')
  async create(@Body() user: UserInfo) {
    return super.create(user);
  }

  @Post('/del')
  async delUser(@Query('id') id: string): Promise<DeleteResult> {
    return super.delUser(id);
  }

  @Post('/update/user')
  async updateUser(@Body() user: UserInfo) {
    return super.updateUser(user);
  }

  @Post('/find/user')
  async findUser(@Query('id') id: string) {
    return super.findUser(id);
  }
  getService(): BaseService<UserInfo> {
    return this.userService;
  }
}
