import { Link, useLocation, useNavigate } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();
  let locationArray = location.pathname.split("/").slice(1);
  let locationObject: any = {};
  let baseURL = "";

  for (let i = 0; i < locationArray.length; i += 2) {
    locationObject[locationArray[i]] = locationArray[i + 1];
  }

  const breadcrumbSection = Object.keys(locationObject).map((objKey) => {
    baseURL += `/${objKey}/${locationObject[objKey]}`;

    return (
      <>
        {">"}
        <Link key={objKey} to={`${baseURL}`}>
          {objKey}
        </Link>
      </>
    );
  });

  return (
    <div>
      <Link to="/">home</Link>
      {Object.keys(locationObject).length > 0 ? breadcrumbSection : <></>}
    </div>
  );
}

export default Breadcrumbs;
