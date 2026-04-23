import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { BottomNavigation } from '../components/BottomNavigation';
import { Header } from '../components/Header';
import { MainTicketCard } from '../components/MainTicketCard';
import { TicketListSection } from '../components/TicketListSection';
import { receivedTickets, todayTicket } from '../data/tickets';
import { colors } from '../styles/colors';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <View style={styles.screen}>
        <View style={styles.phoneFrame}>
          <Header />

          <ScrollView
            style={styles.content}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.greetingWrap}>
              <Text style={styles.greeting}>おはよう！</Text>
              <Text style={styles.subGreeting}>今日はどんなきもちを届ける？</Text>
            </View>

            <MainTicketCard
              title={todayTicket.title}
              message={todayTicket.message}
              catEmoji={todayTicket.catEmoji}
              catText={todayTicket.catText}
            />

            <TicketListSection tickets={receivedTickets} />
          </ScrollView>

          <BottomNavigation />
        </View>
      </View>
    </SafeAreaView>
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
    justifyContent: 'center',
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  phoneFrame: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: 34,
    borderWidth: 2.5,
    borderColor: colors.frameBorder,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 160,
  },
  greetingWrap: {
    marginTop: 8,
    marginBottom: 18,
  },
  greeting: {
    fontSize: 19,
    lineHeight: 30,
    fontWeight: '800',
    color: colors.textPrimary,
  },
  subGreeting: {
    fontSize: 19,
    lineHeight: 30,
    fontWeight: '800',
    color: colors.textPrimary,
  },
});
