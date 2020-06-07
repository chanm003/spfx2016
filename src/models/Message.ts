import * as _ from 'lodash';

export interface IMessage {
    content: string;
    createdAt: Date | string;
}

export class Message {
    public content: string;
    public createdAt: Date;

    constructor(attrs: IMessage) {
        this.content = attrs.content;
        this.createdAt = typeof attrs.createdAt === 'string' ? new Date(attrs.createdAt) : attrs.createdAt;
    }
}

export class Messages {
    private messages: Message[];

    constructor(stringifiedJson: string) {
        this.messages = _.map(JSON.parse(stringifiedJson), (item: IMessage) => new Message(item));
    }

    public add(message: Message): void {
        this.messages.push(message);
    }

    public toArray(): Message[] {
        return this.messages;
    }

    public getLastMessage(): Message {
        if (this.messages.length > 0) {
            return this.messages[this.messages.length - 1];
        }
        return undefined;
    }
}