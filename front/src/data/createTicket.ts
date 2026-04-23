export type StepItem = {
  id: number;
  label: string;
};

export type TemplateItem = {
  id: string;
  title: string;
};

export type CharacterItem = {
  id: string;
  name: string;
};

export const createTicketSteps: StepItem[] = [
  { id: 1, label: 'テンプレ' },
  { id: 2, label: '内容入力' },
  { id: 3, label: 'デザイン' },
  { id: 4, label: '確認' },
];

export const templateOptions: TemplateItem[] = [
  { id: 'otsukare', title: 'おつかれさま券' },
  { id: 'katataki', title: '肩たたき券' },
  { id: 'massage', title: 'マッサージ券' },
  { id: 'asobu', title: '一緒にあそぶ券' },
  { id: 'gyu', title: 'ぎゅー券' },
  { id: 'nandemo', title: 'なんでもきく券' },
];

export const characterOptions: CharacterItem[] = [
  { id: 'cat-a', name: 'ねこA' },
  { id: 'cat-b', name: 'ねこB' },
  { id: 'cat-c', name: 'ねこC' },
];
