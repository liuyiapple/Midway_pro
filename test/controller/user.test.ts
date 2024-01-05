import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework } from '@midwayjs/koa';
import { Application } from '@midwayjs/koa';
import { UserInfo } from '../../src/entity/user.entity';

let app: Application;
let user: UserInfo;
beforeAll(async () => {
  // create app
  try {
    app = await createApp<Framework>();
  } catch (error) {
    console.log(error);
  }
});

afterAll(async () => {
  await close(app);
});

describe('test/controller/home.test.ts', () => {
  it('should POST /register', async () => {
    user = new UserInfo();

    Object.assign(user, {
      username: 'test',
      password: 'test',
      email: '1232',
    });
    // create app
    const app = await createApp<Framework>();

    // make request
    const result = await createHttpRequest(app).post('/register');

    // use expect by jest
    expect(result.status).toBe(200);
    expect(result.text).toBe('Hello Midwayjs!');
  });
});
