import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StepItem } from '../data/createTicket';
import { colors } from '../styles/colors';

type StepIndicatorProps = {
  steps: StepItem[];
  activeStep: number;
};

export function StepIndicator({ steps, activeStep }: StepIndicatorProps) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.track} />
        {steps.map((step) => {
          const isActive = step.id === activeStep;

          return (
            <View key={step.id} style={styles.stepItem}>
              <View style={[styles.circle, isActive && styles.activeCircle]}>
                <Text style={[styles.circleText, isActive && styles.activeCircleText]}>
                  {step.id}
                </Text>
              </View>
              <Text style={[styles.label, isActive && styles.activeLabel]}>{step.label}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 0,
    marginBottom: 32,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '88%',
    minWidth: 300,
    maxWidth: 340,
    position: 'relative',
  },
  track: {
    position: 'absolute',
    top: 18,
    left: 18,
    right: 18,
    height: 2,
    backgroundColor: colors.primaryBorder,
  },
  stepItem: {
    flex: 1,
    alignItems: 'center',
  },
  circle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 1.5,
    borderColor: colors.primaryBorder,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeCircle: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  circleText: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.primary,
  },
  activeCircleText: {
    color: colors.surface,
  },
  label: {
    marginTop: 10,
    fontSize: 13,
    fontWeight: '700',
    color: colors.textSecondary,
    textAlign: 'center',
    width: '100%',
  },
  activeLabel: {
    color: colors.primary,
  },
});
