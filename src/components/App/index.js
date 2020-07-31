import React from 'react';

import WelcomePage from '../WelcomePage';
import YourPath from '../YourPath';
import BackButton from '../BackButton';
import FetchButton from '../FetchButton';

import darthImage from '../../assets/darth-vader.png';
import lukeImage from '../../assets/luke-skywalker.png';

import './app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      loading: false,
      people: null,
      buttonLabel: 'start',
      classHack: '',
      isHome: true,
    };

    this.backToHome = this.backToHome.bind(this);
    this.loadApi = this.loadApi.bind(this);
  }

  updatePeople(peopleData){
		this.setState({
			loading: false,
      people: peopleData,
      buttonLabel: 'choose your path again, Padawan',
      classHack: 'hack'
		});
  }
  
  loadApi() {
		this.setState({loading: true, loaded: false});

		const _idLight = 1;
		const _idDark = 4;
	
		fetch( `https://swapi.dev/api/people/${_idLight}`)
    .then(res => res.json())
    .then((people) => this.updateDataFetched({...people, style: 'light', avatar: lukeImage}))
		.catch(error => console.error(error))
	
		fetch( `https://swapi.dev/api/people/${_idDark}`)
    .then(res => res.json())
    .then((people) => this.updateDataFetched({...people, style: 'dark', avatar: darthImage}))
    .catch(error => console.error(error))
  }

  updateDataFetched(peopleData){
    if (!this.state.loaded) this.updatePeople(peopleData)
    this.setState({loaded: true, isHome: false})
  }
  
  backToHome() {
    this.setState({loading: false, loaded: false, isHome: true, classHack: '', buttonLabel: 'start', people: null});
  }

  componentDidCatch(error, info){
    console.error('My service excetion handler spread this...', info);
  }

  render() {
    const { people, loaded, loading, buttonLabel, classHack, isHome } = this.state;
    const styleDef = people ? people.style : null;
    
    return (
      <div className={`app app--${styleDef}`}>
        {loaded ? <BackButton onClick={this.backToHome}/> : null}
        {!loaded && isHome ? <WelcomePage/> : null}
        <FetchButton onClick={this.loadApi} type={styleDef} label={buttonLabel} loading={loading} position={classHack}/>
        {loaded ? <YourPath people={people}/> : null}
      </div>
    )
  }
}

export default App;
