import { Controller } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { User } from '@libs/db/models/user.model';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud'

@Crud({
  model: User
})
@ApiTags('用户')
@Controller('/nest-project/users')
export class UsersController {
  constructor(@InjectModel(User) private readonly model){ }
}
