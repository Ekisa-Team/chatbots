import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppCreateWithoutChatbotsInput } from './app-create-without-chatbots.input';
import { AppCreateOrConnectWithoutChatbotsInput } from './app-create-or-connect-without-chatbots.input';
import { AppWhereUniqueInput } from './app-where-unique.input';

@InputType()
export class AppCreateNestedOneWithoutChatbotsInput {

    @Field(() => AppCreateWithoutChatbotsInput, {nullable:true})
    create?: AppCreateWithoutChatbotsInput;

    @Field(() => AppCreateOrConnectWithoutChatbotsInput, {nullable:true})
    connectOrCreate?: AppCreateOrConnectWithoutChatbotsInput;

    @Field(() => AppWhereUniqueInput, {nullable:true})
    connect?: AppWhereUniqueInput;
}
