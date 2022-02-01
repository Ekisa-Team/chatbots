import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ChannelUncheckedUpdateOneWithoutChatbotInput } from '../channel/channel-unchecked-update-one-without-chatbot.input';

@InputType()
export class ChatbotUncheckedUpdateWithoutTemplateMessagesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    accessKey?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    appId?: IntFieldUpdateOperationsInput;

    @Field(() => ChannelUncheckedUpdateOneWithoutChatbotInput, {nullable:true})
    channel?: ChannelUncheckedUpdateOneWithoutChatbotInput;
}
