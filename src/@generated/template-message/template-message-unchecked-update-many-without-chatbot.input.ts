import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TemplateMessageCreateWithoutChatbotInput } from './template-message-create-without-chatbot.input';
import { TemplateMessageCreateOrConnectWithoutChatbotInput } from './template-message-create-or-connect-without-chatbot.input';
import { TemplateMessageUpsertWithWhereUniqueWithoutChatbotInput } from './template-message-upsert-with-where-unique-without-chatbot.input';
import { TemplateMessageWhereUniqueInput } from './template-message-where-unique.input';
import { TemplateMessageUpdateWithWhereUniqueWithoutChatbotInput } from './template-message-update-with-where-unique-without-chatbot.input';
import { TemplateMessageUpdateManyWithWhereWithoutChatbotInput } from './template-message-update-many-with-where-without-chatbot.input';
import { TemplateMessageScalarWhereInput } from './template-message-scalar-where.input';

@InputType()
export class TemplateMessageUncheckedUpdateManyWithoutChatbotInput {

    @Field(() => [TemplateMessageCreateWithoutChatbotInput], {nullable:true})
    create?: Array<TemplateMessageCreateWithoutChatbotInput>;

    @Field(() => [TemplateMessageCreateOrConnectWithoutChatbotInput], {nullable:true})
    connectOrCreate?: Array<TemplateMessageCreateOrConnectWithoutChatbotInput>;

    @Field(() => [TemplateMessageUpsertWithWhereUniqueWithoutChatbotInput], {nullable:true})
    upsert?: Array<TemplateMessageUpsertWithWhereUniqueWithoutChatbotInput>;

    @Field(() => [TemplateMessageWhereUniqueInput], {nullable:true})
    connect?: Array<TemplateMessageWhereUniqueInput>;

    @Field(() => [TemplateMessageWhereUniqueInput], {nullable:true})
    set?: Array<TemplateMessageWhereUniqueInput>;

    @Field(() => [TemplateMessageWhereUniqueInput], {nullable:true})
    disconnect?: Array<TemplateMessageWhereUniqueInput>;

    @Field(() => [TemplateMessageWhereUniqueInput], {nullable:true})
    delete?: Array<TemplateMessageWhereUniqueInput>;

    @Field(() => [TemplateMessageUpdateWithWhereUniqueWithoutChatbotInput], {nullable:true})
    update?: Array<TemplateMessageUpdateWithWhereUniqueWithoutChatbotInput>;

    @Field(() => [TemplateMessageUpdateManyWithWhereWithoutChatbotInput], {nullable:true})
    updateMany?: Array<TemplateMessageUpdateManyWithWhereWithoutChatbotInput>;

    @Field(() => [TemplateMessageScalarWhereInput], {nullable:true})
    deleteMany?: Array<TemplateMessageScalarWhereInput>;
}
