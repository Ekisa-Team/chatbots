export interface ChannelStrategy {
  validate: () => boolean;
  sendMessage: () => Promise<void>;
}
