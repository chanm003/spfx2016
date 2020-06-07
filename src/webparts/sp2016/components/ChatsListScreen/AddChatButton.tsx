import * as React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Chat from 'material-ui/svg-icons/communication/chat';
import { History } from 'history';

export interface IAddChatButtonProps {
    history: History;
}

export default class ChatCreationNavBar extends React.Component<IAddChatButtonProps, {}> {
    public render(): JSX.Element {
        return (
            <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                <FloatingActionButton
                    onClick={this.onHandleClick}
                    backgroundColor='#2c6157'
                    style={{
                        boxShadow: 'none'
                    }}>
                    <Chat />
                </FloatingActionButton>
            </div>
        );
    }

    private onHandleClick = (e: MouseEvent) => {
        e.preventDefault();
        this.props.history.push('/new-chat');
    }
}
