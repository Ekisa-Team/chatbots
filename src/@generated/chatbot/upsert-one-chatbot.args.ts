import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChatbotWhereUniqueInput } from './chatbot-where-unique.input';
import { ChatbotCreateInput } from './chatbot-create.input';
import { ChatbotUpdateInput } from './chatbot-update.input';

@ArgsType()
export class UpsertOneChatbotArgs {

    @Field(() => ChatbotWhereUniqueInput, {nullable:false})
    where!: ChatbotWhereUniqueInput;

    @Field(() => ChatbotCreateInput, {nullable:false})
    create!: ChatbotCreateInput;

    @Field(() => ChatbotUpdateInput, {nullable:false})
    update!: ChatbotUpdateInput;
}
