import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors } from '../styles/colors';

export type TicketContentFormValue = {
  title: string;
  message: string;
  expiresAt: string;
  recipient: string;
};

type TicketContentFormProps = {
  value: TicketContentFormValue;
  onChange: (value: TicketContentFormValue) => void;
};

type TicketContentFieldProps = {
  label: string;
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  optional?: boolean;
  multiline?: boolean;
};

function TicketContentField({
  label,
  value,
  placeholder,
  onChangeText,
  optional = false,
  multiline = false,
}: TicketContentFieldProps) {
  return (
    <View style={styles.fieldGroup}>
      <View style={styles.labelRow}>
        <Text style={styles.label}>{label}</Text>
        {optional && <Text style={styles.optionalLabel}>任意</Text>}
      </View>
      <TextInput
        style={[styles.input, multiline && styles.messageInput]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.textMuted}
        multiline={multiline}
        textAlignVertical={multiline ? 'top' : 'center'}
      />
    </View>
  );
}

export function TicketContentForm({ value, onChange }: TicketContentFormProps) {
  const updateValue = (key: keyof TicketContentFormValue) => (text: string) => {
    onChange({
      ...value,
      [key]: text,
    });
  };

  return (
    <View style={styles.container}>
      <TicketContentField
        label="チケット名"
        value={value.title}
        placeholder="例：おてつだいありがとう券"
        onChangeText={updateValue('title')}
      />
      <TicketContentField
        label="メッセージ"
        value={value.message}
        placeholder="伝えたいきもちを書こう"
        onChangeText={updateValue('message')}
        multiline
      />
      <TicketContentField
        label="有効期限"
        value={value.expiresAt}
        placeholder="例：2026年5月31日まで"
        onChangeText={updateValue('expiresAt')}
        optional
      />
      <TicketContentField
        label="贈る相手"
        value={value.recipient}
        placeholder="例：おかあさんへ"
        onChangeText={updateValue('recipient')}
        optional
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 18,
  },
  fieldGroup: {
    width: '100%',
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
    paddingHorizontal: 4,
  },
  label: {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '800',
    color: colors.textPrimary,
  },
  optionalLabel: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '700',
    color: colors.textSecondary,
  },
  input: {
    minHeight: 54,
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: colors.placeholderBorder,
    backgroundColor: colors.placeholderBackground,
    paddingHorizontal: 16,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  messageInput: {
    minHeight: 118,
    paddingTop: 16,
    paddingBottom: 16,
  },
});
