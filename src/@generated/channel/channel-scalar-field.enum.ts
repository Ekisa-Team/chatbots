import { registerEnumType } from '@nestjs/graphql';

export enum ChannelScalarFieldEnum {
    id = "id",
    cellphone = "cellphone",
    accountSid = "accountSid",
    authToken = "authToken",
    httpVerb = "httpVerb",
    callbackUrl = "callbackUrl",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    messagingProviderId = "messagingProviderId",
    chatbotId = "chatbotId"
}


registerEnumType(ChannelScalarFieldEnum, { name: 'ChannelScalarFieldEnum', description: undefined })
