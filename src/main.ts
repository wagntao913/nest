import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder  } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
  .setTitle('my-nest-project-api-docs')
  .setDescription('我的nest项目接口文档')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
  app.setGlobalPrefix('nest-project'); // 全局路由前缀
  await app.listen(3000);
  console.log('start successfully, run http://localhost:3000/nest-project/api-docs/')
}
bootstrap();
