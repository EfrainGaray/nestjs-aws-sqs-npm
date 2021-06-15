
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">Module for aws services (SQS CONSUMER) 
        <p align="center">

<a href="https://www.npmjs.com/~nestjscore" target="_blank">
    <img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" />
</a>
<a href="#badge">
    <img alt="semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">
</a>
<a href="https://paypal.me/hea717" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
</p>


<h1 align="center" style="border-bottom: none;">SQS CONSUMER NPM AWS SERVICES</h1>



# import 

 main.ts

```javascript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {MicroserviceOptions} from "@nestjs/microservices";
import {AwsCloudSqsServer} from "nestjs-aws-sqs";

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
        AppModule,
            {
                strategy: new AwsCloudSqsServer({
                    params:{
                        MaxNumberOfMessages: 1,
                        MessageAttributeNames: ["All"],
                        QueueUrl: "QueueUrl",
                        VisibilityTimeout: 30,
                        WaitTimeSeconds: 0,
                    },
                    conexion:{
                        channel: 'notificaions',
                        refresh: 500, // ms
                        region: 'region'
                    }
                }),
            },
    );
    app.listen(() => console.log('Microservice is listening'));
}
bootstrap();
```



