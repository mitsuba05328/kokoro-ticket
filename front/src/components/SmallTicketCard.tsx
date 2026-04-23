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
      <View style={styles.placeholderArea}>
        <Text style={styles.placeholderText}>{ticket.placeholder}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 136,
    backgroundColor: colors.surface,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: colors.primaryBorder,
    paddingTop: 16,
    paddingHorizontal: 14,
    paddingBottom: 14,
    alignItems: 'center',
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
  placeholderArea: {
    width: '100%',
    minHeight: 72,
    borderRadius: 14,
    backgroundColor: colors.placeholderBackground,
    borderWidth: 1,
    borderColor: colors.placeholderBorder,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  placeholderText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textMuted,
  },
});
