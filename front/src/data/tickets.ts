export type ReceivedTicket = {
  id: string;
  title: string;
  emoji: string;
  accent: string;
};

export const todayTicket = {
  title: 'おつかれさま券',
  message: 'いつもありがとう！',
  catEmoji: '🐱',
  catText: 'にゃ〜',
};

export const receivedTickets: ReceivedTicket[] = [
  { id: '1', title: 'ぎゅー券', emoji: '🐱', accent: '♡' },
  { id: '2', title: 'だいすき券', emoji: '🐱', accent: '✦' },
  { id: '3', title: 'おてつだい券', emoji: '🐾', accent: '☆' },
];
