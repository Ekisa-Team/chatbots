import { IsNotEmpty, IsObject, IsOptional } from 'class-validator';

export class SendMessageDto {
  @IsNotEmpty()
  to: string;

  @IsOptional()
  @IsObject()
  variables: Record<string, string>;
}
