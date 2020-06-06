import * as React from 'react';
import ChatsList from './ChatsList';
import ChatsNavBar from './ChatsNavBar';
import { IWebProps } from '../../../../pnpSetup';
import { IChat, Chat, toModels } from '../../../../models/Chat';

export interface IChatsListScreenState {
    chats: Chat[];
}

export default class ChatsListScreen extends React.Component<IWebProps, IChatsListScreenState> {
    constructor() {
        super();

        this.state = {
            chats: []
        };
    }

    public componentDidMount(): void {
        this.getListItems();
    }

    public render(): React.ReactElement<IWebProps> {
        return (
            <div style={{ height: '100vh' }}>
                <ChatsNavBar />
                <ChatsList chats={this.state.chats} />
            </div>
        );
    }

    private async getListItems(): Promise<void> {
        const { web } = this.props;
        const items: IChat[] = await web.lists.getByTitle('Chats').items.getAll() as IChat[];
        this.setState({ chats: toModels(items) });
    }
}