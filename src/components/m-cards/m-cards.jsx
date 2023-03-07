import React from 'react'
import './m-cards.scss';
import { CardsData } from '../../Data/Data';
import Card from '../card/card';


const Mcards = () => {
    return (
        <div className='Cards'>
            {CardsData.map((card, id) => {
                return (
                    <div className='parentContainer' key={id}>
                        <Card
                            title={card.title}
                            color={card.color}
                            barValue={card.barValue}
                            value={card.value}
                            png={card.png}
                            series={card.series}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default Mcards;