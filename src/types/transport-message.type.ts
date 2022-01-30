export type TransportMessage = {
  accountSid: string;
  authToken: string;
  from: string;
  to: string;
  body: string;
  mediaUrl?: string;
};
