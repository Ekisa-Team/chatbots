import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ChannelUncheckedCreateNestedOneWithoutChatbotInput } from '../channel/channel-unchecked-create-nested-one-without-chatbot.input';

@InputType()
export class ChatbotUncheckedCreateWithoutTemplateMessagesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    accessKey!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:false})
    appId!: number;

    @Field(() => ChannelUncheckedCreateNestedOneWithoutChatbotInput, {nullable:true})
    channel?: ChannelUncheckedCreateNestedOneWithoutChatbotInput;
}
