import EmployeesTable from "../components/EmployeesTable";
import Page from "../components/Page";

const EMPLOYEES = [
  {
    id: 1,
    firstName: "Dev",
    lastName: "Mandavia",
    jobTitle: "Director",
    department: "Executive",
    manager: "--",
  },
  {
    id: 2,
    firstName: "Ryan",
    lastName: "Reynolds",
    jobTitle: "Director",
    department: "Executive",
    manager: "--",
  },
  {
    id: 1,
    firstName: "Hugh",
    lastName: "Jackman",
    jobTitle: "Director",
    department: "Executive",
    manager: "--",
  },
];

const Employees = () => {
  return (
    <Page header="Employees" headerColor="#FFC300">
      <EmployeesTable employees={EMPLOYEES} />
    </Page>
  );
};

export default Employees;
