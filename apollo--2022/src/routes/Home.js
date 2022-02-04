import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

const Home = () => {
  const { loading, data } = useQuery(GET_MOVIES);
  if (loading) {
    return "로딩중..";
  }
  if (data && data.movies) {
    return data.movies.map((m) => <h1>{m.id}</h1>);
  }
};

export default Home;
