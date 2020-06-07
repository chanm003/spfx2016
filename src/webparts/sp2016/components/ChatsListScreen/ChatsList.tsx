import * as React from 'react';
import * as moment from 'moment';
import styles from './ChatsList.module.scss';
import { Chat } from '../../../../models/Chat';
import { Message } from '../../../../models/Message';
import { History } from 'history';

export interface IChatsListProps {
    chats: Chat[];
    history: History;
}

export default class ChatsList extends React.Component<IChatsListProps, {}> {
    public render(): React.ReactElement<IChatsListProps> {
        const { chats } = this.props;

        return (
            <div className={styles.chatsListContainer}>
                <ul className={styles.list}>
                    {chats.map(chat => this.renderChat(chat))}
                </ul>
            </div>
        );
    }

    private renderChat(chat: Chat): JSX.Element {
        return (
            <div key={chat.id} className={styles.listItem} onClick={() => {
                this.props.history.push(`chats/${chat.id}`);
            }}>
                <img className={styles.avatar} src={chat.picture} alt='Profile' />
                {this.renderChatInfo(chat)}
            </div>
        );
    }

    private renderChatInfo(chat: Chat): JSX.Element {
        const lastMessage: Message = chat.messages.getLastMessage();
        return (
            <div className={styles.chatInfo}>
                <div className={styles.chatName}>{chat.title}</div>
                {lastMessage && (
                    <div className={styles.messageContent}>{lastMessage.content}</div>
                )}
                {lastMessage && (
                    <div className={styles.timestamp}>
                        {moment(lastMessage.createdAt).format('HH:mm')}
                    </div>
                )}
            </div>
        );
    }
}
