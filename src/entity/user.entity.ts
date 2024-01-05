import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('user')
export class UserInfo extends BaseEntity {
  @Column()
  username: string;

  @Column({ length: 200 })
  phone: string;

  @Column()
  email: string;
}
