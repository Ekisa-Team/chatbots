import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatbotWhereUniqueInput } from './chatbot-where-unique.input';
import { ChatbotCreateWithoutTemplateMessagesInput } from './chatbot-create-without-template-messages.input';

@InputType()
export class ChatbotCreateOrConnectWithoutTemplateMessagesInput {

    @Field(() => ChatbotWhereUniqueInput, {nullable:false})
    where!: ChatbotWhereUniqueInput;

    @Field(() => ChatbotCreateWithoutTemplateMessagesInput, {nullable:false})
    create!: ChatbotCreateWithoutTemplateMessagesInput;
}
