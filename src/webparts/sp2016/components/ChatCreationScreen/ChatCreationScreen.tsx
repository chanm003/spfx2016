import * as React from 'react';
import UsersList from './UsersList';
import ChatCreationNavbar from './ChatCreationNavbar';
import { History } from 'history';
import { Chat } from '../../../../models/Chat';
import { IWebProps } from '../../../../pnpSetup';

export interface IChatCreationScreenProps extends IWebProps {
    history: History;
}

export default class ChatCreationScreen extends React.Component<IChatCreationScreenProps, {}> {
    public render(): React.ReactElement<IChatCreationScreenProps> {
        return (
            <div style={{ height: '100vh' }}>
                <ChatCreationNavbar history={this.props.history} />
                <UsersList onUserPick={async (user) => {
                    const chat: Chat = await Chat.newOrExisting(this.props.web, user);
                    this.props.history.push(`/chats/${chat.id}`);
                }} />
            </div>
        );
    }
}