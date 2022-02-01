import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelCreateWithoutChatbotInput } from './channel-create-without-chatbot.input';
import { ChannelCreateOrConnectWithoutChatbotInput } from './channel-create-or-connect-without-chatbot.input';
import { ChannelUpsertWithoutChatbotInput } from './channel-upsert-without-chatbot.input';
import { ChannelWhereUniqueInput } from './channel-where-unique.input';
import { ChannelUpdateWithoutChatbotInput } from './channel-update-without-chatbot.input';

@InputType()
export class ChannelUncheckedUpdateOneWithoutChatbotInput {

    @Field(() => ChannelCreateWithoutChatbotInput, {nullable:true})
    create?: ChannelCreateWithoutChatbotInput;

    @Field(() => ChannelCreateOrConnectWithoutChatbotInput, {nullable:true})
    connectOrCreate?: ChannelCreateOrConnectWithoutChatbotInput;

    @Field(() => ChannelUpsertWithoutChatbotInput, {nullable:true})
    upsert?: ChannelUpsertWithoutChatbotInput;

    @Field(() => ChannelWhereUniqueInput, {nullable:true})
    connect?: ChannelWhereUniqueInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ChannelUpdateWithoutChatbotInput, {nullable:true})
    update?: ChannelUpdateWithoutChatbotInput;
}
