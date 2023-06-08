import React from "react";
import "./Dashboard.css"
import StatisticWidget from "../components/Widget/Statistic.jsx";
import AchievementWidget from "../components/Widget/Achievment.jsx";
import DashboardHeader from "../components/Other/DashboardHeader.jsx";
import ScrolledCard from "../components/Widget/ScrolledCard.jsx";
import { useOutletContext } from "react-router-dom";

function Dashboard() {
  const avatar =
    "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";


  

  const [sidebarToggle] = useOutletContext();

  const cardsData = [
    {
      id: 1,
      image: 'https://i.ytimg.com/vi/WGJJIrtnfpk/maxresdefault.jpg',
      title: 'Python course',
      name: 'Hassan Oudrar',
      avatar: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    {
      id: 2,
      image: 'https://i.ytimg.com/vi/WGJJIrtnfpk/maxresdefault.jpg',
      title: 'Python course',
      name: 'Hassan Oudrar',
      avatar: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    {
      id: 3,
      image: 'https://i.ytimg.com/vi/WGJJIrtnfpk/maxresdefault.jpg',
      title: 'Python course',
      name: 'Hassan Oudrar',
      avatar: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    {
      id: 4,
      image: 'https://i.ytimg.com/vi/WGJJIrtnfpk/maxresdefault.jpg',
      title: 'Python course',
      name: 'Hassan Oudrar',
      avatar: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    {
      id: 5,
      image: 'https://i.ytimg.com/vi/WGJJIrtnfpk/maxresdefault.jpg',
      title: 'Python course',
      name: 'Hassan Oudrar',
      avatar: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    {
      id: 6,
      image: 'https://i.ytimg.com/vi/WGJJIrtnfpk/maxresdefault.jpg',
      title: 'Python course',
      name: 'Hassan Oudrar',
      avatar: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    {
      id: 7,
      image: 'https://i.ytimg.com/vi/WGJJIrtnfpk/maxresdefault.jpg',
      title: 'Python course',
      name: 'Hassan Oudrar',
      avatar: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    // Add more card data objects as needed
  ];

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
        <br></br>

        <div className="card-grid">
          {cardsData.map(card => (
            <div key={card.id} className="card">
              <img src={card.image} alt="Card Image" className="card-image" />
              <div className="card-content">
                <h2 className="card-title">{card.title}</h2>
                <div className="card-info">
                  <img src={card.avatar} alt="Avatar" className="card-avatar" />
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
