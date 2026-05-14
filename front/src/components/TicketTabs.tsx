import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { TicketListTab } from '../data/tickets';
import { colors } from '../styles/colors';

type TicketTabItem = {
  key: TicketListTab;
  label: string;
};

const tabs: TicketTabItem[] = [
  { key: 'received', label: 'もらった' },
  { key: 'sent', label: 'あげた' },
  { key: 'used', label: '使った' },
];

type TicketTabsProps = {
  activeTab: TicketListTab;
  onChange: (tab: TicketListTab) => void;
};

export function TicketTabs({ activeTab, onChange }: TicketTabsProps) {
  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const active = tab.key === activeTab;

        return (
          <Pressable
            key={tab.key}
            style={styles.tab}
            onPress={() => onChange(tab.key)}
          >
            <Text style={[styles.label, active && styles.activeLabel]}>{tab.label}</Text>
            <View style={[styles.indicator, active && styles.activeIndicator]} />
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
    marginHorizontal: -22,
    paddingHorizontal: 22,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 18,
    paddingBottom: 12,
  },
  label: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '800',
    color: colors.textSecondary,
  },
  activeLabel: {
    color: colors.primary,
  },
  indicator: {
    marginTop: 12,
    width: '74%',
    height: 3,
    borderRadius: 2,
    backgroundColor: 'transparent',
  },
  activeIndicator: {
    backgroundColor: colors.primary,
  },
});
