import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatbotCreateWithoutChannelInput } from './chatbot-create-without-channel.input';
import { ChatbotCreateOrConnectWithoutChannelInput } from './chatbot-create-or-connect-without-channel.input';
import { ChatbotUpsertWithoutChannelInput } from './chatbot-upsert-without-channel.input';
import { ChatbotWhereUniqueInput } from './chatbot-where-unique.input';
import { ChatbotUpdateWithoutChannelInput } from './chatbot-update-without-channel.input';

@InputType()
export class ChatbotUpdateOneRequiredWithoutChannelInput {

    @Field(() => ChatbotCreateWithoutChannelInput, {nullable:true})
    create?: ChatbotCreateWithoutChannelInput;

    @Field(() => ChatbotCreateOrConnectWithoutChannelInput, {nullable:true})
    connectOrCreate?: ChatbotCreateOrConnectWithoutChannelInput;

    @Field(() => ChatbotUpsertWithoutChannelInput, {nullable:true})
    upsert?: ChatbotUpsertWithoutChannelInput;

    @Field(() => ChatbotWhereUniqueInput, {nullable:true})
    connect?: ChatbotWhereUniqueInput;

    @Field(() => ChatbotUpdateWithoutChannelInput, {nullable:true})
    update?: ChatbotUpdateWithoutChannelInput;
}
