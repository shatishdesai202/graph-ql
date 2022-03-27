import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import DisplayData from "./component/DisplayData";

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000",
  });

  return (
    <ApolloProvider client={client}>
      <div>
        <DisplayData />
      </div>
    </ApolloProvider>
  );
}

export default App;
