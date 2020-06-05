import * as React from 'react';
import { INoProps } from '../INoProps';
import { chats } from '../../../../db';
import * as moment from 'moment';
import styles from './ChatsList.module.scss';

export default class ChatsList extends React.Component<INoProps, {}> {
    public render(): React.ReactElement<INoProps> {
        return (
            <div className={styles.chatsListContainer}>
                <ul className={styles.list}>
                    {chats.map((chat) => (
                        <div key={chat.id} className={styles.listItem}>
                            <img className={styles.avatar} src={chat.picture} alt='Profile' />
                            <div className={styles.chatInfo}>
                                <div className={styles.chatName}>{chat.name}</div>
                                {chat.lastMessage && (
                                    <div className={styles.messageContent}>{chat.lastMessage.content}</div>
                                )}
                                {chat.lastMessage && (
                                    <div className={styles.timestamp}>
                                        {moment(chat.lastMessage.createdAt).format('HH:mm')}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </ul>
            </div>
        );
    }
}
