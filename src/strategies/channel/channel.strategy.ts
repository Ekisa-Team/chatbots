import { TransportMessage } from 'src/types/transport-message.type';

export interface ChannelStrategy {
  validate: () => boolean;
  sendMessage: (transport: TransportMessage) => Promise<void>;
}
