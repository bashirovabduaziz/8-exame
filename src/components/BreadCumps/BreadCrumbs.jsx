import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const BreadCrumbs = () => {
  const location = useLocation();

  const currentLink = [];
  const crumbs = location.pathname
    .split("/")
    .filter((crum) => crum != "")
    .map((crum) => {
      currentLink.push(`/${crum}`);
      return (
        <div className="crumb" key={crum}>
          <Link to={currentLink.join("")}>{crum}</Link>
        </div>
      );
    });

  return (
    <div className="my-6 text-black flex items-center gap-[10px] max-w-[1300px] px-5  mx-auto ">
      <Link to={"/"} className="text-[#7A7687]">Главная</Link>
      <span><IoIosArrowForward /></span>
      {crumbs}
    </div>
  );
};

export default BreadCrumbs;