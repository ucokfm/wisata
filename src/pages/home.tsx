import React from 'react';
import axios from 'axios';
import { xml2js } from 'xml-js';

interface Props {}

export class Home extends React.Component<Props> {
  state = {
    denpasar: '0',
    medan: '0',
    jakarta: '0',
    bandung: '0',
    surabaya: '0',
  }

  async componentDidMount() {
    const url = 'http://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-Bali.xml';
    const result = await axios.get(url);
    const jsonData = xml2js(result.data);
    // console.log({ jsonData });
    const city: string = jsonData["elements"][0]["elements"][0]["elements"][3]["attributes"].description;
    const temperature = jsonData["elements"][0]["elements"][0]["elements"][3]["elements"][7]["elements"][0]["elements"][0]["elements"][0].text;
    console.log({ city, temperature });
    this.setState({ [city.toLowerCase()]: temperature });
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <ol>
          <li>Denpasar: {this.state.denpasar} C</li>
          <li>Medan: {this.state.medan} C</li>
          <li>Jakarta: {this.state.jakarta} C</li>
          <li>Bandung: {this.state.bandung} C</li>
          <li>Surabaya: {this.state.surabaya} C</li>
        </ol>
      </div>
    );
  }
}
