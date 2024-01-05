import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { UserInfo } from '../entity/user.entity';
import { BaseService } from './base.service';

@Provide()
export class UserService extends BaseService<UserInfo> {
  @InjectEntityModel(UserInfo)
  userModel: Repository<UserInfo>;

  getModel(): Repository<UserInfo> {
    return this.userModel;
  }
}
