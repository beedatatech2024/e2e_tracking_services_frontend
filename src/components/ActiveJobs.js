import "../styles/ActiveJobs.css";

function ActiveJobs() {
  return (
    <div className="card yellowCard">
      <h4 className="cardTitle">Active Jobs</h4>

      <h1 className="cardValue">320</h1>

      <p className="orangeText">+5.4%</p>

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
               L40 14
               L50 23
               L60 16
               L70 6
               L80 10
               L90 2
               L100 8"
          />
        </svg>
      </div>
    </div>
  );
}

export default ActiveJobs;