import { Link, useLocation } from "react-router-dom";
import { BreadcrumbContainer } from "./styles";

interface LocationInterface {
  [key: string]: string;
}

function Breadcrumbs() {
  const location = useLocation();
  let locationObject: LocationInterface = {};
  let baseURL = "";

  let locationArray = location.pathname.split("/").slice(1);
  for (let i = 0; i < locationArray.length; i += 2) {
    if (locationArray[i] === "") {
      continue;
    }
    locationObject[locationArray[i]] = locationArray[i + 1];
  }

  const breadcrumbSection = Object.keys(locationObject).map((objKey) => {
    baseURL += `/${objKey}/${locationObject[objKey]}`;
    return (
      <Link key={objKey} to={`${baseURL}`}>
        / {objKey}
      </Link>
    );
  });

  return (
    <BreadcrumbContainer props={baseURL === location.pathname ? true : false}>
      <Link key="home" to="/">
        home
      </Link>
      {Object.keys(locationObject).length > 0 ? breadcrumbSection : <></>}
    </BreadcrumbContainer>
  );
}

export default Breadcrumbs;
