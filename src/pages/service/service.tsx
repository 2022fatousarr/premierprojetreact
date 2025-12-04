import type { Service } from "../../components/parties/type";
import { Link, Outlet } from "react-router-dom";
const services: Service[] = [
  {
    id: 1,
    title: "Service One",
    description: "Description for service one.",
    link: "/service-one",
  },
  {
    id: 2,
    title: "Service two",
    description: "Description for service two.",
    link: "/service-two",
  },
  {
    id: 3,
    title: "Service three",
    description: "Description for service three.",
    link: "/service-three",
  },
];

export default function ServicesPage() {
  return (
    <div className="max-w-xl mx-auto py-12 space-y-6">
      <h1 className="text-4xl font-bold text-purple-800">Services Page</h1>

      {services.map((service) => (
        <div key={service.id} className="mb-6 bg-amber-500 p-4 rounded-lg">
          <h2 className="text-2xl font-semibold text-purple-600">{service.title}</h2>
          <p>{service.description}</p>
          <Link to={service.link} className="text-purple-500 hover:underline">
            Voir plus
          </Link>
        </div>
      ))}
      <Outlet />
    </div>
  );
}