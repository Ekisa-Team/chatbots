import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatbotWhereInput } from './chatbot-where.input';

@InputType()
export class ChatbotRelationFilter {

    @Field(() => ChatbotWhereInput, {nullable:true})
    is?: ChatbotWhereInput;

    @Field(() => ChatbotWhereInput, {nullable:true})
    isNot?: ChatbotWhereInput;
}
