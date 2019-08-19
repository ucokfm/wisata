import React from 'react';
import axios from 'axios';
import { xml2js } from 'xml-js';
import {Link } from 'react-router-dom';

interface Props {}

export class Home extends React.Component<Props> {
  state = {
    denpasar: { t: '0', w: '' },
    medan: { t: '0', w: '' },
    jakarta: { t: '0', w: '' },
    bandung: { t: '0', w: '' },
    surabaya: { t: '0', w: '' },
  }

  async componentDidMount() {
    const urls = {
      denpasar: 'http://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-Bali.xml',
      jakarta: 'http://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-DKIJakarta.xml',
      medan: 'http://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-SumateraUtara.xml',
      bandung: 'http://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-JawaBarat.xml',
      surabaya: 'http://data.bmkg.go.id/datamkg/MEWS/DigitalForecast/DigitalForecast-JawaTimur.xml',
    };
    for (const [k, v] of Object.entries(urls)) {
      const jsonData = xml2js((await axios.get(v) as any).data);
      // console.log({ [k]: jsonData });
      let t = '';
      let w = '';
      if (k === 'denpasar') {
        t = jsonData["elements"][0]["elements"][0]["elements"][3]["elements"][7]["elements"][0]["elements"][0]["elements"][0].text; 
        w = jsonData["elements"][0]["elements"][0]["elements"][3]["elements"][8]["elements"][0]["elements"][0]["elements"][0].text; 
      } else if (k === 'medan') {
        t = jsonData["elements"][0]["elements"][0]["elements"][14]["elements"][7]["elements"][0]["elements"][0]["elements"][0].text; 
        w = jsonData["elements"][0]["elements"][0]["elements"][3]["elements"][8]["elements"][0]["elements"][0]["elements"][0].text; 
      } else if (k === 'jakarta') {
        t = jsonData["elements"][0]["elements"][0]["elements"][2]["elements"][7]["elements"][0]["elements"][0]["elements"][0].text; 
        w = jsonData["elements"][0]["elements"][0]["elements"][3]["elements"][8]["elements"][0]["elements"][0]["elements"][0].text; 
      } else if (k === 'bandung') {
        t = jsonData["elements"][0]["elements"][0]["elements"][1]["elements"][7]["elements"][0]["elements"][0]["elements"][0].text; 
        w = jsonData["elements"][0]["elements"][0]["elements"][3]["elements"][8]["elements"][0]["elements"][0]["elements"][0].text; 
      } else if (k === 'surabaya') {
        t = jsonData["elements"][0]["elements"][0]["elements"][35]["elements"][7]["elements"][0]["elements"][0]["elements"][0].text; 
        w = jsonData["elements"][0]["elements"][0]["elements"][3]["elements"][8]["elements"][0]["elements"][0]["elements"][0].text; 
      }
      this.setState({ [k]: { t, w } });
    }
  }

  formatWeather(w: any) {
    let status = '';
    if (w === '100') {
      status = 'Cerah';
    } else if (w === '101') {
      status = 'Cerah Berawan';
    } else if (w === '102') {
      status = 'Cerah Berawan';
    } else if (w === '103') {
      status = 'Berawan';
    } else if (w === '104') {
      status = 'Berawan';
    }
    return status;
  }

  render() {
    return (
      <div style={{ padding: 30 }}>
        <h1>Home</h1>
        <ol>
          <li><Link to="/detail/denpasar">Denpasar: </Link>{this.state.denpasar.t} C ({this.formatWeather(this.state.denpasar.w)})</li>
          <li><Link to="/detail/medan">Medan: </Link>{this.state.medan.t} C ({this.formatWeather(this.state.medan.w)})</li>
          <li><Link to="/detail/jakarta">Jakarta: </Link>{this.state.jakarta.t} C ({this.formatWeather(this.state.jakarta.w)})</li>
          <li><Link to="/detail/bandung">Bandung: </Link>{this.state.bandung.t} C ({this.formatWeather(this.state.bandung.w)})</li>
          <li><Link to="/detail/surabaya">Surabaya: </Link>{this.state.surabaya.t} C ({this.formatWeather(this.state.surabaya.w)})</li>
        </ol>
      </div>
    );
  }
}
