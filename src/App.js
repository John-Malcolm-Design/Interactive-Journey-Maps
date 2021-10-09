import logo from './logo.svg';
import './Base.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div>
            <h1>🗺️ Access Finland: Co-design Workshop</h1>
            <h2>How can you empathize with the experiences, journeys and challenges of our personas?</h2>
        </div>
        <nav>
            <ul>
                <li>Oliver 🧑🏼‍🎓</li>
                <li>Kaarina 🧑🏻‍🎓</li>
                <li>Ishaan 👨🏽‍🎓</li>
            </ul>
        </nav>
    </header>
    <div id="main" role="main">
            <section className="persona">
                <h2>I moved from Ohio 🇺🇲 to pursue a masters in Business Adminstration 📈</h2>
                <img id="student-graphic" src="kaarina.png" alt="" />
            </section>
            <section id="studies-container">
                <nav>
                    <ul>
                        <li>➡️ 1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                    </ul>
                </nav>
                <div id="year-strip">
                    <div className="story-tile" style={{background: "#ff8d0014"}}>
                        <div>
                            <h3>❤️ &nbsp;Life</h3>
                            <p>My plan this year is to survive my new study environment and make the most of it...</p>
                        </div>
                        
                    </div>
                    <div className="story-tile" style={{background: "#ffff0014"}}>
                        <div>
                            <h3>🧑‍🎓 &nbsp;Study</h3>
                        <p>I've been learning the university study system and speaking to a study counsellor to get advice on organising my studies...</p>
                        </div>
                    </div>
                    <div className="story-tile" style={{background: "#ff8d0014"}}>
                        <div>
                            <h3>🌐 &nbsp;Networks</h3>
                            <p>I'm pleased to be making new friends on campus... having a wide network makes my studies a lot easier...</p>
                        </div>
                    </div>
                    <div className="story-tile" style={{background: "#ffff0014"}}>
                        <div>
                            <h3>💵 &nbsp;Income</h3>
                            <p>I've been taking advantage of the three Kela student supports, this includes a monthly stipend, housing allowance & student loan...</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}

export default App;
