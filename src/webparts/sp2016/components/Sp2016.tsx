import * as React from 'react';
import styles from './Sp2016.module.scss';
import { ISp2016Props } from './ISp2016Props';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Sp2016 extends React.Component < ISp2016Props, {} > {
  public render(): React.ReactElement<ISp2016Props> {
    return(
      <div className = { styles.sp2016 } >
  <div className={styles.container}>
    <div className={styles.row}>
      <div className={styles.column}>
        <span className={styles.title}>Welcome to SharePoint!</span>
        <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
        <p className={styles.description}>{escape(this.props.description)}</p>
        <a href='https://aka.ms/spfx' className={styles.button}>
          <span className={styles.label}>Learn more</span>
        </a>
      </div>
    </div>
  </div>
      </div >
    );
  }
}
