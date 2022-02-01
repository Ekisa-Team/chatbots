import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ChatbotUpdateOneRequiredWithoutTemplateMessagesInput } from '../chatbot/chatbot-update-one-required-without-template-messages.input';

@InputType()
export class TemplateMessageUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    message?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ChatbotUpdateOneRequiredWithoutTemplateMessagesInput, {nullable:true})
    chatbot?: ChatbotUpdateOneRequiredWithoutTemplateMessagesInput;
}
