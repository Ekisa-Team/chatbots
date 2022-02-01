import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelCreateNestedOneWithoutChatbotInput } from '../channel/channel-create-nested-one-without-chatbot.input';
import { TemplateMessageCreateNestedManyWithoutChatbotInput } from '../template-message/template-message-create-nested-many-without-chatbot.input';

@InputType()
export class ChatbotCreateWithoutAppInput {

    @Field(() => String, {nullable:false})
    accessKey!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ChannelCreateNestedOneWithoutChatbotInput, {nullable:true})
    channel?: ChannelCreateNestedOneWithoutChatbotInput;

    @Field(() => TemplateMessageCreateNestedManyWithoutChatbotInput, {nullable:true})
    templateMessages?: TemplateMessageCreateNestedManyWithoutChatbotInput;
}
