import React, { useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { BottomNavigation } from '../components/BottomNavigation';
import { TicketListCard } from '../components/TicketListCard';
import { TicketTabs } from '../components/TicketTabs';
import { RootStackParamList } from '../navigation/types';
import { TicketListTab, ticketListItems } from '../data/tickets';
import { colors } from '../styles/colors';

export default function TicketListScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [activeTab, setActiveTab] = useState<TicketListTab>('received');

  const tickets = useMemo(
    () => ticketListItems.filter((ticket) => ticket.tab === activeTab),
    [activeTab],
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <View style={styles.screen}>
        <View style={styles.phoneFrame}>
          <TicketTabs activeTab={activeTab} onChange={setActiveTab} />

          <ScrollView
            style={styles.content}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
          >
            {tickets.length > 0 ? (
              tickets.map((ticket) => (
                <TicketListCard key={ticket.id} ticket={ticket} />
              ))
            ) : (
              <EmptyTicketList onCreatePress={() => navigation.navigate('CreateTicket')} />
            )}
          </ScrollView>

          <BottomNavigation
            activeKey="ticket"
            onHomePress={() => navigation.navigate('Home')}
            onCreatePress={() => navigation.navigate('CreateTicket')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

type EmptyTicketListProps = {
  onCreatePress: () => void;
};

function EmptyTicketList({ onCreatePress }: EmptyTicketListProps) {
  return (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyTitle}>まだチケットがありません</Text>
      <TouchableOpacity
        style={styles.emptyButton}
        activeOpacity={0.85}
        onPress={onCreatePress}
      >
        <Text style={styles.emptyButtonText}>チケットを作る</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  phoneFrame: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: 34,
    shadowColor: colors.shadow,
    shadowOpacity: 0.08,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 2,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 22,
    paddingTop: 28,
    paddingBottom: 154,
  },
  emptyContainer: {
    minHeight: 330,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
  },
  emptyTitle: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '800',
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 20,
  },
  emptyButton: {
    minWidth: 176,
    height: 54,
    borderRadius: 18,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 22,
  },
  emptyButtonText: {
    fontSize: 17,
    lineHeight: 23,
    fontWeight: '800',
    color: colors.surface,
  },
});
