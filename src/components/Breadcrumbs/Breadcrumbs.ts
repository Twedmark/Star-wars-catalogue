import { Link, useLocation } from "react-router-dom";
import type { LinkProps } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();

  return (
    <Link<LinkProps>
      to="/"
      className={location.pathname === "/" ? "breadcrumb-active" : "breadcrumb-not-active"}
    >
      home
    </Link>

    <Link<LinkProps>
      to="/products"
      className={
        location.pathname.startsWith("/products")
          ? "breadcrumb-active"
          : "breadcrumb-not-active"
      }
    >
      Products
    </Link>

    <Link<LinkProps>
      to="/products/1"
      className={
        location.pathname === "/products/1"
          ? "breadcrumb-active"
          : "breadcrumb-not-active"
      }
    >
      Product 1
    </Link>
  );
}
