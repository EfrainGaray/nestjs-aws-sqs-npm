
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">Module for aws services (STARTER) 
        <p align="center">

<a href="https://www.npmjs.com/~nestjscore" target="_blank">
    <img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" />
</a>
<a href="#badge">
    <img alt="semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">
</a>
<a href="https://paypal.me/hea717" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
</p>


<h1 align="center" style="border-bottom: none;">STARTER NPM AWS SERVICES</h1>



#import 

 app.module.ts

```javascript
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AwsNestModule } from 'nestjs-aws-e';
@Module({
    imports: [
        AwsNestModule.forRootSnsAsync({
            useFactory: async () => {
                return {
                    accessKeyId: '',
                    secretAccessKey: '',
                    region: '',
                };
            },
            inject: [],
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
```



