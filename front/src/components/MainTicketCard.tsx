import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../styles/colors';

type MainTicketCardProps = {
  title: string;
  message: string;
  catEmoji: string;
  catText: string;
};

export function MainTicketCard({
  title,
  message,
  catEmoji,
  catText,
}: MainTicketCardProps) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.sectionLabel}>今日のこころチケット</Text>
      <View style={styles.outerCard}>
        <View style={styles.innerCard}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>

          <View style={styles.catRow}>
            <Text style={styles.decoration}>♡</Text>
            <View style={styles.catCenter}>
              <Text style={styles.catEmoji}>{catEmoji}</Text>
              <Text style={styles.catText}>{catText}</Text>
            </View>
            <Text style={styles.decoration}>♡</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 24,
  },
  sectionLabel: {
    fontSize: 14,
    color: colors.primarySoft,
    fontWeight: '700',
    marginBottom: 10,
    marginLeft: 4,
  },
  outerCard: {
    backgroundColor: colors.primaryPale,
    borderRadius: 26,
    padding: 8,
    shadowColor: colors.shadow,
    shadowOpacity: 0.22,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 8 },
    elevation: 3,
  },
  innerCard: {
    backgroundColor: colors.surface,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: colors.primaryBorder,
    borderStyle: 'dashed',
    paddingHorizontal: 18,
    paddingVertical: 22,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    color: colors.primary,
    fontWeight: '800',
    letterSpacing: 1,
  },
  message: {
    marginTop: 8,
    fontSize: 16,
    color: colors.primarySoft,
    fontWeight: '700',
  },
  catRow: {
    marginTop: 18,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
  },
  decoration: {
    fontSize: 28,
    color: colors.primarySoft,
  },
  catCenter: {
    alignItems: 'center',
  },
  catEmoji: {
    fontSize: 76,
  },
  catText: {
    marginTop: -6,
    fontSize: 18,
    color: colors.primaryAccent,
    fontWeight: '700',
  },
});
