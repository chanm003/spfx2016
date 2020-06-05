import * as _ from 'lodash';

export interface IMessage {
    id: string;
    content: string;
    createdAt: Date;
}

export interface IChat {
    id: string;
    name: string;
    picture: string;
    lastMessage?: IMessage;
}

export const messages: IMessage[] = [
    {
        id: '1',
        content: 'You on your way?',
        createdAt: new Date(Date.now() - 60 * 1000 * 1000)
    },
    {
        id: '2',
        content: "Hey, it's me",
        createdAt: new Date(Date.now() - 2 * 60 * 1000 * 1000)
    },
    {
        id: '3',
        content: 'I should buy a boat',
        createdAt: new Date(Date.now() - 24 * 60 * 1000 * 1000)
    },
    {
        id: '4',
        content: 'This is wicked good ice cream.',
        createdAt: new Date(Date.now() - 14 * 24 * 60 * 1000 * 1000)
    }
];

export const chats: IChat[] = [
    {
        id: '1',
        name: 'Ethan Gonzalez',
        picture: 'https://randomuser.me/api/portraits/thumb/men/9.jpg',
        lastMessage: _.find(messages, msg => msg.id === '1')
    },
    {
        id: '2',
        name: 'Bryan Wallace',
        picture: 'https://randomuser.me/api/portraits/thumb/men/4.jpg',
        lastMessage: _.find(messages, msg => msg.id === '2')
    },
    {
        id: '3',
        name: 'Avery Stewart',
        picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg',
        lastMessage: _.find(messages, msg => msg.id === '3')
    },
    {
        id: '4',
        name: 'Katie Peterson',
        picture: 'https://randomuser.me/api/portraits/thumb/women/3.jpg',
        lastMessage: _.find(messages, msg => msg.id === '4')
    }
];