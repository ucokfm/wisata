import React from 'react';
import { withRouter } from 'react-router-dom';
import { observer } from 'mobx-react';

import { appStore } from '../store';

interface Props {}

@observer
class BaseDetail extends React.Component<Props> {
  state = {
    city: 'denpasar',
  };

  async componentDidMount() {
    const city: string = (this.props as any).match.params.city;
    // console.log({ city });
    this.setState({ city });
  }

  render() {
    const city: string = (this.props as any).match.params.city;
    const data = (appStore as any).cities[city];
    return (
      <div style={{ padding: 30 }}>
        <h1>Detail {city}</h1>
        <ul>
          <li>Kisaran paket wisata per hari: Rp {data.price}</li>
          <li>Jumlah kunjungan per tahun: {data.count}</li>
        </ul>
      </div>
    );
  }
}

export const Detail = withRouter(BaseDetail as any);
