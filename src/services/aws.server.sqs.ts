import { CustomTransportStrategy, Server } from '@nestjs/microservices';

export class AwsCloudSqsServer
    extends Server
    implements CustomTransportStrategy {
    /**
     * This method is triggered when you run "app.listen()".
     */
    async listen(callback: () => void) {
        console.log(this.messageHandlers);
        callback();
    }

    /**
     * This method is triggered on application shutdown.
     */
    close() {}
}