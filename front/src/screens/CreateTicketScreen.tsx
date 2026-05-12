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
import { CatIllustrationCard } from '../components/CatIllustrationCard';
import { DesignOptionCard } from '../components/DesignOptionCard';
import { IllustrationPlaceholder } from '../components/IllustrationPlaceholder';
import { StepIndicator } from '../components/StepIndicator';
import {
  TicketContentForm,
  TicketContentFormValue,
} from '../components/TicketContentForm';
import {
  catIllustrationOptions,
  createTicketSteps,
  ticketBackgroundOptions,
  ticketFrameOptions,
  TicketBackgroundOption,
  TicketFrameOption,
} from '../data/createTicket';
import { colors } from '../styles/colors';

const MIN_STEP = 1;
const MAX_STEP = 4;

export default function CreateTicketScreen() {
  const [currentStep, setCurrentStep] = useState(MIN_STEP);
  const [selectedCatIllustrationId, setSelectedCatIllustrationId] = useState(
    catIllustrationOptions[0].id,
  );
  const [selectedFrameId, setSelectedFrameId] = useState(ticketFrameOptions[0].id);
  const [selectedBackgroundId, setSelectedBackgroundId] = useState(
    ticketBackgroundOptions[0].id,
  );
  const [formValue, setFormValue] = useState<TicketContentFormValue>({
    title: '',
    message: '',
    expiresAt: '',
    recipient: '',
  });

  const selectedCatIllustration = catIllustrationOptions.find(
    (illustration) => illustration.id === selectedCatIllustrationId,
  );
  const selectedFrame = ticketFrameOptions.find((frame) => frame.id === selectedFrameId);
  const selectedBackground = ticketBackgroundOptions.find(
    (background) => background.id === selectedBackgroundId,
  );
  const isFirstStep = currentStep === MIN_STEP;
  const isLastStep = currentStep === MAX_STEP;

  const goToPreviousStep = () => {
    setCurrentStep((step) => Math.max(MIN_STEP, step - 1));
  };

  const goToNextStep = () => {
    setCurrentStep((step) => Math.min(MAX_STEP, step + 1));
  };

  const renderStepContent = () => {
    if (currentStep === 1) {
      return (
        <IllustrationSelection
          selectedIllustrationId={selectedCatIllustrationId}
          onSelectIllustration={setSelectedCatIllustrationId}
        />
      );
    }

    if (currentStep === 2) {
      return <ContentInput value={formValue} onChange={setFormValue} />;
    }

    if (currentStep === 3) {
      return (
        <DesignStep
          selectedFrameId={selectedFrameId}
          selectedBackgroundId={selectedBackgroundId}
          onSelectFrame={setSelectedFrameId}
          onSelectBackground={setSelectedBackgroundId}
        />
      );
    }

    return (
      <ConfirmStep
        illustrationName={selectedCatIllustration?.name ?? ''}
        value={formValue}
        frame={selectedFrame ?? ticketFrameOptions[0]}
        background={selectedBackground ?? ticketBackgroundOptions[0]}
      />
    );
  };

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
              <StepIndicator steps={createTicketSteps} activeStep={currentStep} />
            </View>

            {renderStepContent()}
          </ScrollView>

          <View style={styles.footer}>
            {isLastStep ? (
              <>
                <TouchableOpacity
                  style={styles.backButton}
                  activeOpacity={0.85}
                  onPress={goToPreviousStep}
                >
                  <Text style={styles.backButtonText}>戻る</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.saveButton} activeOpacity={0.85}>
                  <Text style={styles.saveButtonText}>保存</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <TouchableOpacity
                  style={[styles.backButton, isFirstStep && styles.disabledButton]}
                  activeOpacity={0.85}
                  onPress={goToPreviousStep}
                  disabled={isFirstStep}
                >
                  <Text style={styles.backButtonText}>戻る</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.nextButton}
                  activeOpacity={0.85}
                  onPress={goToNextStep}
                >
                  <Text style={styles.nextButtonText}>次へ</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

type IllustrationSelectionProps = {
  selectedIllustrationId: string;
  onSelectIllustration: (illustrationId: string) => void;
};

function IllustrationSelection({
  selectedIllustrationId,
  onSelectIllustration,
}: IllustrationSelectionProps) {
  return (
    <View>
      <StepHeading
        title="イラストを選ぼう"
        description="チケットに表示する猫のイラストを選んでね。"
      />

      <View style={styles.selectionGrid}>
        {catIllustrationOptions.map((illustration) => (
          <CatIllustrationCard
            key={illustration.id}
            name={illustration.name}
            selected={illustration.id === selectedIllustrationId}
            onPress={() => onSelectIllustration(illustration.id)}
          />
        ))}
      </View>
    </View>
  );
}

type ContentInputProps = {
  value: TicketContentFormValue;
  onChange: (value: TicketContentFormValue) => void;
};

function ContentInput({ value, onChange }: ContentInputProps) {
  return (
    <View>
      <StepHeading
        title="チケットの内容を書こう"
        description="名前とメッセージを入れて、贈りたいきもちを形にしよう。"
      />

      <View style={styles.illustrationSection}>
        <IllustrationPlaceholder />
      </View>

      <TicketContentForm value={value} onChange={onChange} />
    </View>
  );
}

type DesignStepProps = {
  selectedFrameId: string;
  selectedBackgroundId: string;
  onSelectFrame: (frameId: string) => void;
  onSelectBackground: (backgroundId: string) => void;
};

function DesignStep({
  selectedFrameId,
  selectedBackgroundId,
  onSelectFrame,
  onSelectBackground,
}: DesignStepProps) {
  return (
    <View>
      <StepHeading
        title="デザインを選ぼう"
        description="チケットの枠組みと背景色を選んでね。"
      />

      <Text style={styles.sectionTitle}>枠組み</Text>
      <View style={styles.designGrid}>
        {ticketFrameOptions.map((frame) => (
          <DesignOptionCard
            key={frame.id}
            label={frame.label}
            selected={frame.id === selectedFrameId}
            onPress={() => onSelectFrame(frame.id)}
            previewStyle={{
              borderStyle: frame.borderStyle,
              borderWidth: frame.borderWidth,
              backgroundColor: colors.surface,
            }}
          />
        ))}
      </View>

      <Text style={styles.sectionTitle}>背景色</Text>
      <View style={styles.designGrid}>
        {ticketBackgroundOptions.map((background) => (
          <DesignOptionCard
            key={background.id}
            label={background.label}
            selected={background.id === selectedBackgroundId}
            onPress={() => onSelectBackground(background.id)}
            previewStyle={{ backgroundColor: background.color }}
          />
        ))}
      </View>
    </View>
  );
}

type ConfirmStepProps = {
  illustrationName: string;
  value: TicketContentFormValue;
  frame: TicketFrameOption;
  background: TicketBackgroundOption;
};

function ConfirmStep({ illustrationName, value, frame, background }: ConfirmStepProps) {
  return (
    <View>
      <StepHeading
        title="内容を確認しよう"
        description="作ったチケットの内容を確認する画面です。"
      />

      <View style={styles.previewOuter}>
        <View
          style={[
            styles.ticketPreview,
            {
              backgroundColor: background.color,
              borderStyle: frame.borderStyle,
              borderWidth: frame.borderWidth,
            },
          ]}
        >
          <Text style={styles.previewTitle}>{value.title || 'チケット名'}</Text>
          <Text style={styles.previewMessage}>{value.message || 'メッセージ'}</Text>

          <View style={styles.previewIllustration}>
            <Text style={styles.previewIllustrationTitle}>イラスト挿入予定</Text>
            <Text style={styles.previewIllustrationSubtitle}>
              {illustrationName || '猫イラスト'}
            </Text>
          </View>

          <View style={styles.previewMeta}>
            <Text style={styles.previewMetaText}>{value.recipient || '贈る相手 未設定'}</Text>
            <Text style={styles.previewMetaText}>{value.expiresAt || '有効期限 未設定'}</Text>
          </View>
        </View>
      </View>

      <View style={styles.confirmCard}>
        <ConfirmRow label="イラスト" value={illustrationName} />
        <ConfirmRow label="枠組み" value={frame.label} />
        <ConfirmRow label="背景色" value={background.label} />
      </View>
    </View>
  );
}

type StepHeadingProps = {
  title: string;
  description: string;
};

function StepHeading({ title, description }: StepHeadingProps) {
  return (
    <View style={styles.headingBlock}>
      <Text style={styles.heading}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

type ConfirmRowProps = {
  label: string;
  value: string;
};

function ConfirmRow({ label, value }: ConfirmRowProps) {
  return (
    <View style={styles.confirmRow}>
      <Text style={styles.confirmLabel}>{label}</Text>
      <Text style={styles.confirmValue}>{value || '未入力'}</Text>
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
    paddingTop: 30,
    paddingBottom: 150,
  },
  stepSection: {
    width: '100%',
    alignItems: 'center',
  },
  headingBlock: {
    alignItems: 'center',
    marginBottom: 24,
  },
  heading: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.textPrimary,
    textAlign: 'center',
  },
  description: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '700',
    color: colors.textSecondary,
    textAlign: 'center',
  },
  illustrationSection: {
    marginBottom: 26,
  },
  selectionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '800',
    color: colors.textPrimary,
    marginBottom: 12,
    marginLeft: 4,
  },
  designGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  previewOuter: {
    borderRadius: 28,
    backgroundColor: colors.primaryPale,
    padding: 8,
    marginBottom: 18,
  },
  ticketPreview: {
    borderRadius: 24,
    borderColor: colors.primaryBorder,
    paddingHorizontal: 18,
    paddingTop: 22,
    paddingBottom: 18,
    alignItems: 'center',
  },
  previewTitle: {
    fontSize: 22,
    lineHeight: 30,
    fontWeight: '800',
    color: colors.primary,
    textAlign: 'center',
  },
  previewMessage: {
    marginTop: 8,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
    color: colors.textPrimary,
    textAlign: 'center',
  },
  previewIllustration: {
    marginTop: 20,
    width: '100%',
    minHeight: 150,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.placeholderBorder,
    backgroundColor: colors.placeholderBackground,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  previewIllustrationTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.primaryAccent,
  },
  previewIllustrationSubtitle: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: '600',
    color: colors.textMuted,
  },
  previewMeta: {
    width: '100%',
    marginTop: 16,
    gap: 6,
  },
  previewMetaText: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '700',
    color: colors.textSecondary,
    textAlign: 'center',
  },
  confirmCard: {
    borderRadius: 22,
    borderWidth: 1.5,
    borderColor: colors.placeholderBorder,
    backgroundColor: colors.placeholderBackground,
    paddingHorizontal: 18,
    paddingVertical: 8,
  },
  confirmRow: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  confirmLabel: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '800',
    color: colors.textSecondary,
    marginBottom: 5,
  },
  confirmValue: {
    fontSize: 16,
    lineHeight: 23,
    fontWeight: '800',
    color: colors.textPrimary,
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 22,
    paddingTop: 16,
    paddingBottom: 24,
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: colors.divider,
  },
  backButton: {
    flex: 1,
    height: 58,
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: colors.primaryBorder,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButton: {
    flex: 1.4,
    height: 58,
    borderRadius: 18,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButton: {
    flex: 1.4,
    height: 58,
    borderRadius: 18,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledButton: {
    opacity: 0.46,
  },
  backButtonText: {
    fontSize: 21,
    fontWeight: '800',
    color: colors.primary,
    letterSpacing: 1,
  },
  nextButtonText: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.surface,
    letterSpacing: 1,
  },
  saveButtonText: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.surface,
    letterSpacing: 1,
  },
});
