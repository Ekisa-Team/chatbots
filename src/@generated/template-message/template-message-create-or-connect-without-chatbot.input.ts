import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TemplateMessageWhereUniqueInput } from './template-message-where-unique.input';
import { TemplateMessageCreateWithoutChatbotInput } from './template-message-create-without-chatbot.input';

@InputType()
export class TemplateMessageCreateOrConnectWithoutChatbotInput {

    @Field(() => TemplateMessageWhereUniqueInput, {nullable:false})
    where!: TemplateMessageWhereUniqueInput;

    @Field(() => TemplateMessageCreateWithoutChatbotInput, {nullable:false})
    create!: TemplateMessageCreateWithoutChatbotInput;
}
