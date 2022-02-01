import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppCreateWithoutChatbotsInput } from './app-create-without-chatbots.input';
import { AppCreateOrConnectWithoutChatbotsInput } from './app-create-or-connect-without-chatbots.input';
import { AppUpsertWithoutChatbotsInput } from './app-upsert-without-chatbots.input';
import { AppWhereUniqueInput } from './app-where-unique.input';
import { AppUpdateWithoutChatbotsInput } from './app-update-without-chatbots.input';

@InputType()
export class AppUpdateOneRequiredWithoutChatbotsInput {

    @Field(() => AppCreateWithoutChatbotsInput, {nullable:true})
    create?: AppCreateWithoutChatbotsInput;

    @Field(() => AppCreateOrConnectWithoutChatbotsInput, {nullable:true})
    connectOrCreate?: AppCreateOrConnectWithoutChatbotsInput;

    @Field(() => AppUpsertWithoutChatbotsInput, {nullable:true})
    upsert?: AppUpsertWithoutChatbotsInput;

    @Field(() => AppWhereUniqueInput, {nullable:true})
    connect?: AppWhereUniqueInput;

    @Field(() => AppUpdateWithoutChatbotsInput, {nullable:true})
    update?: AppUpdateWithoutChatbotsInput;
}
