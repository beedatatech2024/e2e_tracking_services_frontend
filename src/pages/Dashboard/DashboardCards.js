import "../../styles/Dashboard/cards.css";

function DashboardCards({ cards }) {

  return (

    <div className="e2e_cards_grid">

      {cards.map((item, index) => (

        <div
          className="e2e_single_card"
          key={index}
        >

          <div className="e2e_card_top">

            <div>

              <p>{item.title}</p>

              <h2>{item.count}</h2>

            </div>

            <div className="e2e_card_icon">

              {item.icon}

            </div>

          </div>

          <div className="e2e_card_bottom">

            <span>{item.growth}</span>

          </div>

        </div>

      ))}

    </div>
  );
}

export default DashboardCards;