import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatbotCreateWithoutTemplateMessagesInput } from './chatbot-create-without-template-messages.input';
import { ChatbotCreateOrConnectWithoutTemplateMessagesInput } from './chatbot-create-or-connect-without-template-messages.input';
import { ChatbotUpsertWithoutTemplateMessagesInput } from './chatbot-upsert-without-template-messages.input';
import { ChatbotWhereUniqueInput } from './chatbot-where-unique.input';
import { ChatbotUpdateWithoutTemplateMessagesInput } from './chatbot-update-without-template-messages.input';

@InputType()
export class ChatbotUpdateOneRequiredWithoutTemplateMessagesInput {

    @Field(() => ChatbotCreateWithoutTemplateMessagesInput, {nullable:true})
    create?: ChatbotCreateWithoutTemplateMessagesInput;

    @Field(() => ChatbotCreateOrConnectWithoutTemplateMessagesInput, {nullable:true})
    connectOrCreate?: ChatbotCreateOrConnectWithoutTemplateMessagesInput;

    @Field(() => ChatbotUpsertWithoutTemplateMessagesInput, {nullable:true})
    upsert?: ChatbotUpsertWithoutTemplateMessagesInput;

    @Field(() => ChatbotWhereUniqueInput, {nullable:true})
    connect?: ChatbotWhereUniqueInput;

    @Field(() => ChatbotUpdateWithoutTemplateMessagesInput, {nullable:true})
    update?: ChatbotUpdateWithoutTemplateMessagesInput;
}
