import "../styles/BenchResource.css";

function BenchResource() {
  return (
    <div className="card purpleCard">
      <h4 className="cardTitle">Bench Resources</h4>

      <h1 className="cardValue">1,250</h1>

      <p className="purpleText">+7.6%</p>

      <div className="graph">
        <svg
          viewBox="0 0 100 40"
          preserveAspectRatio="none"
          className="graphSvg"
        >
          <path
            className="graphLine"
            d="M0 32
               L10 24
               L20 26
               L30 22
               L40 10
               L50 23
               L60 14
               L70 18
               L80 5
               L90 9
               L100 2"
          />
        </svg>
      </div>
    </div>
  );
}

export default BenchResource;