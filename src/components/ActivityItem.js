// React
import React from 'react';
import { connect } from 'react-redux';

const ActivityItem = (props) => {
  const { activities } = props;

  return (
    <div className='activity-container'>
        <div className='activity-item'>
            <p>Activity: {activities.activity}</p>
            <p>Type: {activities.type}</p>
            <p>Participants: {activities.participants}</p>
            <p>Price: {activities.price}</p>
        </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    activities: state.activities
  };
};

export default connect(mapStateToProps)(ActivityItem);
