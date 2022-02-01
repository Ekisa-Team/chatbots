import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatbotCreateWithoutTemplateMessagesInput } from './chatbot-create-without-template-messages.input';
import { ChatbotCreateOrConnectWithoutTemplateMessagesInput } from './chatbot-create-or-connect-without-template-messages.input';
import { ChatbotWhereUniqueInput } from './chatbot-where-unique.input';

@InputType()
export class ChatbotCreateNestedOneWithoutTemplateMessagesInput {

    @Field(() => ChatbotCreateWithoutTemplateMessagesInput, {nullable:true})
    create?: ChatbotCreateWithoutTemplateMessagesInput;

    @Field(() => ChatbotCreateOrConnectWithoutTemplateMessagesInput, {nullable:true})
    connectOrCreate?: ChatbotCreateOrConnectWithoutTemplateMessagesInput;

    @Field(() => ChatbotWhereUniqueInput, {nullable:true})
    connect?: ChatbotWhereUniqueInput;
}
