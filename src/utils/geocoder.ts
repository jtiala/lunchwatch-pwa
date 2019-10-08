export const reverseGeocode = (location: { lat: number; lng: number }) => {
  return new Promise((resolve, reject) => {
    if (
      window &&
      window.google &&
      window.google.maps &&
      typeof window.google.maps.Geocoder === "function"
    ) {
      const geocoder = new window.google.maps.Geocoder();
      const OK = window.google.maps.GeocoderStatus.OK;

      geocoder.geocode({ location }, (results, status) => {
        if (status !== OK) {
          reject(status);
        }

        resolve(results);
      });
    }
  });
};
