import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/explore-data.PNG'
import IMG2 from '../../assets/visualize-data.PNG'
import IMG3 from '../../assets/weka-1.png'
import IMG4 from '../../assets/customer.PNG'
import IMG5 from '../../assets/Sales.PNG'
import IMG6 from '../../assets/Nba.PNG'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Exploratory Data Analysis with Excel',
    github: 'https://github.com/AJsimplydevelops/Data_Analytics-Excel',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Data Visualization with PowerBI',
    github: 'https://github.com/AJsimplydevelops/Data-visualization',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Data Mining using Weka',
    github: 'https://github.com/AJsimplydevelops/Data-mining',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Customer Segmentation with Python',
    github: 'https://github.com/AJsimplydevelops/customer-segmentation',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Sales Data in SQL & Tableau',
    github: 'https://github.com/AJsimplydevelops/Sales-sql-tableau',
  },
  {
    id: 6,
    image: IMG6,
    title: 'API Web-Scraping NBA Stats',
    github: 'https://github.com/AJsimplydevelops/Web-Scraping',
  },
  

]

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>



      <div className="container portfolio__container">
        {
          // eslint-disable-next-line array-callback-return
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>

                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default portfolio