import { NavLink } from 'react-router-dom';

interface IBreadCrumbProps {
  currentPage: any;
}

const BreadCrumb: React.FC<IBreadCrumbProps> = ({ currentPage }) => {
  return (
    <section className="breadcrumb">
      <div className="container">
        <ul className="breadcrumb-list">
          <li>
            <NavLink to="/" className="me-1">
              <i className="fa-sharp fa-solid fa-house me-1"></i>
              Home
            </NavLink>
          </li>
          <li>{currentPage}</li>
        </ul>
      </div>
    </section>
  );
};

export default BreadCrumb;
