import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelCreateNestedOneWithoutChatbotInput } from '../channel/channel-create-nested-one-without-chatbot.input';
import { AppCreateNestedOneWithoutChatbotsInput } from '../app/app-create-nested-one-without-chatbots.input';
import { TemplateMessageCreateNestedManyWithoutChatbotInput } from '../template-message/template-message-create-nested-many-without-chatbot.input';

@InputType()
export class ChatbotCreateInput {

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

    @Field(() => TemplateMessageCreateNestedManyWithoutChatbotInput, {nullable:true})
    templateMessages?: TemplateMessageCreateNestedManyWithoutChatbotInput;
}
