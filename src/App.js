import React from "react";
import { CircularProgress, Button } from "@material-ui/core";

import Cards from "./components/Cards";
import getUsers from "./__mocks__/getUsers.mock";

export default function App() {
  const [users, setUsers] = React.useState([]);
  const [isUsersLoading, setUsersLoading] = React.useState(false);
  const [isRefresh, toggleRefresh] = React.useState(false);

  React.useEffect(() => {
    setUsersLoading(true);

    getUsers({ isRefresh }).then(users => {
      setUsers(users);
      setUsersLoading(false);
    });

    return () => {};
  }, [isRefresh]);

  if (isUsersLoading) {
    return <CircularProgress />;
  }

  return (
    <>
      <Cards items={users} />
      <Button
        onClick={() => toggleRefresh(isRefresh => !isRefresh)}
        variant="contained"
        color="primary"
      >
        Refresh Users
      </Button>
    </>
  );
}
