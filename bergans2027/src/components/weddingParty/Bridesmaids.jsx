import React from 'react'
import dressesData from '../../data/bridesmaids/bridesmaidAttire.json'

function DressCard({ dress }) {
  return (
    <div className="card">

      <div className="card-image">
        <img src={dress.photo} alt={dress.name} />
      </div>

      <div className="card-info">
        <div className="card-name">{dress.name}</div>

        <a
          href={dress.link}
          target="_blank"
          rel="noopener noreferrer"
          className="card-btn"
        >
          View Dress
        </a>
      </div>

    </div>
  )
}

export default function Bridesmaids() {
  const sageDresses = dressesData?.sage || []
  const blushDresses = dressesData?.blush || []
  const shoes = dressesData?.shoes || []

  return (
    <div>

      <div>

        <h1>Dresses</h1>

        <p className="subtitle">
          Dress colors have been assigned to the bridesmaids.
          You can purchase any chiffon dress from the Birdy Grey website
          in your assigned color, including, but not limited to the following.
        </p>

        <div>

          <h2>Sage</h2>
          <p className='subtitle'>Assigned to: Sydni, Emily, Mary, Kay</p>

          <div className="grid2">
            {sageDresses.map((dress) => (
              <DressCard key={dress.name + dress.link} dress={dress} />
            ))}
          </div>

          <button
            className="pink-btn"
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

        <div>
          <h2>Blush Pink</h2>
          <p className="subtitle">Assigned to: Lizzy, Taylor, Toph</p>
          <div className="grid2">
            {blushDresses.map((dress) => (
              <DressCard key={dress.name + dress.link} dress={dress} />
            ))}
          </div>
          <button
            className="pink-btn"
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
        <h2>Shoes</h2>
        <p>
          The bridesmaids are welcome to wear any nude or tan dress shoe of their choice,
          including (but not limited to) styles similar to those shown below.
          Heels are not required.
        </p>

        <div className="grid2">
          {shoes.map((shoe) => (
            <DressCard key={shoe.name + shoe.link} dress={shoe} />
          ))}
        </div>

        <button
          className="pink-btn"
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
  )
}