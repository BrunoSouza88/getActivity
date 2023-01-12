import React from "react";
import { Link } from "react-router-dom";
import getApi from "../services/api";

class Activity extends React.Component {

  state = {
    activityCaps: '',
    type: '',
    participants: 0,
    price: 0,
  }

  componentDidMount() {
    this.handleActivity();
  }

  handleActivity = async () => {
    const activity = await getApi();
    const test = activity.activity;
    const test2 = activity.type;
    const test3 = activity.participants;
    const test4 = activity.price;
    this.setState({
      activityCaps: test.toUpperCase(),
      type:test2.toUpperCase(),
      test3: test3,
      test4: test4,
    })
  }

  render() {

    const { activityCaps, type, test3, test4 } = this.state;

    return (
      <>
        <p>Atividade para realizar:</p>
        <p>Atividade: { activityCaps }</p>
        <p>Tipo: { type }</p>
        <p>Participantes: { test3 }</p>
        <p>Preço: { test4 }R$</p>
        <button type="button" onClick={ this.handleActivity }>Mudar Atividade</button>
        <Link to="/"><button>Clica para ir pra Home</button></Link>
      </>
    );
  }
}

export default Activity;
