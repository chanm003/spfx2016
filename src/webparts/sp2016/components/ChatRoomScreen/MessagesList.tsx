import * as React from 'react';
import { Message } from '../../../../models/Message';
import styles from './MessagesList.module.scss';
import * as moment from 'moment';

export interface IMessagesListProps {
    messages: Message[];
}

export default class MessagesList extends React.Component<IMessagesListProps, {}> {
    public render(): JSX.Element {
        const { messages } = this.props;

        return (
            <div className={styles.messagesListContainer}>
                {messages.map(message => (
                    <div className={styles.messageItem} key={message.createdAt.toString()}>
                        <div className={styles.contents}>{message.content}</div>
                        <div className={styles.timestamp}>
                            {moment(message.createdAt).format('HH:mm')}
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}