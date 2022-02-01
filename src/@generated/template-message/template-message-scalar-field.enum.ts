import { registerEnumType } from '@nestjs/graphql';

export enum TemplateMessageScalarFieldEnum {
    id = "id",
    message = "message",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    chatbotId = "chatbotId"
}


registerEnumType(TemplateMessageScalarFieldEnum, { name: 'TemplateMessageScalarFieldEnum', description: undefined })
