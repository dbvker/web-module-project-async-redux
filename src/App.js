// React
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getActivities } from './actions';
// CSS
import './App.css';
// Components
import ActivityItem from './components/ActivityItem';

const App = (props) => {
  const { loading, error, getActivities } = props;
  
  useEffect(() => {
    getActivities();
  }, []);

  return (
    <div className="app">
      <h3>Activities to do When You're Bored!</h3>

      {(error !== "") && <p className='error-msg'>{error}</p>}
      {loading ? <h4>Loading activities...</h4> : <ActivityItem />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getActivities })(App);