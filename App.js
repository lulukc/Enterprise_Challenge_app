import { StatusBar } from 'expo-status-bar';

import Routes from './src/routes';

export default function App() {
  return (
    <>
      <Routes/>
      <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />
    </>
  );
}