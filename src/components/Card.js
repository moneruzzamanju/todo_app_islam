// const todoTitle = "This is Card Title Area";
// const todoDescription="this is card description and create react practicse functional components.description and create react practics.";
// const todoFooter ="This is Card footer Area";

function Card(props){
    return <div className="card">
              <h3 className="cardTitle">{props.todoTitle}</h3>
              <p className="cardDescription">{props.todoDescription}</p> 
              <h3 className="cardFooter">{props.todoFooter}</h3>
          </div>
    }

export default Card;