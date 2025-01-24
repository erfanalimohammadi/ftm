import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import { setCurrentPath } from '../Redux/Slices/breadcrumbSlice'

function Breadcrumb({ params }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const { basePath, routes, currentPath } = useSelector((state) => state.breadcrumb);

  useEffect(() => {
    const path = location.pathname.replace("/trader/accountoverview/", "");
    dispatch(setCurrentPath(path));
  }, [location, dispatch]);

  const breadcrumbItems = currentPath
  .split("/")
  .filter((segment) => segment)
  .map((segment, index) => {
    const pathSegment = currentPath
      .split("/")
      .slice(0, index + 1)
      .join("/");
    const route = routes.find((r) => r.path === pathSegment);

    return route ? (
      <span key={index}>
          {route.name}
        {index < currentPath.split("/").length - 1 && " / "}
      </span>
    ) : null;
  });


    const paramsId = params
    console.log(paramsId , breadcrumbItems);
    
    

  return (
    <div className="breadcrumb text-gray-600 text-sm">
            <div className="">
                <Link to="/trader/accountoverview" className="hover:text-blue-500 text-[16px] font-light"> {basePath} / </Link>
                <span className="text-white text-[16px] font-bold">
                    {breadcrumbItems}
                </span>
                {paramsId ? <span className="text-white text-[16px] font-bold">Account Matrix</span> : null }
                <span className="text-white text-[16px] font-bold ml-1">
                    {paramsId}
                </span>
            </div>

    </div>
  );
}

export default Breadcrumb;
