import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatbotWhereUniqueInput } from './chatbot-where-unique.input';
import { ChatbotCreateWithoutAppInput } from './chatbot-create-without-app.input';

@InputType()
export class ChatbotCreateOrConnectWithoutAppInput {

    @Field(() => ChatbotWhereUniqueInput, {nullable:false})
    where!: ChatbotWhereUniqueInput;

    @Field(() => ChatbotCreateWithoutAppInput, {nullable:false})
    create!: ChatbotCreateWithoutAppInput;
}
