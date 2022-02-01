import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatbotCreateWithoutAppInput } from './chatbot-create-without-app.input';
import { ChatbotCreateOrConnectWithoutAppInput } from './chatbot-create-or-connect-without-app.input';
import { ChatbotUpsertWithWhereUniqueWithoutAppInput } from './chatbot-upsert-with-where-unique-without-app.input';
import { ChatbotWhereUniqueInput } from './chatbot-where-unique.input';
import { ChatbotUpdateWithWhereUniqueWithoutAppInput } from './chatbot-update-with-where-unique-without-app.input';
import { ChatbotUpdateManyWithWhereWithoutAppInput } from './chatbot-update-many-with-where-without-app.input';
import { ChatbotScalarWhereInput } from './chatbot-scalar-where.input';

@InputType()
export class ChatbotUncheckedUpdateManyWithoutAppInput {

    @Field(() => [ChatbotCreateWithoutAppInput], {nullable:true})
    create?: Array<ChatbotCreateWithoutAppInput>;

    @Field(() => [ChatbotCreateOrConnectWithoutAppInput], {nullable:true})
    connectOrCreate?: Array<ChatbotCreateOrConnectWithoutAppInput>;

    @Field(() => [ChatbotUpsertWithWhereUniqueWithoutAppInput], {nullable:true})
    upsert?: Array<ChatbotUpsertWithWhereUniqueWithoutAppInput>;

    @Field(() => [ChatbotWhereUniqueInput], {nullable:true})
    connect?: Array<ChatbotWhereUniqueInput>;

    @Field(() => [ChatbotWhereUniqueInput], {nullable:true})
    set?: Array<ChatbotWhereUniqueInput>;

    @Field(() => [ChatbotWhereUniqueInput], {nullable:true})
    disconnect?: Array<ChatbotWhereUniqueInput>;

    @Field(() => [ChatbotWhereUniqueInput], {nullable:true})
    delete?: Array<ChatbotWhereUniqueInput>;

    @Field(() => [ChatbotUpdateWithWhereUniqueWithoutAppInput], {nullable:true})
    update?: Array<ChatbotUpdateWithWhereUniqueWithoutAppInput>;

    @Field(() => [ChatbotUpdateManyWithWhereWithoutAppInput], {nullable:true})
    updateMany?: Array<ChatbotUpdateManyWithWhereWithoutAppInput>;

    @Field(() => [ChatbotScalarWhereInput], {nullable:true})
    deleteMany?: Array<ChatbotScalarWhereInput>;
}
