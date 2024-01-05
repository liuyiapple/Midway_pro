import { Rule, RuleType } from '@midwayjs/validate';

const requireString = RuleType.string().required();
export class UserDTO {
  @Rule(requireString.error(new Error('用户名不能为空')))
  username: string;

  @Rule(requireString.error(new Error('手机号不能为空')))
  phone: string;

  @Rule(requireString.email().error(new Error('邮箱不能为空')))
  email: string;
}
