import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppWhereUniqueInput } from './app-where-unique.input';
import { AppCreateWithoutChatbotsInput } from './app-create-without-chatbots.input';

@InputType()
export class AppCreateOrConnectWithoutChatbotsInput {

    @Field(() => AppWhereUniqueInput, {nullable:false})
    where!: AppWhereUniqueInput;

    @Field(() => AppCreateWithoutChatbotsInput, {nullable:false})
    create!: AppCreateWithoutChatbotsInput;
}
