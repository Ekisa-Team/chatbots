import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { compare, hash } from 'bcrypt';
import { SecurityConfig } from 'src/config/config.types';

@Injectable()
export class CryptService {
  get bcryptSaltRounds(): string | number {
    const securityConfig = this.configService.get<SecurityConfig>('security');
    const saltOrRounds = securityConfig.bcryptSaltOrRound;

    return Number.isInteger(Number(saltOrRounds)) ? Number(saltOrRounds) : saltOrRounds;
  }

  constructor(private configService: ConfigService) {}

  generateAccessKey(appId: number, chatbotId: number): Promise<string> {
    const composed = `${appId}-${chatbotId}`;
    return hash(composed, this.bcryptSaltRounds);
  }

  validateAccessKey(appId: number, chatbotId: number, hashedKey: string): Promise<boolean> {
    const composed = `${appId}-${chatbotId}`;
    return compare(composed, hashedKey);
  }
}
