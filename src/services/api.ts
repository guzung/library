const httpRequest = async (url: string, method: string, body: any | null) =>
  await fetch(url, { method, body: JSON.stringify(body) }).then((response) =>
    response.json()
  );

const get = (url: string) => httpRequest(url, "GET", null);
const put = (url: string, body: any) => httpRequest(url, "PUT", body);

export { get, put };
