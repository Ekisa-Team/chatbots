import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChatbotWhereInput } from './chatbot-where.input';
import { ChatbotOrderByWithRelationInput } from './chatbot-order-by-with-relation.input';
import { ChatbotWhereUniqueInput } from './chatbot-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ChatbotScalarFieldEnum } from './chatbot-scalar-field.enum';

@ArgsType()
export class FindFirstChatbotArgs {

    @Field(() => ChatbotWhereInput, {nullable:true})
    where?: ChatbotWhereInput;

    @Field(() => [ChatbotOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ChatbotOrderByWithRelationInput>;

    @Field(() => ChatbotWhereUniqueInput, {nullable:true})
    cursor?: ChatbotWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ChatbotScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ChatbotScalarFieldEnum>;
}
