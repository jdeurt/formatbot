import {
  CommandInteraction,
  ContextMenuInteraction,
  Message,
} from 'discord.js';
import { Container } from '../container/container';
export interface ICommand<
  T extends typeof COMMAND_TYPE[keyof typeof COMMAND_TYPE]
> {
  name: string;
  description: string;
  type: T;
  execute(interaction: Mapped[T], container: Container, args?: string[]): void;
}

export enum COMMAND_TYPE {
  LEGACY = 'LEGACY',
  SLASH = 'MESSAGE',
  CHANNEL = 'CHAT_INPUT',
}

interface Mapped {
  [COMMAND_TYPE.CHANNEL]: CommandInteraction;
  [COMMAND_TYPE.SLASH]: ContextMenuInteraction;
  [COMMAND_TYPE.LEGACY]: Message;
}
