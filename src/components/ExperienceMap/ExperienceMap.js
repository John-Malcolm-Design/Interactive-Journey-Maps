import React, { setState, useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './ExperienceMap.css';

const ExperienceMap = () => {
  const [data, setData] = useState({ hits: [] });
  const [year, setYear] = useState(1);
  const [name, setName] = useState("Oliver");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://fieldmap.s3.eu-north-1.amazonaws.com/personas.json',
      );
 
      setData(result.data);
    };
 
    fetchData();
  }, []);

  return <React.Fragment>
      <nav id="persona-nav">
          <ul>
              <li onClick={() => {setName("Oliver"); setYear(1)}} className={name==="Oliver" ? "active" : ""}>Oliver 🧑🏼‍🎓</li>
              <li onClick={() => {setName("Kaarina"); setYear(1)}} className={name==="Kaarina" ? "active" : ""}>Kaarina 🧑🏻‍🎓</li>
              <li onClick={() => {setName("Ishaan"); setYear(1)}} className={name==="Ishaan" ? "active" : ""}>Ishaan 👨🏽‍🎓</li>
          </ul>
      </nav>
      {data.hits.map((item, index) => (
        <React.Fragment key={index}>
            { item.Name === name && item.Year === year && 
              <React.Fragment>
                <section className="persona">
                  <h2>{item.Quote}</h2>
                  <img id="student-graphic" src={item.Image} alt="" />
                </section>
                <section id="studies-container">
                  <nav>
                    <ul>
                        <li onClick={() => setYear(1)} className={year===1 ? "active" : ""}>1</li>
                        <li onClick={() => setYear(2)} className={year===2 ? "active" : ""}>2</li>
                        <li onClick={() => setYear(3)} className={year===3 ? "active" : ""}>3</li>
                        <li onClick={() => setYear(4)} className={year===4 ? "active" : ""}>4</li>
                    </ul>
                  </nav>
                  <div id="year-strip">
                    <div className="story-tile" style={{background: "#ff8d0014"}}>
                        <div>
                            <h3>❤️ &nbsp;{name}'s Life</h3>
                            <p>{item.Life}</p>
                        </div>
                        
                    </div>
                    <div className="story-tile" style={{background: "#ffff0014"}}>
                        <div>
                            <h3>🧑‍🎓 &nbsp;{name}'s Studies</h3>
                        <p>{item.Study}</p>
                        </div>
                    </div>
                    <div className="story-tile" style={{background: "#ff8d0014"}}>
                        <div>
                            <h3>🌐 &nbsp;{name}'s Networks</h3>
                            <p>{item.Network}</p>
                        </div>
                    </div>
                    <div className="story-tile" style={{background: "#ffff0014"}}>
                        <div>
                            <h3>💵 &nbsp;{name}'s Income</h3>
                            <p>{item.Income}</p>
                        </div>
                    </div>
                  </div>
                </section>
              </React.Fragment>
            }
        </React.Fragment>
        ))}
  </React.Fragment>
};

ExperienceMap.propTypes = {};

ExperienceMap.defaultProps = {};

export default ExperienceMap;
