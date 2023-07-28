import { Link } from "react-router-dom";
import "./Card.css";
import { useEffect } from "react";

const Card = ({ data }) => {


  return (
    <div className="card-container">

      {data?.map(({id, volumeInfo}) => {
        return (
          <div key={id} className="card">
            <h5 className="card-title">{volumeInfo?.title.slice(0,50)}</h5>
            <img className="image" src={volumeInfo?.imageLinks?.smallThumbnail} alt="Card image cap" />
            <div className="card-body">
              <Link to={`/detail/${id}`} className="btn btn-primary"> 
                Details
            </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
