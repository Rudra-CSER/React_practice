import React from "react";
import Cards from "./components/cards";
import "./index.css";

const users = [
  {
    fullname: "Martin Garrix",
    title: "Progressive House • DJ/Producer",
    profile: "https://i.pravatar.cc/150?img=12",
    coverImage:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1600&q=80",
    likesCount: 98450,
    postCount: 128,
    viewsCount: 2459000,
    followed: true,
  },
  {
    fullname: "David Guetta",
    title: "EDM • Future Rave • DJ/Producer",
    profile: "https://i.pravatar.cc/150?img=32",
    coverImage:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1600&q=80",
    likesCount: 142300,
    postCount: 210,
    viewsCount: 4895000,
    followed: false,
  },
  {
    fullname: "Tiësto",
    title: "Big Room • Electro House • DJ",
    profile: "https://i.pravatar.cc/150?img=48",
    coverImage:
      "https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=1600&q=80",
    likesCount: 118900,
    postCount: 175,
    viewsCount: 3721000,
    followed: true,
  },
  {
    fullname: "Armin van Buuren",
    title: "Trance • Progressive • DJ/Producer",
    profile: "https://i.pravatar.cc/150?img=22",
    coverImage:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1600&q=80",
    likesCount: 102650,
    postCount: 196,
    viewsCount: 3348000,
    followed: false,
  },
  {
    fullname: "Calvin Harris",
    title: "Dance Pop • House • Producer",
    profile: "https://i.pravatar.cc/150?img=7",
    coverImage:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1600&q=80",
    likesCount: 165400,
    postCount: 143,
    viewsCount: 5289000,
    followed: true,
  },
  {
    fullname: "Skrillex",
    title: "Dubstep • Bass • Producer",
    profile: "https://i.pravatar.cc/150?img=55",
    coverImage:
      "https://images.unsplash.com/photo-1518972559570-7cc1309f3229?auto=format&fit=crop&w=1600&q=80",
    likesCount: 190250,
    postCount: 98,
    viewsCount: 6012000,
    followed: false,
  },
  {
    fullname: "Hardwell",
    title: "Big Room • Festival EDM • DJ",
    profile: "https://i.pravatar.cc/150?img=18",
    coverImage:
      "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=1600&q=80",
    likesCount: 87500,
    postCount: 112,
    viewsCount: 2146000,
    followed: true,
  },
  {
    fullname: "Dimitri Vegas",
    title: "Festival EDM • DJ",
    profile: "https://i.pravatar.cc/150?img=41",
    coverImage:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80",
    likesCount: 76500,
    postCount: 84,
    viewsCount: 1789000,
    followed: false,
  },
  {
    fullname: "Afrojack",
    title: "Electro House • Dutch House • DJ",
    profile: "https://i.pravatar.cc/150?img=29",
    coverImage:
      "https://images.unsplash.com/photo-1504509546545-e000b4a62425?auto=format&fit=crop&w=1600&q=80",
    likesCount: 69200,
    postCount: 105,
    viewsCount: 1654000,
    followed: true,
  },
  {
    fullname: "Alan Walker",
    title: "Melodic EDM • Producer",
    profile: "https://i.pravatar.cc/150?img=60",
    coverImage:
      "https://images.unsplash.com/photo-1515202913167-d9a698095ebf?auto=format&fit=crop&w=1600&q=80",
    likesCount: 210500,
    postCount: 156,
    viewsCount: 7423000,
    followed: false,
  },
];

const App = () => {
  return (
    <div className="container mx-auto p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {users.map(function (elem, index) {
        return <Cards key={index} user={elem} />;
      })}
    </div>
  );
};

export default App;
