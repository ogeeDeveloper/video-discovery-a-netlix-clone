/*
This is an example snippet - you should consider tailoring it
to your service.
*/
export {};

async function queryHasuraGraphQL(operationsDoc, operationName, variables) {
  const result = await fetch(process.env.NEXT_PUBLIC_HHASURA_GRAPHQL_URL, {
    headers: {
      "content-type": "application/json",
      "x-hasura-admin-secret": process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET,
    },
    method: "POST",
    body: JSON.stringify({
      query: operationsDoc,
      variables: variables,
      operationName: operationName,
    }),
  });

  return await result.json();
}

function executeQuery() {
  const operationsDoc = `
    query MyQuery {
        users {
            email
            id
            issuser
            publicAddress
        }
    }
    `;
  return queryHasuraGraphQL(operationsDoc, "MyQuery", {});
}

export async function startExecuteMyMutation() {
  const { errors, data } = await executeQuery();

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  console.log(data);
}
