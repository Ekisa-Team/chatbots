import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChatbotWhereUniqueInput } from './chatbot-where-unique.input';

@ArgsType()
export class FindUniqueChatbotArgs {

    @Field(() => ChatbotWhereUniqueInput, {nullable:false})
    where!: ChatbotWhereUniqueInput;
}
