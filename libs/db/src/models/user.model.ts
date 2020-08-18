import { prop, ModelOptions } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'

// 给数据修改增加时间戳
@ModelOptions({
  schemaOptions:{
    timestamps: true
  }
})

export class User{
    @ApiProperty({ description: '用户名', example: 'user'})
    @prop()
    username:string

    @ApiProperty({description: '密码', example: 'pwd'})
    @prop()
    password:string

    @ApiProperty({description: '头像', example: 'https://person-space.oss-cn-beijing.aliyuncs.com/blindfold.png'})
    @prop()
    avatar:string
}