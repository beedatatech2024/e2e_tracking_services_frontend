import "../styles/Placements.css";

function Placements() {
  return (
    <div className="card cyanCard">
      <h4 className="cardTitle">Placements</h4>

      <h1 className="cardValue">968</h1>

      <p className="cyanText">+6.1%</p>

      <div className="graph">
        <svg
          viewBox="0 0 100 40"
          preserveAspectRatio="none"
          className="graphSvg"
        >
          <path
            className="graphLine"
            d="M0 34
               L10 26
               L20 28
               L30 24
               L40 10
               L50 23
               L60 14
               L70 18
               L80 4
               L90 12
               L100 3"
          />
        </svg>
      </div>
    </div>
  );
}

export default Placements;