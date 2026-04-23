import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { StepIndicator } from '../components/StepIndicator';
import { TemplateCard } from '../components/TemplateCard';
import { createTicketSteps, templateOptions } from '../data/createTicket';
import { colors } from '../styles/colors';

export default function CreateTicketScreen() {
  const [selectedTemplateId, setSelectedTemplateId] = useState(templateOptions[0].id);

  const isNextEnabled = Boolean(selectedTemplateId);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <View style={styles.screen}>
        <View style={styles.phoneFrame}>
          <ScrollView
            style={styles.content}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.stepSection}>
              <StepIndicator steps={createTicketSteps} activeStep={1} />
            </View>

            <Text style={styles.heading}>テンプレートを選ぼう</Text>

            <View style={styles.templateGrid}>
              {templateOptions.map((template) => (
                <TemplateCard
                  key={template.id}
                  title={template.title}
                  selected={template.id === selectedTemplateId}
                  onPress={() => setSelectedTemplateId(template.id)}
                />
              ))}
            </View>
          </ScrollView>

          <View style={styles.footer}>
            <TouchableOpacity
              style={[styles.nextButton, !isNextEnabled && styles.disabledButton]}
              activeOpacity={0.85}
              disabled={!isNextEnabled}
            >
              <Text style={styles.nextButtonText}>次へ</Text>
            </TouchableOpacity>
          </View>
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
    paddingTop: 30,
    paddingBottom: 156,
  },
  stepSection: {
    width: '100%',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.textPrimary,
    textAlign: 'center',
    marginBottom: 22,
  },
  templateGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 22,
    paddingTop: 16,
    paddingBottom: 24,
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: colors.divider,
  },
  nextButton: {
    height: 58,
    borderRadius: 18,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledButton: {
    opacity: 0.5,
  },
  nextButtonText: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.surface,
    letterSpacing: 1,
  },
});
