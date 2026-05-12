export type StepItem = {
  id: number;
  label: string;
};

export type CatIllustrationItem = {
  id: string;
  name: string;
};

export type TicketFrameOption = {
  id: string;
  label: string;
  borderStyle: 'solid' | 'dashed';
  borderWidth: number;
};

export type TicketBackgroundOption = {
  id: string;
  label: string;
  color: string;
};

export const createTicketSteps: StepItem[] = [
  { id: 1, label: 'イラスト選択' },
  { id: 2, label: '内容入力' },
  { id: 3, label: 'デザイン' },
  { id: 4, label: '確認' },
];

export const catIllustrationOptions: CatIllustrationItem[] = [
  { id: 'cat-soft', name: 'やさしい猫' },
  { id: 'cat-smile', name: 'にこにこ猫' },
  { id: 'cat-sleepy', name: 'のんびり猫' },
  { id: 'cat-happy', name: 'うれしい猫' },
];

export const ticketFrameOptions: TicketFrameOption[] = [
  { id: 'simple', label: 'シンプル', borderStyle: 'solid', borderWidth: 1.5 },
  { id: 'dashed', label: '点線枠', borderStyle: 'dashed', borderWidth: 1.5 },
  { id: 'soft', label: 'ふんわり枠', borderStyle: 'solid', borderWidth: 2 },
];

export const ticketBackgroundOptions: TicketBackgroundOption[] = [
  { id: 'blue', label: '水色', color: '#EAF6FF' },
  { id: 'white', label: '白', color: '#FFFFFF' },
  { id: 'pink', label: '薄いピンク', color: '#FFF0F5' },
];
