import * as React from 'react';
import { IWebProps } from '../../../../pnpSetup';
import { IChat, Chat } from '../../../../models/Chat';
import styles from './ChatRoomScreen.module.scss';
import ChatNavBar from './ChatNavBar';
import { History } from 'history';
import MessagesList from './MessagesList';
import MessageInput from './MessageInput';
import { Message } from '../../../../models/Message';

export interface IChatRoomScreenProps extends IWebProps {
    chatId: string;
    history: History;
}

export interface IChatRoomScreenState {
    chat: Chat;
}

export default class ChatRoomScreen extends React.Component<IChatRoomScreenProps, IChatRoomScreenState> {
    constructor() {
        super();

        this.state = {
            chat: undefined
        };
    }

    public componentDidMount(): void {
        this.getListItem();
    }

    public onSendMessage = async (message: string): Promise<void> => {
        const { chat } = this.state;
        chat.messages.add(new Message({ content: message, createdAt: new Date() }));
        await chat.save(this.props.web);
        this.setState({ chat });
    }

    public render(): JSX.Element {
        const { chat } = this.state;

        if (!chat) { return null; }

        return (
            <div className={styles.chatRoomScreenContainer}>
                <ChatNavBar chat={chat} history={this.props.history} />
                {chat.messages && <MessagesList messages={chat.messages.toArray()} />}
                <MessageInput onSendMessage={this.onSendMessage} />
            </div>
        );
    }

    private async getListItem(): Promise<void> {
        const { web, chatId } = this.props;
        const item: IChat = await web.lists.getByTitle('Chats').items.getById(+chatId).get<IChat>();
        this.setState({ chat: new Chat(item) });
    }
}