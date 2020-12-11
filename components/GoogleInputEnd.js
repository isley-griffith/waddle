import React, { useEffect, useRef } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GooglePlacesInputEnd= () => {
  const ref = useRef();

  useEffect(() => {
    ref.current?.setAddressText('');
  }, []);

  return (
    <GooglePlacesAutocomplete
      ref={ref}
      placeholder='Enter destination'
      enablePoweredByContainer={false}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyBc1ARWe1pRX_xR5qyEyMBXE1-b5KKCcNU',
        language: 'en',
      }}
      currentLocation={true}
      currentLocationLabel='Current Location'
    />
  );
};

export default GooglePlacesInputEnd;