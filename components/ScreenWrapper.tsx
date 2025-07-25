import React from 'react';
import { Dimensions, Platform, StatusBar, StyleSheet, View } from 'react-native';
import { colors } from '@/constants/theme';
import { ScreenWrapperProps } from '@/types';

const { height } = Dimensions.get('window');

const ScreenWrapper = ({ style, children }: ScreenWrapperProps) => {
  const paddingTop = Platform.OS === 'ios' ? height * 0.06 : StatusBar.currentHeight || 24;

  return (
    <View
      style={[
        {
          paddingTop,
          flex: 1,
          backgroundColor: colors.neutral900,
        },
        style,
      ]}
    >
      <StatusBar barStyle="light-content" backgroundColor={colors.neutral900} />
      {children}
    </View>
  );
};

export default ScreenWrapper;
