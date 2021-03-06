import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version, EnvironmentType, Environment } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'Sp2016WebPartStrings';
import Sp2016, { ISp2016Props } from './components/Sp2016';
import { configureWeb } from '../../pnpSetup';

export interface ISp2016WebPartProps {
  description: string;
}

export default class Sp2016WebPart extends BaseClientSideWebPart<
  ISp2016WebPartProps
  > {
  public render(): void {
    const element: React.ReactElement<ISp2016Props> = React.createElement(
      Sp2016,
      {
        description: this.properties.description,
        web: configureWeb(Environment.type === EnvironmentType.Local, this.context)
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
