import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ChannelUpdateOneWithoutChatbotInput } from '../channel/channel-update-one-without-chatbot.input';
import { AppUpdateOneRequiredWithoutChatbotsInput } from '../app/app-update-one-required-without-chatbots.input';

@InputType()
export class ChatbotUpdateWithoutTemplateMessagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    accessKey?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ChannelUpdateOneWithoutChatbotInput, {nullable:true})
    channel?: ChannelUpdateOneWithoutChatbotInput;

    @Field(() => AppUpdateOneRequiredWithoutChatbotsInput, {nullable:true})
    app?: AppUpdateOneRequiredWithoutChatbotsInput;
}
