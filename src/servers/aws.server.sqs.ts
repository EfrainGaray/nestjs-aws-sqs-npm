import { Logger } from '@nestjs/common';
import { CustomTransportStrategy, Server } from '@nestjs/microservices';
import { SQSClient, ReceiveMessageCommand, DeleteMessageCommand } from "@aws-sdk/client-sqs";
import {AwsSqsOptions} from "../interfaces";

export class AwsCloudSqsServer extends Server implements CustomTransportStrategy {
    public readonly logger = new Logger(AwsCloudSqsServer.name);
    private client: SQSClient;
    error = false;
    constructor(protected readonly options: AwsSqsOptions) {
        super();
    }
    /**
     * This method is triggered when you run "app.listen()".
     */
    async listen(callback: () => void) {
        const { region } = this.options.conexion;
        this.client = new SQSClient({region})
        await this.start(callback);
    }
    async start (callback?: () => void) {
        const { params } = this.options;
        const { channel, refresh } = this.options.conexion;

        try {
            const data = await this.client.send(new ReceiveMessageCommand(params));
            if (data.Messages) {
                var deleteParams = {
                    QueueUrl: params.QueueUrl,
                    ReceiptHandle: data.Messages[0].ReceiptHandle,
                };
                try {
                    const data = await this.client.send(new DeleteMessageCommand(deleteParams));
                } catch (err) {
                    if(!this.error) this.logger.debug(err);

                }
            }
            this.error = false;
            const echoHandler = this.messageHandlers.get(channel);
            data.Messages.map( async (message) =>await echoHandler(JSON.parse(message.Body)))
            setTimeout(async () => await this.start(callback), refresh)
        } catch (err) {
            this.error = true;
            this.logger.log('no messages');
            setTimeout(async () => await this.start(callback), 10000);
        }

        callback()
    }

    /**
     * This method is triggered on application shutdown.
     */
    close() {}
}