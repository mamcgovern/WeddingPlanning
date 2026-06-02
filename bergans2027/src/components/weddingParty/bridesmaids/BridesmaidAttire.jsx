import React from 'react'
import dressesData from '../../../data/bridesmaids/bridesmaidAttire.json'

function DressCard({ dress }) {
  return (
    <div className="dress-card">

      <div className="dress-image">
        <img src={dress.photo} alt={dress.name} />
      </div>

      <div className="dress-info">
        <div className="dress-name">{dress.name}</div>

        <a
          href={dress.link}
          target="_blank"
          rel="noopener noreferrer"
          className="dress-link"
        >
          View Dress
        </a>
      </div>

    </div>
  )
}

export default function Attire() {
  const sageDresses = dressesData?.sage || []
  const blushDresses = dressesData?.blush || []
  const shoes = dressesData?.shoes || []

  return (
    <div>

      <div className='dresses'>

        <h3>Dresses</h3>

        <p>
          Dress colors have been assigned to the bridesmaids.
          You can purchase any chiffon dress from the Birdy Grey website
          in your assigned color, including, but not limited to the following.
        </p>

        <div className='sage'>

          <h4>Sage</h4>
          <p>Assigned to: Sydni, Emily, Mary, Kay</p>

          <div className="dress-grid">
            {sageDresses.map((dress) => (
              <DressCard key={dress.name + dress.link} dress={dress} />
            ))}
          </div>

          <button
            className="enter-btn"
            onClick={() =>
              window.open(
                'https://www.birdygrey.com/collections/green-bridesmaid-dresses?filter.tags_fabric=chiffon&filter.tags_color_bar=sage',
                '_blank'
              )
            }
          >
            View More
          </button>

        </div>

        <div className='blush'>
          <h4>Blush Pink</h4>
          <p>Assigned to: Lizzy, Taylor, Toph</p>
          <div className="dress-grid">
            {blushDresses.map((dress) => (
              <DressCard key={dress.name + dress.link} dress={dress} />
            ))}
          </div>
          <button
            className="enter-btn"
            onClick={() =>
              window.open(
                'https://www.birdygrey.com/collections/bridesmaid-dresses?filter.tags_fabric=chiffon&filter.tags_color_bar=blush+pink',
                '_blank'
              )
            }
          >
            View More
          </button>
        </div>
      </div>
      <div>
        <h3>Shoes</h3>
        <div className='sage'>
          <p>
            The bridesmaids are welcome to wear any nude or tan dress shoe of their choice,
            including (but not limited to) styles similar to those shown below.
            Heels are not required.
          </p>

          <div className="dress-grid">
            {shoes.map((dress) => (
              <DressCard key={dress.name + dress.link} dress={dress} />
            ))}
          </div>

          <button
            className="enter-btn"
            onClick={() =>
              window.open(
                'https://www.dsw.com/category/womens/shoes/dress?color=Beige',
                '_blank'
              )
            }
          >
            View More
          </button>
        </div>
      </div>
    </div>
  )
}