import * as React from 'react';
import ChatsListScreen from './ChatsListScreen/ChatsListScreen';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Web } from '@pnp/sp';

export interface ISp2016Props {
  description: string;
  web: Web;
}

interface ITodo {
  Id?: number;
  Title: string;
  Completed: boolean;
  ['odata.etag']?: string;
}

export default class Sp2016 extends React.Component<ISp2016Props, {}> {
  constructor() {
    super();
  }

  public componentDidMount(): void {
    this.getListItems();
  }

  public render(): React.ReactElement<ISp2016Props> {
    return (
      <MuiThemeProvider>
        <ChatsListScreen />
      </MuiThemeProvider>
    );
  }

  private async getListItems(): Promise<void> {
    const { web } = this.props;
    const resp: ITodo[] = await web.lists.getByTitle('Todos').items.getAll() as ITodo[];
    console.log('Passed in spweb', resp);
  }
}
