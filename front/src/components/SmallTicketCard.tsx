import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ReceivedTicket } from '../data/tickets';
import { colors } from '../styles/colors';

type SmallTicketCardProps = {
  ticket: ReceivedTicket;
  isLast?: boolean;
};

export function SmallTicketCard({ ticket, isLast = false }: SmallTicketCardProps) {
  return (
    <View style={[styles.card, !isLast && styles.cardSpacing]}>
      <Text style={styles.title}>{ticket.title}</Text>
      <View style={styles.artRow}>
        <Text style={styles.accent}>{ticket.accent}</Text>
        <Text style={styles.emoji}>{ticket.emoji}</Text>
        <Text style={styles.accent}>{ticket.accent}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 136,
    backgroundColor: colors.surface,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.primaryBorder,
    paddingTop: 16,
    paddingHorizontal: 14,
    paddingBottom: 14,
    alignItems: 'center',
    shadowColor: colors.cardShadow,
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5 },
    elevation: 2,
  },
  cardSpacing: {
    marginRight: 14,
  },
  title: {
    fontSize: 14,
    color: colors.primaryAccent,
    fontWeight: '800',
    marginBottom: 14,
  },
  artRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  accent: {
    fontSize: 18,
    color: colors.primarySoft,
  },
  emoji: {
    fontSize: 46,
  },
});
