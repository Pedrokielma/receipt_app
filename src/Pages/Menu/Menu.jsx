import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Menu.css";
import Title from "../../Components/Title/Title";
import Button from "../../Components/Button/Button";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from 'framer-motion'

function Menu(props) {
  const [dishes, setDishes] = useState([]);

  const [firstAnimation, setFirstAnimation] = useState(true);
  

  const animationFromTop = useAnimation()
  const animationFromBottom = useAnimation()


  const { ref: myRef, inView } = useInView();

  if (inView) {
    props.changeNav("4");
  }

  const fetchDishes = async () => {
    try {
      let response = await axios.get(
        `https://studiographene-exercise-api.herokuapp.com/foods`
      );

      setDishes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  useEffect(() => {
    if(firstAnimation){
      
      if(inView){
        setFirstAnimation(false)
        animationFromBottom.start({
          y : 0,
          transition: {
            duration: 1
          }
        })
        animationFromTop.start({
          y : 0,
          transition: {
            duration: 1
          }
        })
      
      }else{
        animationFromBottom.start({y: '100vw'})
        animationFromTop.start({y: '-100vw'})
        console.log('epa', firstAnimation)
      }
    }
    
  }, [inView]);

  return (
    <div ref={myRef} id="menu">
      <div className="menu-title">
        <hr className="menu-title-line" />
        <Title lines="one-line" content="OUR MENU" />
        <Button color="pink-button" link="/" content="KNOW MORE" />
      </div>

      <motion.div
      animate= {animationFromBottom}
      className="menu-sections starter">
        <Title lines="one-line position-titles" content="STARTERS" />

        {dishes.map((dishe) => {
          if (dishe.type === "starters")
            return (
              <>
                <h4>{dishe.title}</h4>
                <p className="description">{dishe.description}</p>
                <p className="price">{dishe.price}</p>
              </>
            );
        })}
      </motion.div>
      <hr />

      <motion.div
      animate= {animationFromTop}
      className="menu-sections main-course">
        <Title lines="two-lines position-titles" content="MAIN COURSES" />

        {dishes.map((dishe) => {
          if (dishe.type === "main_courses")
            return (
              <>
                <h4>{dishe.title}</h4>
                <p className="description">{dishe.description}</p>
                <p className="price">{dishe.price}</p>
              </>
            );
        })}
      </motion.div>
      <hr />
      <motion.div
       animate= {animationFromBottom}
      className="menu-sections side">
        <Title lines="one-line position-titles" content="SIDES" />
        {dishes.map((dishe) => {
          if (dishe.type === "sides")
            return (
              <>
                <h4>{dishe.title}</h4>
                <p className="description">{dishe.description}</p>
                <p className="price">{dishe.price}</p>
              </>
            );
        })}
      </motion.div>
      <hr />
      <motion.div
      animate= {animationFromTop}
      className="menu-sections dessert">
        <Title lines="one-line position-titles" content="DESSERTS" />

        {dishes.map((dishe) => {
          if (dishe.type === "desserts")
            return (
              <>
                <h4>{dishe.title}</h4>
                <p className="description">{dishe.description}</p>
                <p className="price">{dishe.price}</p>
              </>
            );
        })}
      </motion.div>
    </div>
  );
}

export default Menu;
