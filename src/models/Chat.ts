import * as _ from 'lodash';
import { Messages } from './Message';
import { Web } from '@pnp/sp';

export interface IChat {
    Id?: number;
    Title: string;
    Picture: string;
    Messages: string;
    ['odata.etag']?: string;
}

export class Chat {
    public id?: number;
    public title: string;
    public picture: string;
    public messages: Messages;

    constructor(attrs: IChat) {
        this.id = attrs.Id;
        this.title = attrs.Title;
        this.picture = attrs.Picture;
        this.messages = new Messages(attrs.Messages);
    }

    public async save(web: Web): Promise<void> {
        await web.lists.getByTitle('Chats').items.getById(this.id).update({
            Title: this.title,
            Picture: this.picture,
            Messages: JSON.stringify(this.messages.toArray())
        });
    }
}

export function toModels(items: IChat[]): Chat[] {
    return _.map(items, item => {
        return new Chat(item);
    });
}