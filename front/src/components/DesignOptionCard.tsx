import React from 'react';
import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { colors } from '../styles/colors';

type DesignOptionCardProps = {
  label: string;
  selected: boolean;
  onPress: () => void;
  previewStyle?: StyleProp<ViewStyle>;
};

export function DesignOptionCard({
  label,
  selected,
  onPress,
  previewStyle,
}: DesignOptionCardProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        selected && styles.selectedCard,
        pressed && styles.pressedCard,
      ]}
      onPress={onPress}
    >
      <View style={[styles.preview, previewStyle]} />
      <Text style={[styles.label, selected && styles.selectedLabel]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '31%',
    minHeight: 112,
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: colors.placeholderBorder,
    backgroundColor: colors.surface,
    paddingHorizontal: 10,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectedCard: {
    borderColor: colors.primary,
    backgroundColor: '#F7FCFF',
  },
  pressedCard: {
    opacity: 0.86,
  },
  preview: {
    width: '100%',
    height: 48,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: colors.primaryBorder,
    backgroundColor: colors.placeholderBackground,
  },
  label: {
    marginTop: 10,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '800',
    color: colors.textPrimary,
    textAlign: 'center',
  },
  selectedLabel: {
    color: colors.primary,
  },
});
