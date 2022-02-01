import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatbotWhereInput } from './chatbot-where.input';

@InputType()
export class ChatbotListRelationFilter {

    @Field(() => ChatbotWhereInput, {nullable:true})
    every?: ChatbotWhereInput;

    @Field(() => ChatbotWhereInput, {nullable:true})
    some?: ChatbotWhereInput;

    @Field(() => ChatbotWhereInput, {nullable:true})
    none?: ChatbotWhereInput;
}
