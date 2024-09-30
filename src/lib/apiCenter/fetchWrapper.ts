const delay = (delayInms: number) => {
  return new Promise((resolve) => setTimeout(resolve, delayInms));
};
const fetchWrapper = async (url: string, options: RequestInit = {}) => {
  await delay(1500);
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    credentials: "include",
  });
  return await response.json();
};

export default fetchWrapper;
