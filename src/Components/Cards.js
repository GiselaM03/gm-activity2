import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='Images/LA1.png'
              text='Explore the stunning places LA has to offer. Beverly Hills is a great place to start. '
              label='Los Angeles'
              path='/Destinations'
            />
            <CardItem
              src='Images/LA2.png'
              text='Visit LA beaches an enjoy a great afternoon sorounded by the beautiful palmtrees.'
              label='Venice Beach'
              path='/Destinations'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='Images/southpointe.png'
              text='Besides visiting the touristic spots, get to know the hidden gems in Miami'
              label='Miami'
              path='/Destinations'
            />
            <CardItem
              src='Images/vegas2.png'
              text='Visit the most epic botels in Las Vegas - You will feel in a movie plot'
              label='Las Vegas'
              path='/Destinations'
            />
            <CardItem
              src='Images/vegas3.png'
              text='Walk through the famous Vegas strip and get to see the most fancy hotels '
              label='Las Vegas'
              path='/Destinations'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;