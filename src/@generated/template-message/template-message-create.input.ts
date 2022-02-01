import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ChatbotCreateNestedOneWithoutTemplateMessagesInput } from '../chatbot/chatbot-create-nested-one-without-template-messages.input';

@InputType()
export class TemplateMessageCreateInput {

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.MaxLength(300)
    message!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ChatbotCreateNestedOneWithoutTemplateMessagesInput, {nullable:false})
    chatbot!: ChatbotCreateNestedOneWithoutTemplateMessagesInput;
}
