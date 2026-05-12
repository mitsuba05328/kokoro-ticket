import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../styles/colors';

type CatIllustrationCardProps = {
  name: string;
  selected: boolean;
  onPress: () => void;
};

export function CatIllustrationCard({ name, selected, onPress }: CatIllustrationCardProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        selected && styles.selectedCard,
        pressed && styles.pressedCard,
      ]}
      onPress={onPress}
    >
      <View style={[styles.placeholderArea, selected && styles.selectedPlaceholder]}>
        <Text style={styles.placeholderTitle}>イラスト挿入予定</Text>
        <Text style={styles.placeholderSubtitle}>猫イラスト</Text>
      </View>
      <Text style={[styles.name, selected && styles.selectedName]}>{name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    borderRadius: 22,
    borderWidth: 1.5,
    borderColor: colors.placeholderBorder,
    backgroundColor: colors.surface,
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 14,
    marginBottom: 14,
  },
  selectedCard: {
    borderColor: colors.primary,
    backgroundColor: '#F7FCFF',
  },
  pressedCard: {
    opacity: 0.86,
  },
  placeholderArea: {
    minHeight: 124,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.placeholderBorder,
    backgroundColor: colors.placeholderBackground,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  selectedPlaceholder: {
    borderColor: colors.primaryBorder,
    backgroundColor: colors.primaryPale,
  },
  placeholderTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.primaryAccent,
  },
  placeholderSubtitle: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: '600',
    color: colors.textMuted,
  },
  name: {
    marginTop: 12,
    minHeight: 22,
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '800',
    color: colors.textPrimary,
    textAlign: 'center',
  },
  selectedName: {
    color: colors.primary,
  },
});
