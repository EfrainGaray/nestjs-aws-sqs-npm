import { DynamicModule, Module } from '@nestjs/common';
import { IConexionModuleAsyncOptions } from "./interfaces";
import { CONFIG_CONNECTION_OPTIONS } from "./constants";


@Module({})
export class AwsNestModule {
    static forRootSnsAsync(options: IConexionModuleAsyncOptions): DynamicModule {
        return {
            module: AwsNestModule,
            providers: [
                {
                    provide: CONFIG_CONNECTION_OPTIONS,
                    useFactory: options.useFactory,
                    inject: options.inject || [],
                },
            ],
            exports: [],
        };
    }
}
