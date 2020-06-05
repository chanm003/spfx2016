import * as React from 'react';
import ChatsListScreen from './ChatsListScreen/ChatsListScreen';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export interface ISp2016Props {
  description: string;
}

export default class Sp2016 extends React.Component<ISp2016Props, {}> {
  public render(): React.ReactElement<ISp2016Props> {
    return (
      <MuiThemeProvider>
        <ChatsListScreen />
      </MuiThemeProvider>
    );
  }
}
