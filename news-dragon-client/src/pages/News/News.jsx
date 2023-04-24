import React from "react";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorInsights from "./EditorInsights";

const News = () => {
  const news = useLoaderData();
  const {
    _id,
    title,
    author,
    image_url,
    details,
    category_id,
    total_view,
    rating,
  } = news;
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="primary">
              <FaArrowLeft /> All news of this category
            </Button>
          </Link>
        </Card.Body>
      </Card>

      <EditorInsights />
    </div>
  );
};

export default News;
