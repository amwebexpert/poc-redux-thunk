import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { IApplicationState } from './store/store';
import { fetchUserAsync } from './store/user.actions';
import { IUserState } from './store/user.reducer';

interface IProps {
  userDataRequest: IUserState;
  fetchUserAsync: () => void;
}

const mapStateToProps = (state: IApplicationState) => {
  return {
    userDataRequest: state.user
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchUserAsync: () => dispatch(fetchUserAsync()),
  };
};


class App extends React.Component<IProps> {

  public componentDidMount() {
    this.props.fetchUserAsync();
  }

  public render() {
    if (this.props.userDataRequest.fetching) {
      return (
        <div className="App">
          <header className="App-header">
            <p>Please wait...</p>
          </header>
        </div>
      );
    }

    if (this.props.userDataRequest.fetchError) {
      return (
        <div className="App">
          <header className="App-header">
            <p>Sorry an error occured.</p>
          </header>
        </div>
      );
    }

    const user = JSON.stringify(this.props.userDataRequest.user);
    return (
      <div className="App">
        <header className="App-header">
          <p>User: {user}</p>
        </header>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
