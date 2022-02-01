import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatbotScalarWhereInput } from './chatbot-scalar-where.input';
import { ChatbotUpdateManyMutationInput } from './chatbot-update-many-mutation.input';

@InputType()
export class ChatbotUpdateManyWithWhereWithoutAppInput {

    @Field(() => ChatbotScalarWhereInput, {nullable:false})
    where!: ChatbotScalarWhereInput;

    @Field(() => ChatbotUpdateManyMutationInput, {nullable:false})
    data!: ChatbotUpdateManyMutationInput;
}
