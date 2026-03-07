import {useEffect,useRef} from 'react'
import { Link } from "react-router-dom";
import "./Trekking_cards.css"

export default function Trekking_cards  ( {items,heading})  {

    
  const cardsRef = useRef([]);
  
      useEffect(() => {
  
          const observer = new IntersectionObserver(
  
              (entries) => {
  
                  entries.forEach((entry) => {
  
                      if (entry.isIntersecting) {
                          entry.target.classList.add("show");
                          observer.unobserve(entry.target);
                      }
                  });
              },
              { threshold: .2 }
          );
  
          cardsRef.current.forEach((card) => {
              if (card) observer.observe(card);
          });
  
          return () => observer.disconnect();
      }, [items]);
  
      return (
          <section className="explore-theme container">
              <h2>{heading}</h2>
              <div className="theme-grid">
                  {items.map(( theme, index) => (
                      <div
                          key={index}
                          className="theme-card"
                          ref={(el) => cardsRef.current[index] = el}
                      >
                          <img src={theme.image} alt={theme.title} />

                           <ul className="trip-info">
                              
                              <li>{theme.days}</li>
                              <li>{theme.difficulty}</li>
                           </ul>
                          
                          <h3>{theme.title}</h3>
                          <p>{theme.description}</p>

                          <div className='trek-button'>
                            <Link to={theme.trekking_info}> <button className='trek-info'>Get Trek Info</button></Link>
                            <button className='view-dates'>View Dates</button>
                          </div>
                      </div>
                  ))}
  
              </div>
  
          </section>
  
      );
}


