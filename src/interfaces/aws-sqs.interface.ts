interface Conexion {
    region?: string;
    channel?: string;
    refresh?: number;
}
interface Options {
    AttributeNames?: string[],
    MaxNumberOfMessages?: number,
    MessageAttributeNames?: string[],
    QueueUrl: string,
    VisibilityTimeout?: number,
    WaitTimeSeconds?: number,
}

export interface AwsSqsOptions{
    params?: Options
    conexion?: Conexion,
}