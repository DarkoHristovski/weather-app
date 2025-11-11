

export const getCoordinates = async (city: string) => {
  const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
  if (!res.ok) throw new Error('Problem fetching coordinates');
  const data = await res.json();

  if (!data.results || data.results.length === 0) {
    throw new Error('Gradot ne e pronajden');
  }

  // враќа првиот резултат
  return {
    name: data.results[0].name,
    latitude: data.results[0].latitude,
    longitude: data.results[0].longitude,
    country: data.results[0].country
  };
};
