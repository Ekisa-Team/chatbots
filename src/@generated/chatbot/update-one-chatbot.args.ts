import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChatbotUpdateInput } from './chatbot-update.input';
import { ChatbotWhereUniqueInput } from './chatbot-where-unique.input';

@ArgsType()
export class UpdateOneChatbotArgs {

    @Field(() => ChatbotUpdateInput, {nullable:false})
    data!: ChatbotUpdateInput;

    @Field(() => ChatbotWhereUniqueInput, {nullable:false})
    where!: ChatbotWhereUniqueInput;
}
