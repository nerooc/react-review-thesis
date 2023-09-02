import React from 'react';

function SSRPage({ serverData }) {
  return (
    <div>
      <h1>Server-Side Rendering Example</h1>
      <p>Data from the server: {serverData}</p>
    </div>
  );
}

export async function getServerSideProps() {
  // This function runs on the server and fetches data.
  const serverData = 'This data is fetched on the server side';

  return {
    props: {
      serverData,
    },
  };
}

export default SSRPage;
