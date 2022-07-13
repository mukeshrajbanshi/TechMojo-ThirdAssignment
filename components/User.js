import { useState } from "react";
import users from "../src/users.json";

function User() {
  const [sorttable, setSortTable] = useState([...users]);
  const SortName = () => {
    setSortTable(
      [...users].sort((a, b) => {
        if (a.name.firstname < b.name.firstname) {
          return -1;
        } else if (a.name.firstname > b.name.firstname) {
          return 1;
        } else {
          return 0;
        }
      })
    );
  };

  const SortEmail = () => {
    setSortTable(
      [...users].sort((a, b) => {
        if (a.email < b.email) {
          return -1;
        } else if (a.email > b.email) {
          return 1;
        } else {
          return 0;
        }
      })
    );
  };

  const Displaydata = sorttable.map((info) => {
    return (
      <tr key={info.id}>
        <td>{info.id}</td>
        <td>{info.name.firstname + " " + info.name.lastname}</td>
        <td>{info.email}</td>
        <td>{info.address.number + "," + info.address.street}</td>
      </tr>
    );
  });

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Serial No</th>
            <th>
              Name <button onClick={SortName}>Sort Name</button>
            </th>
            <th>
              Email <button onClick={SortEmail}>Sort Email</button>
            </th>
            <th>Address</th>
          </tr>
        </thead>

        <tbody>{Displaydata}</tbody>
      </table>
    </div>
  );
}
export default User;
