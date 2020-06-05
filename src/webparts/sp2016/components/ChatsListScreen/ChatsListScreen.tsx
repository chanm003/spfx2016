import * as React from 'react';
import { INoProps } from '../INoProps';
import ChatsList from './ChatsList';
import ChatsNavBar from './ChatsNavBar';

export default class ChatsListScreen extends React.Component<INoProps, {}> {
    public render(): React.ReactElement<INoProps> {
        return (
            <div style={{ height: '100vh' }}>
                <ChatsNavBar />
                <ChatsList />
            </div>
        );
    }
}