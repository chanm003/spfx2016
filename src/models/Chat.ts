import * as _ from 'lodash';
import { Messages } from './Message';
import { Web, ItemAddResult } from '@pnp/sp';
import { IUser } from './User';

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

    public static async delete(web: Web, chatId: number): Promise<void> {
        await web.lists.getByTitle('Chats').items.getById(chatId).delete();
    }

    public static async newOrExisting(web: Web, user: IUser): Promise<Chat> {
        const queryResults: IChat[] =
            await web.lists.getByTitle('Chats').items.filter(`Title eq '${user.name}'`).get<IChat[]>();
        if (queryResults.length > 0) {
            // existing
            return new Chat(queryResults[0]);
        } else {
            // create new
            const newChat: ItemAddResult = await web.lists.getByTitle('Chats').items.add({
                Title: user.name,
                Picture: user.picture,
                Messages: JSON.stringify([])
            });
            return new Chat(newChat.data);
        }
    }

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