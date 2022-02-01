import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MessagingProviderUpdateOneRequiredWithoutChannelsInput } from '../messaging-provider/messaging-provider-update-one-required-without-channels.input';
import { ChatbotUpdateOneRequiredWithoutChannelInput } from '../chatbot/chatbot-update-one-required-without-channel.input';

@InputType()
export class ChannelUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cellphone?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    accountSid?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    authToken?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    httpVerb?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    callbackUrl?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => MessagingProviderUpdateOneRequiredWithoutChannelsInput, {nullable:true})
    messagingProvider?: MessagingProviderUpdateOneRequiredWithoutChannelsInput;

    @Field(() => ChatbotUpdateOneRequiredWithoutChannelInput, {nullable:true})
    chatbot?: ChatbotUpdateOneRequiredWithoutChannelInput;
}
