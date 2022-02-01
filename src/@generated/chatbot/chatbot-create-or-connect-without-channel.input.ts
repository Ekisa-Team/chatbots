import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatbotWhereUniqueInput } from './chatbot-where-unique.input';
import { ChatbotCreateWithoutChannelInput } from './chatbot-create-without-channel.input';

@InputType()
export class ChatbotCreateOrConnectWithoutChannelInput {

    @Field(() => ChatbotWhereUniqueInput, {nullable:false})
    where!: ChatbotWhereUniqueInput;

    @Field(() => ChatbotCreateWithoutChannelInput, {nullable:false})
    create!: ChatbotCreateWithoutChannelInput;
}
