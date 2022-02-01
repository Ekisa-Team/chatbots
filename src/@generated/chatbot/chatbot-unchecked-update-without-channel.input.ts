import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { TemplateMessageUncheckedUpdateManyWithoutChatbotInput } from '../template-message/template-message-unchecked-update-many-without-chatbot.input';

@InputType()
export class ChatbotUncheckedUpdateWithoutChannelInput {

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

    @Field(() => TemplateMessageUncheckedUpdateManyWithoutChatbotInput, {nullable:true})
    templateMessages?: TemplateMessageUncheckedUpdateManyWithoutChatbotInput;
}
