import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {AuthProvider, useAuth} from "./app/context/AuthContext";
import {AuthLayout} from "./app/layouts/AuthLayout";
import {GluestackUIProvider} from "@gluestack-ui/themed";
// import 'expo-dev-client';

export default function App() {
  return (
    <GluestackUIProvider>
      <AuthProvider>
        <AuthLayout></AuthLayout>
      </AuthProvider>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
