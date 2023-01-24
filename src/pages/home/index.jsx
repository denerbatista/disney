import Card from "/projetos/disney/src/components/card";
import "./style.css";

const Home = ({ data }) => {
  

  return (
    <div className="home-container">
      {data.map((e, index) => (
        <Card element={e} key={index} />
      ))}
    </div>
  );
};

export default Home;
