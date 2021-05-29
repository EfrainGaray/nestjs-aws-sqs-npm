import { ModuleMetadata } from '@nestjs/common/interfaces';
import { ConfigurationOptions } from 'aws-sdk';
/**
 *  @export
 * @interface IConexionModuleAsyncOptions
 * @extends {Pick<ModuleMetadata, 'imports'>}
 */
export interface IConexionModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
    useFactory: (...args: any[]) => Promise<ConfigurationOptions> | ConfigurationOptions;
    inject?: any[];
}
