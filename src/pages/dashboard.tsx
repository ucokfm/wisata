import React from 'react';
import { observer } from 'mobx-react';

import { appStore } from '../store';

interface Props {}

@observer
export class Dashboard extends React.Component<Props> {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <ul>
          {(appStore as any).guests.map((guest: any) => (
            <li key={guest.name}>{guest.name}: {guest.message}</li>
          ))}
        </ul>
      </div>
    );
  }
}
