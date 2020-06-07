import * as React from 'react';
import { INoProps } from '../INoProps';

export default class ChatsNavBar extends React.Component<INoProps, {}> {
    public render(): React.ReactElement<INoProps> {
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
                Whatsapp Clone
            </div>
        );
    }
}
