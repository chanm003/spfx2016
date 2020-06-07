import * as React from 'react';
import styles from './MessageInput.module.scss';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Send from 'material-ui/svg-icons/content/send';

export interface IMessageInputProps {
    onSendMessage(content: string): void;
}

export default class MessageInput extends React.Component<IMessageInputProps, { message: string }> {
    constructor() {
        super();

        this.state = {
            message: ''
        };
    }

    public render(): JSX.Element {
        return (
            <div className={styles.messageInputContainer}>
                <input
                    type='text'
                    value={this.state.message}
                    onChange={(e: React.FormEvent<HTMLInputElement>) =>
                        this.setState({ message: e.currentTarget.value })}
                    onKeyPress={this.onKeyPress}
                    className={styles.input}
                    placeholder='Type a message' />
                <FloatingActionButton
                    onClick={this.onHandleClick}
                    backgroundColor='#2c6157'
                    style={{
                        boxShadow: 'none'
                    }}>
                    <Send />
                </FloatingActionButton>
            </div>
        );
    }

    private onHandleClick = (e: MouseEvent) => {
        e.preventDefault();
        this.onSubmit();
    }

    private onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            // host page for SPFx webpart may HTTP POST on press of Enter key
            e.preventDefault();
            this.onSubmit();
        }
    }

    private onSubmit = () => {
        const { message } = this.state;
        const { onSendMessage } = this.props;
        if (!message) { return; }

        if (typeof onSendMessage === 'function') {
            onSendMessage(message);
        }

        this.setState({ message: '' });
    }
}