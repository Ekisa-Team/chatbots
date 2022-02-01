import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatbotUpdateWithoutTemplateMessagesInput } from './chatbot-update-without-template-messages.input';
import { ChatbotCreateWithoutTemplateMessagesInput } from './chatbot-create-without-template-messages.input';

@InputType()
export class ChatbotUpsertWithoutTemplateMessagesInput {

    @Field(() => ChatbotUpdateWithoutTemplateMessagesInput, {nullable:false})
    update!: ChatbotUpdateWithoutTemplateMessagesInput;

    @Field(() => ChatbotCreateWithoutTemplateMessagesInput, {nullable:false})
    create!: ChatbotCreateWithoutTemplateMessagesInput;
}
