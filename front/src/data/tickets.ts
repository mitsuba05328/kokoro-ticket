export type ReceivedTicket = {
  id: string;
  title: string;
  placeholder: string;
};

export const todayTicket = {
  title: 'おつかれさま券',
  message: 'いつもありがとう！',
  placeholderTitle: 'イラスト挿入予定',
  placeholderSubtitle: '画像エリア',
};

export const receivedTickets: ReceivedTicket[] = [
  { id: '1', title: 'ぎゅー券', placeholder: '画像エリア' },
  { id: '2', title: 'だいすき券', placeholder: '画像エリア' },
  { id: '3', title: 'おてつだい券', placeholder: '画像エリア' },
];
