import React, { useEffect } from "react";
import { GET_USER } from "../graphql/queries/user";
import client from "../store/client";

type GreetProps = {
  name: string;
};

const Greet = (props: GreetProps) => {
  useEffect(() => {
    try {
      getUser();
    } catch (e) {}
  }, []);
  const getUser = async () => {
    const { data } = await client.request({
      query: GET_USER,
    });
    console.log("data", data);
  };
  return (
    /*const [updateUser] = useMutation(UPDATE_USER_MUTATION)
        const [newName, setNewName] = useState(id)*/

    <div>
      
    </div>
  );
};

export default Greet;
