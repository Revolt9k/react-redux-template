import classNames from "classnames";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "store/index";

interface Props {
  title: string;
  imageUrl: string;
  wrapperClass?: string;
  imgClass?: string;
}

const Picture: React.FC<Props> = ({ title, imageUrl, wrapperClass, imgClass }) => {
  const baseURL = useSelector((state: RootState) => state.app.baseURL);
  return (
    <picture title={title} className={wrapperClass}>
      <img
        src={`${baseURL}${imageUrl}`}
        alt={title}
        className={classNames("loadedImgs", imgClass)}
      />
    </picture>
  );
};

export default Picture;
