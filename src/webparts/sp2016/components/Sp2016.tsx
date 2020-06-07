import * as React from 'react';
import { Router, Route, hashHistory, RouteComponentProps } from 'react-router';
import ChatsListScreen from './ChatsListScreen/ChatsListScreen';
import ChatRoomScreen from './ChatRoomScreen/ChatRoomScreen';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { IWebProps } from '../../../pnpSetup';
import ChatCreationScreen from './ChatCreationScreen/ChatCreationScreen';

export interface ISp2016Props extends IWebProps {
  description: string;
}

export default class Sp2016 extends React.Component<ISp2016Props, {}> {
  public render(): React.ReactElement<ISp2016Props> {
    const { web } = this.props;
    return (
      <MuiThemeProvider>
        <Router history={hashHistory}>
          <Route path='/chats' component={() => (<ChatsListScreen web={web} history={hashHistory} />)} />
          <Route
            path='/chats/:chatId'
            component={(props: RouteComponentProps<{ chatId: string }, {}>) => (
              <ChatRoomScreen web={web} chatId={props.params.chatId} history={hashHistory} />
            )}
          />
          <Route path='/new-chat' component={() => (<ChatCreationScreen web={web} history={hashHistory} />)} />
          <Route path='/' component={() => (<ChatsListScreen web={web} history={hashHistory} />)} />
        </Router>
      </MuiThemeProvider>
    );
  }
}
