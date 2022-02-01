import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppUpdateWithoutChatbotsInput } from './app-update-without-chatbots.input';
import { AppCreateWithoutChatbotsInput } from './app-create-without-chatbots.input';

@InputType()
export class AppUpsertWithoutChatbotsInput {

    @Field(() => AppUpdateWithoutChatbotsInput, {nullable:false})
    update!: AppUpdateWithoutChatbotsInput;

    @Field(() => AppCreateWithoutChatbotsInput, {nullable:false})
    create!: AppCreateWithoutChatbotsInput;
}
