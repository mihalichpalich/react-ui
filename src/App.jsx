import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import Settings from './components/Settings';
import Filter from './components/Filter';
import Image from './components/Image';
import FilterList from './components/FilterList';

class App extends Component {
  state = {
    image: 'https://static.pexels.com/photos/39811/pexels-photo-39811.jpeg',
    selectedFilter: '', //выбранный фильтр (картинка)
    settings: {
      contrast: 100,
      hue: 0,
      brightness: 100,
      saturate: 100,
      sepia: 0
    }
  }

  handleChange = event => {
    const setting = event.target.id; //получаем id ползунка из Range
    const value = event.target.value;
    const settings = {...this.state.settings, [setting]: value}; //создаем новый объект из объекта state.settings, [setting]: value - замена свойств

    this.setState({selectedFilter: '', settings}); //обновление состояний, если меняются настройки через ползунок то сбрасывается значение фильтра-картинки
  }

  updateSettings = (selectedFilter, settings) => {
    this.setState({selectedFilter, settings}); //settings из компонента Filter
  }

  render() {
    const {image, selectedFilter, settings} = this.state;

    return (
      <div className="app">
        <Header title="Reactagram" />

        <section className="content">
          {/*блок с "ползунками"*/}
          <Settings settings={settings} handleChange={this.handleChange} />

          <main className="main">
            <Filter settings={settings}>
              <Image src={image} />
            </Filter>

            <FilterList
              image={image}
              settings={settings}
              selectedFilter={selectedFilter}
              updateSettings={this.updateSettings} /> {/* блок с фильтрами (картинки) */}
          </main>
        </section>
      </div>
    );
  }
}

export default App;