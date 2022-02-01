import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChatbotUpdateManyMutationInput } from './chatbot-update-many-mutation.input';
import { ChatbotWhereInput } from './chatbot-where.input';

@ArgsType()
export class UpdateManyChatbotArgs {

    @Field(() => ChatbotUpdateManyMutationInput, {nullable:false})
    data!: ChatbotUpdateManyMutationInput;

    @Field(() => ChatbotWhereInput, {nullable:true})
    where?: ChatbotWhereInput;
}
