import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelWhereUniqueInput } from './channel-where-unique.input';
import { ChannelCreateWithoutChatbotInput } from './channel-create-without-chatbot.input';

@InputType()
export class ChannelCreateOrConnectWithoutChatbotInput {

    @Field(() => ChannelWhereUniqueInput, {nullable:false})
    where!: ChannelWhereUniqueInput;

    @Field(() => ChannelCreateWithoutChatbotInput, {nullable:false})
    create!: ChannelCreateWithoutChatbotInput;
}
