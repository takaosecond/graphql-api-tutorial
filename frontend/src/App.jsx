import "./App.css";
import { useQuery, gql } from "@apollo/client";

const BOOKS = gql`
  query {
    aaa {
      title
      author
    }
  }
`;

function Books() {
  const { loading, error, data } = useQuery(BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return data.aaa.map(({ title, author }) => (
    <div key={title}>
      <p>
        {author} : {title}
      </p>
    </div>
  ));
}

function App() {
  return (
    <div className="App">
      <h2>Graphql Client</h2>
      <Books />
    </div>
  );
}

export default App;
