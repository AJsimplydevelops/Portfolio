import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Data Cleaning</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Remove Duplicate Contacts.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Correct structural errors.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Address Missing Data.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Standardize Data Entry.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Keeping your data fresh.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Designing, developing, and maintaining websites.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Using HTML, CSS, JavaScript, & sometimes Python to create the layout, style, and functionality of a website to your liking.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Strong problem-solving skills with an eye for design.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Worked with clients and stakeholders to understand their needs and develop solutions that meet their requirements.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Ensures websites are optimized for search engines, loads quick, and works smoothly on different devices and browsers.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Implement security measures like encryption and authentication.</p>
            </li>
          </ul>
        </article>
        {/* END OF Web Development */}


        <article className='service'>
          <div className='service__head'>
            <h3>Data System Analyst</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Analyzing system problems, designing and testing standards and solutions, evaluating procedures and processes</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Experience working with structured and unstructured data with strong analytical, interpersonal, and project management skills.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Liasise between managment, program personnel, and the IT office, an can be able to explain complex issues in a way that they all understand.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Working with SQL, Excel, Word, and PowerBI or Tableau</p>
            </li>
          </ul>
        </article>
        {/* END OF content creation  */}
      </div>



    </section>
  )
}

export default services