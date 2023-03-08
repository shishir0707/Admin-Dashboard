import React from 'react'
import CustomerReview from '../CustomerReview/CustomerReview';
import Updates from '../updates/updates';
import './rightside.scss';

const Rightside = () => {
  return (
    <div className='RightSide'>
        <div>
            <h3>Updates</h3>
            <Updates/>
        </div>
        <div>
            <h3>Customer Review</h3>
            <CustomerReview />
        </div>
    </div>
  )
}

export default Rightside