import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessagingProviderWhereUniqueInput } from './messaging-provider-where-unique.input';

@ArgsType()
export class FindUniqueMessagingProviderArgs {

    @Field(() => MessagingProviderWhereUniqueInput, {nullable:false})
    where!: MessagingProviderWhereUniqueInput;
}
