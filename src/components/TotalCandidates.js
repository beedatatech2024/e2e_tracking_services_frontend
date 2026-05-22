import "../styles/TotalCandidates.css";

function TotalCandidates() {
  return (
    <div className="card greenCard">
      <h4 className="cardTitle">Total Candidates</h4>

      <h1 className="cardValue">12,540</h1>

      <p className="greenText">+8.2%</p>

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
               L30 22
               L40 25
               L50 14
               L60 20
               L70 8
               L80 12
               L90 3
               L100 7"
          />
        </svg>
      </div>
    </div>
  );
}

export default TotalCandidates;