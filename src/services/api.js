const getApi = async () => {
  const getLink = await fetch('https://www.boredapi.com/api/activity');
  const response = await getLink.json();
  return response;
};

getApi()

export default getApi;
