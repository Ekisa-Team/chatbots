import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatbotCreateWithoutChannelInput } from './chatbot-create-without-channel.input';
import { ChatbotCreateOrConnectWithoutChannelInput } from './chatbot-create-or-connect-without-channel.input';
import { ChatbotWhereUniqueInput } from './chatbot-where-unique.input';

@InputType()
export class ChatbotCreateNestedOneWithoutChannelInput {

    @Field(() => ChatbotCreateWithoutChannelInput, {nullable:true})
    create?: ChatbotCreateWithoutChannelInput;

    @Field(() => ChatbotCreateOrConnectWithoutChannelInput, {nullable:true})
    connectOrCreate?: ChatbotCreateOrConnectWithoutChannelInput;

    @Field(() => ChatbotWhereUniqueInput, {nullable:true})
    connect?: ChatbotWhereUniqueInput;
}
