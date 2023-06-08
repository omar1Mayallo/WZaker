import {useContext} from "react";
import {GeolocationContext} from ".";

export default function useGeolocation() {
  const {geolocation, geolocationError, geolocationLoading} =
    useContext(GeolocationContext);

  return {geolocation, geolocationError, geolocationLoading};
}
