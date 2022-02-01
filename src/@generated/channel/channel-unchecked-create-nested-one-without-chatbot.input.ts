import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelCreateWithoutChatbotInput } from './channel-create-without-chatbot.input';
import { ChannelCreateOrConnectWithoutChatbotInput } from './channel-create-or-connect-without-chatbot.input';
import { ChannelWhereUniqueInput } from './channel-where-unique.input';

@InputType()
export class ChannelUncheckedCreateNestedOneWithoutChatbotInput {

    @Field(() => ChannelCreateWithoutChatbotInput, {nullable:true})
    create?: ChannelCreateWithoutChatbotInput;

    @Field(() => ChannelCreateOrConnectWithoutChatbotInput, {nullable:true})
    connectOrCreate?: ChannelCreateOrConnectWithoutChatbotInput;

    @Field(() => ChannelWhereUniqueInput, {nullable:true})
    connect?: ChannelWhereUniqueInput;
}
