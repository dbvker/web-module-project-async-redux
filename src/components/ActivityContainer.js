// React
import React from 'react';
import { connect } from 'react-redux';
// Components
import ActivityItem from './ActivityItem';

const ActivityContainer = (props) => {
  const { activities } = props;

  return (
    <div className='activity-container'>
        {activities.map((item, index) => {
            return (
                <ActivityItem item={item} key={index} />
            )
        })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    activities: state.activities
  };
};

export default connect(mapStateToProps)(ActivityContainer);
