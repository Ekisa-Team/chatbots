import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelUpdateWithoutChatbotInput } from './channel-update-without-chatbot.input';
import { ChannelCreateWithoutChatbotInput } from './channel-create-without-chatbot.input';

@InputType()
export class ChannelUpsertWithoutChatbotInput {

    @Field(() => ChannelUpdateWithoutChatbotInput, {nullable:false})
    update!: ChannelUpdateWithoutChatbotInput;

    @Field(() => ChannelCreateWithoutChatbotInput, {nullable:false})
    create!: ChannelCreateWithoutChatbotInput;
}
