# [Nest(NestJS) -- A progressive Node.js framework](https://docs.nestjs.com/openapi/introduction)

### Nest 安装 与项目创建
  - **环境要求**    下载安装 Node.js、npm包管理器 
  - **Nest安装**    ``` npm install -g @nestjs/cli ```
  - **检查安装**    ``` nest -v ```
  - **创建项目**    ``` nest new <project-name> ```  

  <img src="https://person-study.oss-cn-beijing.aliyuncs.com/create-nest-work.png">

  - **启动项目**    ``` npm run start ```
  > 使用 ``` nest start -w ``` 启动项目后，当文件被保存自动更新项目  

  <img src="https://person-study.oss-cn-beijing.aliyuncs.com/nest-start-successfully.png">
  
  - **项目目录**
  ```
    ├─ src                                   
    │   │── app.controller.spec.ts    
    │   │── app.controller.ts         # 带有单个路由的基本控制器
    │   │── app.module.ts             # 应用程序的根模块
    │   │── app.service.ts            # 处理具体业务               
    │   └── main.ts                   # 应用程序入口文件
  ```    
### 项目优化
  - **集成SwaggerUI**
    1. 安装依赖 ``` npm install --save @nestjs/swagger swagger-ui-express ```
    2. 项目中使用 **main.ts**
        ``` 
        import { NestFactory } from '@nestjs/core';
        import { AppModule } from './app.module';
        import { SwaggerModule, DocumentBuilder  } from '@nestjs/swagger'   // 引入swagger插件
        
        sync function bootstrap() {
          const app = await NestFactory.create(AppModule);
          // DocumentBuilder是一个辅助类，有助于结构的基本文件SwaggerModule。它包含几种方法，可用于设置诸如标题，描述，版本等属性
          const options = new DocumentBuilder() 
            .setTitle('my-nest-project-api-docs') // api文档标题
            .setDescription('The cats API description') // api文档描述
            .setVersion('1.0') // api文档版本
            .build();
          // 为了创建完整的文档（具有定义的HTTP路由），我们使用类的createDocument()方法SwaggerModule。此方法带有两个参数，分别是应用程序实例和基本Swagger选项。
          const document = SwaggerModule.createDocument(app, options);
          最后一步是setup()。它依次接受（1）装入Swagger的路径，（2）应用程序实例, （3）描述Nest应用程序的文档。
          SwaggerModule.setup('/api-docs', app, document);
          await app.listen(3000);
          console.log('start successfully, run http://localhost:3000/api-docs/')
        }
        ```
      3.启动项目，打开 http://localhost:3000/api-docs/, swaggerUI 集成成功,具体设置后文会深入讲解
      <img src="https://person-study.oss-cn-beijing.aliyuncs.com/SwaggerUI.png">
      
      