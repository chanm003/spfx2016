import * as React from 'react';
import styles from './UsersList.module.scss';
import { IUser } from '../../../../models/User';

const women10: string = require('../../assets/women10.jpg') as string;
const women20: string = require('../../assets/women20.jpg') as string;
const men4: string = require('../../assets/men4.jpg') as string;
const men9: string = require('../../assets/men9.jpg') as string;

export interface IUsersListProps {
    onUserPick: (user: IUser) => void;
}

export interface IUsersListState {
    users: IUser[];
}

export default class UsersList extends React.Component<IUsersListProps, IUsersListState> {
    constructor() {
        super();

        this.state = {
            users: [
                {
                    id: '1',
                    name: 'Avery Stewart',
                    picture: women10
                },
                {
                    id: '2',
                    name: 'Katie Peterson',
                    picture: women20
                },
                {
                    id: '3',
                    name: 'Ethan Gonzalez',
                    picture: men4
                },
                {
                    id: '4',
                    name: 'Bryan Wallace',
                    picture: men9
                }
            ]
        };
    }

    public render(): JSX.Element {
        const { users } = this.state;
        return (
            <ul className={styles.usersListContainer}>
                {users.map(user => (
                    <div
                        className={styles.usersListItem}
                        onClick={() => {
                            this.props.onUserPick(user);
                        }}
                        key={user.id}>
                        <img className={styles.userImage} src={user.picture} />
                        <div className={styles.userName}>{user.name}</div>
                    </div>
                ))}
            </ul>
        );
    }
}