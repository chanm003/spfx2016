import * as React from 'react';
import styles from './UsersList.module.scss';
import { IUser } from '../../../../models/User';

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
                    name: 'Ethan Gonzalez',
                    picture: 'https://randomuser.me/api/portraits/thumb/men/9.jpg'
                },
                {
                    id: '2',
                    name: 'Bryan Wallace',
                    picture: 'https://randomuser.me/api/portraits/thumb/men/4.jpg'
                },
                {
                    id: '3',
                    name: 'Avery Stewart',
                    picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg'
                },
                {
                    id: '4',
                    name: 'Katie Peterson',
                    picture: 'https://randomuser.me/api/portraits/thumb/women/3.jpg'
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