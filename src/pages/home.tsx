import React from 'react';
import axios from 'axios';
import { xml2js } from 'xml-js';

interface Props {}

export class Home extends React.Component<Props> {
  async componentDidMount() {
    const url = 'http://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-Bali.xml';
    const result = await axios.get(url);
    const jsonData = xml2js(result.data);
    // console.log({ jsonData });
    const city = jsonData["elements"][0]["elements"][0]["elements"][3]["attributes"].description;
    const temperature = jsonData["elements"][0]["elements"][0]["elements"][3]["elements"][7]["elements"][0]["elements"][0]["elements"][0].text;
    console.log({ city, temperature });
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }
}
