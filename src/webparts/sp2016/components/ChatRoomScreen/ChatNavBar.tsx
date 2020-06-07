import * as React from 'react';
import { Chat } from '../../../../models/Chat';
import IconButton from 'material-ui/IconButton';
import BackArrow from 'material-ui/svg-icons/hardware/keyboard-backspace';
import { History } from 'history';

export interface IChatNavBarProps {
    chat: Chat;
    history: History;
}

export default class ChatNavBar extends React.Component<IChatNavBarProps, {}> {
    public render(): React.ReactElement<IChatNavBarProps> {
        return (
            <div
                style={{
                    minHeight: '64px',
                    paddingLeft: '24px',
                    paddingRight: '24px',
                    display: 'flex',
                    position: 'relative',
                    alignItems: 'center',
                    padding: '0',
                    flexDirection: 'row',
                    backgroundColor: '#2c6157',
                    color: 'white',
                    fontSize: '20px'
                }}
            >
                <IconButton
                    onClick={() => this.props.history.replace('/chats')}
                    iconStyle={{ color: 'white', width: '28px', height: '28px' }}>
                    <BackArrow />
                </IconButton>
                <img
                    src={this.props.chat.picture}
                    style={{
                        height: '40px',
                        width: '40px',
                        marginTop: '3px',
                        marginLeft: '-10px',
                        objectFit: 'cover',
                        padding: '4px',
                        borderRadius: '50%'
                    }} />
                <div style={{ lineHeight: '56px' }}>{this.props.chat.title}</div>
            </div>
        );
    }
}
