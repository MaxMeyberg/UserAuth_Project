import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { Entypo } from '@expo/vector-icons';
import * as LocalAuthentication from 'expo-local-authentication';

import { supabase } from '../utils/supabaseClient';

export default function FaceVerification({ route, navigation }) {
  const { email, isSignUp } = route.params;
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  }, []);

  const fallBackToDefault = () => {
    console.log('Fall back to Password Authentication');
    //navigation.navigate('Signup');
  };

  const alertComponent = (title, mess, btnTxt, btnFunc) => {
    return Alert.alert(title, mess, [
      {
        text: btnTxt,
        onPress: btnFunc,
      },
    ]);
  };

  const TwoButtonAlert = () =>
    Alert.alert('Success', 'User created successfully!', [
      { 
        text: 'Back', 
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text : "Proceed", onPress: () => navigation.navigate('LoggedIn') },
    ]);

  const handleBiometricAuth = async () => {
    const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();
    if (!isBiometricAvailable) {
      return alertComponent(
        'Please enter your password',
        'Biometric not supported',
        'OK',
        () => fallBackToDefault()
      );
    }

    const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
    if (!savedBiometrics) {
      return alertComponent(
        'Biometric not found',
        'Please use Password to Login',
        'OK',
        () => fallBackToDefault()
      );
    }

    const biometricAuth = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Authenticate with Face ID',
      cancelLabel: 'Cancel',
      disableDeviceFallback: false,
    });

    if (biometricAuth.success) {
      TwoButtonAlert();
    } else {
      fallBackToDefault();
    }
  };

  return (
    <View style={tw`flex-1 bg-white items-center justify-center`}>
      <View style={tw`mb-[100px]`}>
        <Text style={tw`text-center`}>
          {isBiometricSupported
            ? "Your device is compatible with Biometrics"
            : "Face or Fingerprint scanner is available on this device"}
        </Text>
      </View>
      <TouchableOpacity style={tw`rounded-lg bg-black flex flex-row items-center gap-4`} onPress={handleBiometricAuth}>
        <Text style={tw`text-white`}>Check Face ID</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleBiometricAuth}>
        <Entypo name="fingerprint" size={50} color="black" />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
