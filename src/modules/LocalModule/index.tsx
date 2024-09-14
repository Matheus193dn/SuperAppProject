import React from 'react';
import {Text} from 'react-native';

const Component = React.lazy(
  // @ts-ignore
  () => import(/* webpackChunkName: "localModule" */ './LocalModule'),
);

export default (props: any) => (
  <React.Suspense fallback={<Text>Loading Local Module...</Text>}>
    <Component {...props} />
  </React.Suspense>
);
