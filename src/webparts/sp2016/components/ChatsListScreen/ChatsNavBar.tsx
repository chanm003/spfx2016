import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import { INoProps } from '../INoProps';

export default class ChatsNavBar extends React.Component<INoProps, {}> {
    public render(): React.ReactElement<INoProps> {
        return (
            <AppBar
                title='Whats App Clone'
                style={{
                    backgroundColor: '#2c6157',
                    color: 'white',
                    fontSize: '20px',
                    lineHeight: '40px'
                }}
                iconClassNameRight='muidocs-icon-navigation-expand-more'
            />
        );
    }
}
