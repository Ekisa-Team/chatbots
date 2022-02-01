import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TemplateMessageWhereUniqueInput } from './template-message-where-unique.input';
import { TemplateMessageUpdateWithoutChatbotInput } from './template-message-update-without-chatbot.input';
import { TemplateMessageCreateWithoutChatbotInput } from './template-message-create-without-chatbot.input';

@InputType()
export class TemplateMessageUpsertWithWhereUniqueWithoutChatbotInput {

    @Field(() => TemplateMessageWhereUniqueInput, {nullable:false})
    where!: TemplateMessageWhereUniqueInput;

    @Field(() => TemplateMessageUpdateWithoutChatbotInput, {nullable:false})
    update!: TemplateMessageUpdateWithoutChatbotInput;

    @Field(() => TemplateMessageCreateWithoutChatbotInput, {nullable:false})
    create!: TemplateMessageCreateWithoutChatbotInput;
}
