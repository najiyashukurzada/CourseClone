import React, { Component, useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Home.scss'
import { AiOutlineGlobal } from "react-icons/ai";
import { useState } from 'react';
import axios from 'axios'

const Home = () => {
  let [cards, setCards] =  useState([])

  useEffect(() => {
    axios.get("http://localhost:8080/course")
    .then((res) => {
      setCards(res.data)
      console.log(cards)
    })
  }, [])


  return (
    <div className='home__container'>
        <Carousel infiniteLoop={true} className='carusel'>
          <div>
              <img src="https://www.ias.edu/sites/default/files/library/Math-NS%20Library_1.jpg" />
              <h1>Get Your<div>Education</div> Today!</h1>
          </div>
          <div>
              <img src="https://www.ias.edu/sites/default/files/library/Math-NS%20Library_1.jpg" />
              <h1>Get Your<div>Education</div> Today!</h1>
          </div>
          <div>
              <img src="https://www.ias.edu/sites/default/files/library/Math-NS%20Library_1.jpg" />
              <h1>Get Your<div>Education</div> Today!</h1>
          </div>
        </Carousel>

        <div className='box__container'>
          <div className='box__container__card1'>
            <div className='icon'>
              <AiOutlineGlobal/>
            </div>
            <div>
              <h2>Online Courses <p>View more</p> </h2>
            </div>
          </div>
          <div className='box__container__card2'>
            <div className='icon'>
              <AiOutlineGlobal/>
            </div>
            <div>
              <h2>Online Courses <p>View more</p> </h2>
            </div>
          </div>
          <div className='box__container__card3'>
            <div className='icon'>
              <AiOutlineGlobal/>
            </div>
            <div>
              <h2>Online Courses <p>View more</p> </h2>
            </div>
          </div>
        </div>

        <div className='back__container'>
          <div className='container'>
              <div className='text'>Popular Courses</div>
              <div className='card__container'>
                {cards?.map((card, index)=> {
                  return (
                    <div className='back' key={index}>
                      <div className='back__img'>
                        <img src="https://img.business.com/w/700/aHR0cHM6Ly9pbWFnZXMuYnVzaW5lc3NuZXdzZGFpbHkuY29tL2FwcC91cGxvYWRzLzIwMjIvMDQvMDQwNzQ1NTMvMTU1NDI0NDAxMC5qcGVn" alt=""/>
                      </div>
                      <div className='back__text'>
                        <div className='back__text__td'>
                        <div className='back__text__td__title'>
                          {card.title}
                        </div>
                        <div className='back__text__td__desc'>
                          {card.description}
                        </div>
                        </div>
                        <div className='back__text__nt'>

                            <div className='back__text__nt__name'>
                            <img src="https://variety.com/wp-content/uploads/2022/11/Screen-Shot-2022-11-02-at-8.33.52-AM.png" alt=""/>
                              {card.name}
                            </div>
                            <div className='back__text__nt__price'>
                              $ {card.price}
                            </div>
                        </div>
                        <button onClick={()=> {
                          axios.delete(`http://localhost:8080/course/${card._id}`)
                          .then(() => {
                            axios.get("http://localhost:8080/course")
                            .then((res) => {
                              setCards(res.data)
                            })
                          })
                        }}>Delete</button>
                      </div>
                    </div>
                  )
                })}
              </div>
          </div>
        </div>

        <div className='form__container'>
          <div className='form__divs'>
            <div className='form__divs__one'>
                <h1>Register now and get a discount <p>50%</p> discount until 1 January</h1>
                <h5>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempo.</h5>
                <button>Register Now</button>
            </div>
            <div className='form__divs__two'>
                <h1>Search for your course</h1>
                <input type="text" placeholder='Course Name'/>
                <input type="text" placeholder='Course desc'/>
                <input type="text" placeholder='Course Price'/>
                <button>Search Course</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home