// React
import React from 'react';

const ActivityItem = (props) => {
    const { item } = props;
  return (
    <div>
        <div className='activity-item'>
            <p>Activity: {item.activity}</p>
            <p>Type: {item.type}</p>
            <p>Participants: {item.participants}</p>
            <p>Price: {item.price}</p>
        </div>
    </div>
    );
};

export default ActivityItem;
