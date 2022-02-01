import { registerEnumType } from '@nestjs/graphql';

export enum ChatbotScalarFieldEnum {
    id = "id",
    accessKey = "accessKey",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    appId = "appId"
}


registerEnumType(ChatbotScalarFieldEnum, { name: 'ChatbotScalarFieldEnum', description: undefined })
