import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TicketListItem } from '../data/tickets';
import { colors } from '../styles/colors';

type TicketListCardProps = {
  ticket: TicketListItem;
};

export function TicketListCard({ ticket }: TicketListCardProps) {
  const used = ticket.status === 'used';

  return (
    <View style={[styles.card, used && styles.usedCard]}>
      <View style={[styles.illustrationArea, used && styles.usedIllustrationArea]}>
        <Text style={[styles.illustrationTitle, used && styles.usedText]}>
          イラスト挿入予定
        </Text>
      </View>

      <View style={styles.body}>
        <Text style={[styles.title, used && styles.usedTitle]} numberOfLines={1}>
          {ticket.title}
        </Text>
        <Text style={[styles.from, used && styles.usedText]} numberOfLines={1}>
          From {ticket.from}
        </Text>
      </View>

      <View style={[styles.statusLabel, used && styles.usedStatusLabel]}>
        <Text style={[styles.statusText, used && styles.usedStatusText]}>
          {used ? '使用済み' : '未使用'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 122,
    borderRadius: 22,
    borderWidth: 1.5,
    borderColor: colors.primaryBorder,
    backgroundColor: colors.surface,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 16,
    shadowColor: colors.cardShadow,
    shadowOpacity: 0.18,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 1,
  },
  usedCard: {
    borderColor: colors.divider,
  },
  illustrationArea: {
    width: 104,
    height: 88,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.placeholderBorder,
    backgroundColor: colors.placeholderBackground,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    marginRight: 16,
  },
  usedIllustrationArea: {
    borderColor: colors.divider,
    backgroundColor: '#FBFCFE',
  },
  illustrationTitle: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '700',
    color: colors.primaryAccent,
    textAlign: 'center',
  },
  body: {
    flex: 1,
    minWidth: 0,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '800',
    color: colors.primary,
  },
  usedTitle: {
    color: colors.textMuted,
  },
  from: {
    marginTop: 10,
    fontSize: 15,
    lineHeight: 21,
    fontWeight: '800',
    color: colors.textSecondary,
  },
  usedText: {
    color: colors.textMuted,
  },
  statusLabel: {
    minWidth: 74,
    minHeight: 36,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: colors.primaryBorder,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginLeft: 12,
    backgroundColor: colors.surface,
  },
  usedStatusLabel: {
    borderColor: colors.divider,
    backgroundColor: '#FBFCFE',
  },
  statusText: {
    fontSize: 14,
    lineHeight: 19,
    fontWeight: '800',
    color: colors.primary,
  },
  usedStatusText: {
    color: colors.textMuted,
  },
});
