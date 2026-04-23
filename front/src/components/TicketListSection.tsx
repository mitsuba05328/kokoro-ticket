import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ReceivedTicket } from '../data/tickets';
import { colors } from '../styles/colors';
import { SmallTicketCard } from './SmallTicketCard';

type TicketListSectionProps = {
  tickets: ReceivedTicket[];
};

export function TicketListSection({ tickets }: TicketListSectionProps) {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>受け取ったチケット</Text>
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.seeAll}>すべて見る ›</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      >
        {tickets.map((ticket, index) => (
          <SmallTicketCard
            key={ticket.id}
            ticket={ticket}
            isLast={index === tickets.length - 1}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
    paddingHorizontal: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.textPrimary,
  },
  seeAll: {
    fontSize: 14,
    color: colors.textMuted,
    fontWeight: '700',
  },
  listContent: {
    paddingRight: 26,
  },
});
