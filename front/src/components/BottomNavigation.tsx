import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../styles/colors';

type NavItem = {
  key: string;
  label: string;
  icon: string;
  type: 'feather' | 'mci' | 'ion' | 'plus';
  active?: boolean;
};

const navItems: NavItem[] = [
  { key: 'home', label: 'ホーム', icon: 'home', type: 'feather', active: true },
  { key: 'ticket', label: 'チケット', icon: 'ticket-percent-outline', type: 'mci' },
  { key: 'create', label: '作る', icon: 'plus', type: 'plus' },
  { key: 'memory', label: '思い出', icon: 'image-outline', type: 'ion' },
  { key: 'mypage', label: 'マイページ', icon: 'person-outline', type: 'ion' },
];

function renderIcon(item: NavItem) {
  const color = item.active ? colors.primary : colors.navInactive;
  const size = 24;

  if (item.type === 'feather') {
    return <Feather name={item.icon as React.ComponentProps<typeof Feather>['name']} size={size} color={color} />;
  }

  if (item.type === 'mci') {
    return (
      <MaterialCommunityIcons
        name={item.icon as React.ComponentProps<typeof MaterialCommunityIcons>['name']}
        size={size}
        color={color}
      />
    );
  }

  return <Ionicons name={item.icon as React.ComponentProps<typeof Ionicons>['name']} size={size} color={color} />;
}

export function BottomNavigation() {
  return (
    <View style={styles.container}>
      <View style={styles.divider} />
      <View style={styles.navRow}>
        {navItems.map((item) => {
          if (item.type === 'plus') {
            return (
              <View key={item.key} style={styles.plusSlot}>
                <TouchableOpacity style={styles.plusButton} activeOpacity={0.85}>
                  <Feather name="plus" size={36} color={colors.surface} />
                </TouchableOpacity>
                <Text style={styles.label}>作る</Text>
              </View>
            );
          }

          return (
            <TouchableOpacity key={item.key} style={styles.navItem} activeOpacity={0.8}>
              {renderIcon(item)}
              <Text style={[styles.label, item.active && styles.activeLabel]}>{item.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.surface,
    paddingTop: 10,
    paddingBottom: 18,
  },
  divider: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 1.5,
    backgroundColor: colors.divider,
  },
  navRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: 62,
    paddingTop: 12,
  },
  plusSlot: {
    alignItems: 'center',
    width: 82,
    marginTop: -40,
  },
  plusButton: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: colors.primaryAccent,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.primary,
    shadowOpacity: 0.32,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
    borderWidth: 4,
    borderColor: colors.plusBorder,
  },
  label: {
    marginTop: 8,
    fontSize: 11,
    fontWeight: '700',
    color: colors.navInactive,
    textAlign: 'center',
  },
  activeLabel: {
    color: colors.primary,
  },
});
