import { MidwayConfig } from '@midwayjs/core';
import { UserInfo } from '../entity/user.entity';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1704259392743_9443',
  koa: {
    port: 7001,
  },
  cors: {
    credentials: false,
  },
  typeorm: {
    dataSource: {
      default: {
        /**
         * 单数据库实例
         */
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'Ly612127',
        database: 'realworld',
        synchronize: true, // 如果第一次使用，不存在表，有同步的需求可以写 true，注意会丢数据
        logging: false,
        // 配置实体模型
        entities: [UserInfo],
      },
    },
  },
} as MidwayConfig;
