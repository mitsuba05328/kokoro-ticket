export type ReceivedTicket = {
  id: string;
  title: string;
  placeholder: string;
};

export type TicketListTab = 'received' | 'sent' | 'used';

export type TicketStatus = 'unused' | 'used';

export type TicketListItem = {
  id: string;
  title: string;
  from: string;
  status: TicketStatus;
  tab: TicketListTab;
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

export const ticketListItems: TicketListItem[] = [
  {
    id: 'received-1',
    title: 'おつかれさま券',
    from: 'ママ',
    status: 'unused',
    tab: 'received',
  },
  {
    id: 'received-2',
    title: '肩たたき券',
    from: 'おとうさん',
    status: 'unused',
    tab: 'received',
  },
  {
    id: 'received-3',
    title: 'ぎゅー券',
    from: 'いもうと',
    status: 'unused',
    tab: 'received',
  },
  {
    id: 'received-4',
    title: 'だいすき券',
    from: 'ママ',
    status: 'used',
    tab: 'received',
  },
  {
    id: 'used-1',
    title: 'おてつだい券',
    from: 'おとうさん',
    status: 'used',
    tab: 'used',
  },
];
