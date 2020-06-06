import * as React from 'react';
import ChatsListScreen from './ChatsListScreen/ChatsListScreen';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { IWebProps } from '../../../pnpSetup';

export interface ISp2016Props extends IWebProps {
  description: string;
}

export default class Sp2016 extends React.Component<ISp2016Props, {}> {
  public render(): React.ReactElement<ISp2016Props> {
    const { web } = this.props;
    return (
      <MuiThemeProvider>
        <ChatsListScreen web={web} />
      </MuiThemeProvider>
    );
  }
}
