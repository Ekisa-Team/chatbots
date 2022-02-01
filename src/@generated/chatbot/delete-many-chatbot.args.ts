import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChatbotWhereInput } from './chatbot-where.input';

@ArgsType()
export class DeleteManyChatbotArgs {

    @Field(() => ChatbotWhereInput, {nullable:true})
    where?: ChatbotWhereInput;
}
