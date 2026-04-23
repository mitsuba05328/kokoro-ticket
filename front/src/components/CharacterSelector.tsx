import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { CharacterItem } from '../data/createTicket';
import { colors } from '../styles/colors';

type CharacterSelectorProps = {
  characters: CharacterItem[];
  selectedCharacterId: string;
  onSelect: (characterId: string) => void;
};

export function CharacterSelector({
  characters,
  selectedCharacterId,
  onSelect,
}: CharacterSelectorProps) {
  return (
    <View>
      <Text style={styles.sectionTitle}>キャラクターを選ぼう</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {characters.map((character) => {
          const selected = character.id === selectedCharacterId;

          return (
            <Pressable
              key={character.id}
              style={({ pressed }) => [
                styles.chip,
                selected && styles.selectedChip,
                pressed && styles.pressedChip,
              ]}
              onPress={() => onSelect(character.id)}
            >
              <Text style={[styles.chipText, selected && styles.selectedChipText]}>
                {character.name}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.textPrimary,
    marginBottom: 14,
  },
  contentContainer: {
    paddingRight: 16,
  },
  chip: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: colors.primaryBorder,
    backgroundColor: colors.surface,
    marginRight: 10,
  },
  selectedChip: {
    backgroundColor: colors.primaryPale,
    borderColor: colors.primary,
  },
  pressedChip: {
    opacity: 0.85,
  },
  chipText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textSecondary,
  },
  selectedChipText: {
    color: colors.primary,
  },
});
