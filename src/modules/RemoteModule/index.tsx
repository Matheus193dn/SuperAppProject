import React from 'react';
import {Text} from 'react-native';

const Component = React.lazy(
  // @ts-ignore
  () => import(/* webpackChunkName: "remoteModule" */ './RemoteModule'),
);

export default (props: any) => (
  <React.Suspense fallback={<Text>Loading Remote Module...</Text>}>
    <Component {...props} />
  </React.Suspense>
);
