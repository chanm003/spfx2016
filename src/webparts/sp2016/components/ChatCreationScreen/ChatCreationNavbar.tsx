import * as React from 'react';
import IconButton from 'material-ui/IconButton';
import BackArrow from 'material-ui/svg-icons/hardware/keyboard-backspace';
import { History } from 'history';

export interface IChatCreationNavBarProps {
    history: History;
}

export default class ChatCreationNavBar extends React.Component<IChatCreationNavBarProps, {}> {
    public render(): React.ReactElement<ChatCreationNavBar> {
        return (
            <div
                style={{
                    minHeight: '64px',
                    paddingLeft: '24px',
                    paddingRight: '24px',
                    display: 'flex',
                    position: 'relative',
                    alignItems: 'center',
                    backgroundColor: '#2c6157',
                    color: 'white',
                    fontSize: '20px',
                    lineHeight: '40px'
                }}
            >
                <IconButton
                    onClick={() => this.props.history.replace('/chats')}
                    iconStyle={{ color: 'white', width: '28px', height: '28px' }}>
                    <BackArrow />
                </IconButton>
                <div style={{ flex: '1' }}>Create Chat</div>
            </div>
        );
    }
}
