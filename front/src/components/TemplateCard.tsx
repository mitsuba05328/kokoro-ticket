import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../styles/colors';

type TemplateCardProps = {
  title: string;
  selected: boolean;
  onPress: () => void;
};

export function TemplateCard({ title, selected, onPress }: TemplateCardProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        selected && styles.selectedCard,
        pressed && styles.pressedCard,
      ]}
      onPress={onPress}
    >
      <Text style={[styles.title, selected && styles.selectedTitle]}>{title}</Text>
      <View style={[styles.placeholderArea, selected && styles.selectedPlaceholder]}>
        <Text style={styles.placeholderTitle}>イラスト挿入予定</Text>
        <Text style={styles.placeholderSubtitle}>画像エリア</Text>
      </View>
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
    paddingHorizontal: 14,
    paddingTop: 16,
    paddingBottom: 14,
    marginBottom: 14,
  },
  selectedCard: {
    borderColor: colors.primary,
    borderWidth: 2,
    backgroundColor: '#F9FDFF',
  },
  pressedCard: {
    opacity: 0.86,
  },
  title: {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '800',
    color: colors.textPrimary,
    textAlign: 'center',
    minHeight: 44,
  },
  selectedTitle: {
    color: colors.primary,
  },
  placeholderArea: {
    marginTop: 12,
    minHeight: 118,
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
    backgroundColor: '#F2FAFF',
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
});
