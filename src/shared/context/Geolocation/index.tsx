import React, {createContext, useState, useEffect} from "react";

interface GeolocationData {
  latitude: number | null;
  longitude: number | null;
}

type GeolocationError = GeolocationPositionError | null;

export interface GeolocationContextProps {
  geolocation: GeolocationData;
  geolocationError: GeolocationError;
  geolocationLoading: boolean;
}

const GeolocationContext = createContext<GeolocationContextProps>(
  {} as GeolocationContextProps
);

const GeolocationProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [geolocation, setGeolocation] = useState<GeolocationData>({
    latitude: null,
    longitude: null,
  });
  const [geolocationError, setGeolocationError] =
    useState<GeolocationError>(null);

  const [geolocationLoading, setGeolocationLoading] = useState<boolean>(true);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setGeolocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setGeolocationLoading(false);
        },
        (error) => {
          setGeolocationError(error);
          setGeolocationLoading(false);
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser");
    }
  }, []);

  return (
    <GeolocationContext.Provider
      value={{geolocation, geolocationError, geolocationLoading}}
    >
      {children}
    </GeolocationContext.Provider>
  );
};

export {GeolocationContext, GeolocationProvider};

/* Here i make a context to share geolocation data via components , but If you need to use react-query instead of ContextApi , you can make it as following : 

const { data: geolocationData } = useQuery<GeolocationData>("geolocation", async () => {
  const position = await new Promise<GeolocationPosition>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

  return {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
  };
});
*/
