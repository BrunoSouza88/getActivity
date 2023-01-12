import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component{
  render(){
    return(
      <div>
        <p>Home</p>
        <Link to="/Activity">
          <button>Ir para a atividade</button>
        </Link>
      </div>
    );
  }
}

export default Home;
