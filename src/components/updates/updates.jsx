import React from 'react'
import { UpdatesData } from '../../Data/Data'
import './updates.scss'

const Updates = () => {
    return (
        <div className='Updates'>
            {UpdatesData.map((update, a) => {
                return (
                    <div className='update' key={a}>
                        <img src={update.img} alt="" />
                        <div className='notification'>
                            <div style={{marginBottom: '0.5rem'}}>
                                <span>{update.name}</span>
                                <span> {update.noti}</span>
                            </div>
                            <span>{update.time}</span>
                        </div>
                
                    </div>
                )
            })}
        </div>
    )
}

export default Updates