import React from 'react';
import { Button } from 'react-native';
export default function App({ buttonTitle, isEnabled }) {
  if(isEnabled) {
    return (
      <Button title={buttonTitle} />
    );
  }
  else {
    return (
      <Button title="??" />
    )
  }
}