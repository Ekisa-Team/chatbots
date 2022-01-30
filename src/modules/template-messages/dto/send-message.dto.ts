import { IsNotEmpty, IsObject } from 'class-validator';

export class SendMessageDto {
  @IsNotEmpty()
  to: string;

  @IsObject()
  variables: Record<string, string>;
}
