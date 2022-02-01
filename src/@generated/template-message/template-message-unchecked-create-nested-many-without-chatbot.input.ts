import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TemplateMessageCreateWithoutChatbotInput } from './template-message-create-without-chatbot.input';
import { TemplateMessageCreateOrConnectWithoutChatbotInput } from './template-message-create-or-connect-without-chatbot.input';
import { TemplateMessageWhereUniqueInput } from './template-message-where-unique.input';

@InputType()
export class TemplateMessageUncheckedCreateNestedManyWithoutChatbotInput {

    @Field(() => [TemplateMessageCreateWithoutChatbotInput], {nullable:true})
    create?: Array<TemplateMessageCreateWithoutChatbotInput>;

    @Field(() => [TemplateMessageCreateOrConnectWithoutChatbotInput], {nullable:true})
    connectOrCreate?: Array<TemplateMessageCreateOrConnectWithoutChatbotInput>;

    @Field(() => [TemplateMessageWhereUniqueInput], {nullable:true})
    connect?: Array<TemplateMessageWhereUniqueInput>;
}
