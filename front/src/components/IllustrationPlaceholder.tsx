import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../styles/colors';

export function IllustrationPlaceholder() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>イラスト挿入予定</Text>
      <Text style={styles.subtitle}>ここに画像が入ります</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 156,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: colors.placeholderBorder,
    backgroundColor: colors.placeholderBackground,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.primaryAccent,
  },
  subtitle: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: '600',
    color: colors.textMuted,
  },
});
