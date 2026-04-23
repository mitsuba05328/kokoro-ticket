import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../styles/colors';

type MainTicketCardProps = {
  title: string;
  message: string;
  placeholderTitle: string;
  placeholderSubtitle: string;
};

export function MainTicketCard({
  title,
  message,
  placeholderTitle,
  placeholderSubtitle,
}: MainTicketCardProps) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.sectionLabel}>今日のこころチケット</Text>
      <View style={styles.outerCard}>
        <View style={styles.innerCard}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>

          <View style={styles.placeholderArea}>
            <View style={styles.placeholderInner}>
              <Text style={styles.placeholderTitle}>{placeholderTitle}</Text>
              <Text style={styles.placeholderSubtitle}>{placeholderSubtitle}</Text>
            </View>
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
  },
  innerCard: {
    backgroundColor: colors.surface,
    borderRadius: 22,
    borderWidth: 1.5,
    borderColor: colors.primaryBorder,
    borderStyle: 'dashed',
    paddingHorizontal: 18,
    paddingTop: 22,
    paddingBottom: 18,
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
  placeholderArea: {
    marginTop: 20,
    width: '100%',
    minHeight: 150,
    borderRadius: 18,
    backgroundColor: colors.placeholderBackground,
    borderWidth: 1,
    borderColor: colors.placeholderBorder,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  placeholderInner: {
    alignItems: 'center',
  },
  placeholderTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.primaryAccent,
  },
  placeholderSubtitle: {
    marginTop: 6,
    fontSize: 13,
    color: colors.textMuted,
    fontWeight: '600',
  },
});
