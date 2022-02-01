import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelCreateNestedOneWithoutChatbotInput } from '../channel/channel-create-nested-one-without-chatbot.input';
import { AppCreateNestedOneWithoutChatbotsInput } from '../app/app-create-nested-one-without-chatbots.input';

@InputType()
export class ChatbotCreateWithoutTemplateMessagesInput {

    @Field(() => String, {nullable:false})
    accessKey!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ChannelCreateNestedOneWithoutChatbotInput, {nullable:true})
    channel?: ChannelCreateNestedOneWithoutChatbotInput;

    @Field(() => AppCreateNestedOneWithoutChatbotsInput, {nullable:false})
    app!: AppCreateNestedOneWithoutChatbotsInput;
}
