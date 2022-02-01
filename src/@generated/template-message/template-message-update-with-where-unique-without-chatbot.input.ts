import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TemplateMessageWhereUniqueInput } from './template-message-where-unique.input';
import { TemplateMessageUpdateWithoutChatbotInput } from './template-message-update-without-chatbot.input';

@InputType()
export class TemplateMessageUpdateWithWhereUniqueWithoutChatbotInput {

    @Field(() => TemplateMessageWhereUniqueInput, {nullable:false})
    where!: TemplateMessageWhereUniqueInput;

    @Field(() => TemplateMessageUpdateWithoutChatbotInput, {nullable:false})
    data!: TemplateMessageUpdateWithoutChatbotInput;
}
