import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import DashboardHeader from "../components/Other/DashboardHeader.jsx";
import { useOutletContext } from "react-router-dom";

function Dashboard() {
  const avatar =
    "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
  const avatar1 = "shutterstock.com/image-photo/cheerful-darkskinned-girl-smiling-broadly-260nw-635442125.jpg" ;
  const [sidebarToggle] = useOutletContext();

  const cardsData = [
    {
      id: 1,
      image: "assets/linux.png",
      title: "Linux terminal course",
      name: "Hassan Oudrar",
      avatar:
        "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
{
      id: 2,
      image: 'https://i.ytimg.com/vi/WGJJIrtnfpk/maxresdefault.jpg',
      title: 'Python course',
      name: 'Edward camavinga',
      avatar: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    {
      id: 3,
      image: 'assets/cpp.jpg',
      title: 'C Plus Plus course',
      name: 'Evelynn parker',
      avatar: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
   
    // Rest of the card data objects
  ];

  const navigate = useNavigate();

  const handleCardClick = (id) => {
    if (id === 1) {
      navigate("/form");
    }
    if (id === 2) {
      navigate("/python");
    }
    if (id === 3) {
      navigate("/cpp");
    }
    // Add more conditions for other card IDs as needed
  };

  return (
    <>
      <main className="h-full">
        {/* Welcome Header */}
        <DashboardHeader
          toggle={sidebarToggle}
          avatar={avatar}
          user={{ name: "Faissal Ezzine" }}
        />
        <br />
        <p className="titre">Liste de vos Cours </p>
        <br />

        <div className="card-grid lid">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="card"
              onClick={() => handleCardClick(card.id)}
            >
              <img
                src={card.image}
                alt="Card Image"
                className="card-image"
              />
              <div className="card-content">
                <h2 className="card-title">{card.title}</h2>
                <div className="card-info">
                  <img
                    src={card.avatar}
                    alt="Avatar"
                    className="card-avatar"
                  />
                  <p className="card-name">{card.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Dashboard;
