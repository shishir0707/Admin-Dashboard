import React from 'react'
import Mcards from '../m-cards/m-cards';
import Table from '../table/table';
import './maindash.scss';

const Maindash = () => {
  return (
    <div className='Maindash'>
       <h1>Dashboard</h1>
       <Mcards/>
       <Table/>
    </div>
  )
}

export default Maindash