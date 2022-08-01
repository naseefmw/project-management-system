import React, { useEffect, useState } from "react";
import {
  Container,
  SubContainer,
  Image,
  Title,
  PhotosContainer,
  PhotosWrapper,
} from "./styled";
import axios from "axios";
import Skeleton from "@mui/material/Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { boardBackgroundUpdate } from "../../../../Services/boardService";

const getImages = async () => {
  const newAxios = axios.create();
  delete newAxios.defaults.headers.common["Authorization"];
  const res = await newAxios.get("");
  return res.data;
};

const DefaultMenu = (props) => {
  const dispatch = useDispatch();
  const boardId = useSelector((state) => state.board.id);
  return (
    <Container>
      <SubContainer>
        <ColorsMenu {...props} dispatch={dispatch} boardId={boardId} />
      </SubContainer>
    </Container>
  );
};

const PhotosMenu = (props) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getImages().then((res) => {
      setTimeout(() => {
        setImages(res);
      }, 2000);
    });
  }, []);

  const handleClick = (background) => {
    boardBackgroundUpdate(props.boardId, background, true, props.dispatch);
  };

  return (
    <PhotosContainer>
      {images.length > 0
        ? images.map((image) => {
            return (
              <PhotosWrapper
                key={image.id}
                onClick={() => handleClick(image.urls.full)}
              >
                <Image key={image.id} link={image.urls.small} />
              </PhotosWrapper>
            );
          })
        : [...Array(18).keys()].map((l, i) => (
            <PhotosWrapper key={i}>
              <Skeleton variant="rectangular" width="100%" height="6rem" />
            </PhotosWrapper>
          ))}
    </PhotosContainer>
  );
};

const ColorsMenu = (props) => {
  const colors = [
    "#1565c0",
    "#f9a825",
    "#558b2f",
    "#d84315",
    "#6a1b9a",
    "#ad1457",
    "#00695c",
    "#0277bd",
  ];

  const handleClick = (background) => {
    boardBackgroundUpdate(props.boardId, background, false, props.dispatch);
  };

  return (
    <PhotosContainer>
      {colors.map((image) => {
        return (
          <PhotosWrapper key={image} onClick={() => handleClick(image)}>
            <Image key={image} bg={image} />
          </PhotosWrapper>
        );
      })}
    </PhotosContainer>
  );
};

const BackgroundMenu = (props) => {
  const dispatch = useDispatch();
  const boardId = useSelector((state) => state.board.id);
  return (
    <>
      {props.sectionName === "Change background" ? (
        <DefaultMenu {...props} dispatch={dispatch} boardId={boardId} />
      ) : props.sectionName === "Photos by" ? (
        <PhotosMenu {...props} dispatch={dispatch} boardId={boardId} />
      ) : (
        <ColorsMenu {...props} dispatch={dispatch} boardId={boardId} />
      )}
    </>
  );
};

export default BackgroundMenu;
