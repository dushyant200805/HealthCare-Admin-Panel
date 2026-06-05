import {
  faArrowTrendDown,
  faArrowTrendUp,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Table1() {
  const data = [
    {
      id: 1,
      image: "/gp.svg",
      name: "General Physician",
      description: "Lorem ipsum dolor sit amet.",
      percentage: "35%",
      circleClass: "badge-danger",
      iconClass: "text-success",
      icon: faArrowTrendUp,
    },
    {
      id: 2,
      image: "/dentist.svg",
      name: "Dentist",
      description: "Lorem ipsum dolor sit amet.",
      percentage: "15%",
      circleClass: "badge-success",
      iconClass: "text-danger",
      icon: faArrowTrendDown,
    },
    {
      id: 3,
      image: "/ent.svg",
      name: "ENT",
      description: "Lorem ipsum dolor sit amet.",
      percentage: "5%",
      circleClass: "badge-secondary",
      iconClass: "text-danger",
      icon: faArrowTrendDown,
    },
    {
      id: 4,
      image: "/cardio.svg",
      name: "Cardiologist",
      description: "Lorem ipsum dolor sit amet.",
      percentage: "40%",
      circleClass: "bg-light-primary",
      iconClass: "text-success",
      icon: faArrowTrendUp,
    },
    {
      id: 5,
      image: "/eye.svg",
      name: "Opthomology",
      description: "Lorem ipsum dolor sit amet.",
      percentage: "25%",
      circleClass: "badge-orange",
      iconClass: "text-success",
      icon: faArrowTrendUp,
    },
  ];

  return (
    <>
      {data.map((item) => {
        return (
          <div
            className="d-flex align-items-center border-bottom pb-4 mb-4 justify-content-between"
            key={item.id}
          >
            <div className="d-flex align-items-center w-100 gap-2">
              <div className="top-department-icon">
                <div
                  className={`rounded-circle ${item.circleClass} reward-circle d-flex align-items-center justify-content-center`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    width="24"
                    height="24"
                  />
                </div>
              </div>

              <div className="top-department-name">
                <h6 className="text-dark mb-1">{item.name}</h6>

                <p className="text-slate mb-0 pb-0">
                  {item.description}
                </p>
              </div>
            </div>

            <div className="ratings d-flex justify-content-end">
              <span
                className={`text-slate fs-14 fw-medium ${item.iconClass}`}
              >
                {item.percentage}

                <FontAwesomeIcon
                  icon={item.icon}
                  className={`${item.iconClass} fs-14 ms-2`}
                />
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Table1;