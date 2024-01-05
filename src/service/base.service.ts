import { Provide } from '@midwayjs/core';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { BaseEntity } from '../entity/base.entity';
@Provide()
export abstract class BaseService<T extends BaseEntity> {
  abstract getModel(): Repository<T>;

  // 添加
  async createUser(O: T): Promise<T> {
    return await this.getModel().save(O);
  }

  // 删除
  async deletUser(id: string): Promise<DeleteResult> {
    return await this.getModel().delete(id);
  }
  // 修改
  async updateUser(O: T): Promise<UpdateResult> {
    return await this.getModel().update(O.id, O as any);
  }
  // 查找
  async findUser(id: string): Promise<T> {
    return await this.getModel().findOneBy({ id } as any);
  }
}
