// React
import React from 'react';
import { connect } from 'react-redux';
// CSS
import './App.css';
// Components
import ActivityContainer from './components/ActivityContainer';
import NewActivitiesButton from './components/NewActivitiesButton';


const App = (props) => {
  const { loading, error } = props;
  

  return (
    <div className="app">
      <h2>Activities to do When You're Bored!</h2>

      {(error !== "") && <p className='error-msg'>{error}</p>}
      {loading ? <h4>Loading activities...</h4> : <ActivityContainer />}
      

      <NewActivitiesButton />
      <br />
      <br />
      <br />
      <p>https://www.boredapi.com/api/activity</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
  };
};

export default connect(mapStateToProps)(App);