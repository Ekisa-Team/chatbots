import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatbotUpdateWithoutChannelInput } from './chatbot-update-without-channel.input';
import { ChatbotCreateWithoutChannelInput } from './chatbot-create-without-channel.input';

@InputType()
export class ChatbotUpsertWithoutChannelInput {

    @Field(() => ChatbotUpdateWithoutChannelInput, {nullable:false})
    update!: ChatbotUpdateWithoutChannelInput;

    @Field(() => ChatbotCreateWithoutChannelInput, {nullable:false})
    create!: ChatbotCreateWithoutChannelInput;
}
