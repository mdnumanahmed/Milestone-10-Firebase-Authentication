import moment from "moment";
import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Rating from 'react-rating'

const NewsCard = ({ news }) => {
  const { _id, title, author, image_url, details, total_view, rating } = news;
  return (
    <Card className="mb-3">
      <Card.Header className="d-flex align-items-center">
        <Image
          style={{ height: "40px" }}
          src={author.img}
          roundedCircle
          fluid
        />
        <div className="flex-grow-1 ps-3">
          <h5 className="mb-0">{author?.name}</h5>
          <p>
            <small>
              {moment(author?.published_date).format("yyyy-MM-DD")}{" "}
            </small>
          </p>
        </div>
        <div>
          <FaRegBookmark /> <FaShareAlt />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} fluid />
        <Card.Text>
          {details.length < 300 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 300)}...{" "}
              <Link to={`/news/${_id}`}>Read More</Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex">
        <div className="flex-grow-1">
          <Rating
            placeholderRating={rating.number}
            readonly
            emptySymbol={<FaRegStar />}
            placeholderSymbol={<FaStar className="text-warning" />}
            fullSymbol={<FaStar />}
          />
          <span className="ms-2">{rating.number}</span>
        </div>
        <div>
          <FaEye /> {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
