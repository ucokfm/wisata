import React from 'react';
import { withRouter } from 'react-router-dom';

interface Props {}

class BaseDetail extends React.Component<Props> {
  async componentDidMount() {
    const city: string = (this.props as any).match.params.city;
    console.log({ city });
    
  }

  render() {
    const city: string = (this.props as any).match.params.city;
    return (
      <div>
        <h1>Detail {city}</h1>
      </div>
    );
  }
}

export const Detail = withRouter(BaseDetail as any);
