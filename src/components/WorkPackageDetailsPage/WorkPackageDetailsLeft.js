import { social } from "@/data/NavItems";
import workPackageDetails from "@/data/workPackageDetails";
import React from "react";
import { Image } from "react-bootstrap";
import SingleComment from "../CausesDetails/SingleComment";
import CommentForm from "../CommentForm/CommentForm";

const {
  image,
  admin,
  totalComments,
  title,
  textOne,
  textTwo,
  textThree,
  tags,
  author: { image: authorImage, name, description },
  comments,
} = workPackageDetails;

const WorkPackageDetailsLeft = () => {
  return (
    <div className="workpkg-news-details__left">
      <div className="workpkg-news-details__img">
        <Image src={image.src} alt="" />
      </div>
      <div className="workpkg-news-details__content">
        <ul className="list-unstyled workpkg-news-details__meta">
          <li>
            <a href="#">
              <i className="far fa-user-circle"></i> by {admin}
            </a>
          </li>
          <li>
            <span>/</span>
          </li>
          <li>
            <a href="#">
              <i className="far fa-comments"></i> {totalComments} Comments
            </a>
          </li>
        </ul>
        <h3 className="workpkg-news-details__title">{title}</h3>
        <p className="workpkg-news-details__text-one">{textOne}</p>
        <p className="workpkg-news-details__text-two">{textTwo}</p>
        <p className="workpkg-news-details__text-three">{textThree}</p>
      </div>
      <div className="workpkg-news-details__bottom">
        <p className="workpkg-news-details__tags">
          <span>Tags: </span>
          {tags.map((tag, i) => (
            <a key={i} href="#">
              {tag}
            </a>
          ))}
        </p>
        <div className="workpkg-news-details__social-list">
          {social.map(({ icon, href }, index) => (
            <a href={href} key={index}>
              <i className={`fab ${icon}`}></i>
            </a>
          ))}
        </div>
      </div>
      <div className="workpkg-author-one">
        <div className="workpkg-author-one__image">
          <Image src={authorImage.src} alt="" />
        </div>
        <div className="workpkg-author-one__content">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="comment-one">
        <h3 className="comment-one__title">Comments</h3>
        {comments.map((comment) => (
          <SingleComment key={comment.id} comment={comment} />
        ))}
      </div>
      <CommentForm />
    </div>
  );
};

export default WorkPackageDetailsLeft;
