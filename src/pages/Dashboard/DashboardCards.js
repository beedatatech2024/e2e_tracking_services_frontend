import "../../styles/Dashboard/cards.css";

import axios from "axios";

import { useEffect, useState } from "react";

import {
  FaUsers,
  FaBriefcase,
  FaUserTie,
  FaChartLine,
} from "react-icons/fa";

function DashboardCards() {

  /* DUMMY DATA */

  const dummyCards = [

    {
      title:"Total Candidates",
      count:"1,245",
      growth:"+12%",
      icon:<FaUsers />,
    },

    {
      title:"Active Jobs",
      count:"245",
      growth:"+8%",
      icon:<FaBriefcase />,
    },

    {
      title:"Placements",
      count:"89",
      growth:"+18%",
      icon:<FaUserTie />,
    },

    {
      title:"Revenue",
      count:"$24K",
      growth:"+22%",
      icon:<FaChartLine />,
    },

  ];

  /* STATE */

  const [cards, setCards] = useState(dummyCards);

  /* BACKEND API */

  useEffect(() => {

    axios
      .get("http://localhost:5000/dashboard-cards")

      .then((res) => {

        /* IF BACKEND DATA EXISTS */

        if(res.data && res.data.length > 0){

          setCards(res.data);

        }

      })

      .catch((err) => {

        console.log(
          "Backend not connected. Using dummy data."
        );

      });

  }, []);

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