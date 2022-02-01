import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessagingProviderWhereInput } from './messaging-provider-where.input';

@ArgsType()
export class DeleteManyMessagingProviderArgs {

    @Field(() => MessagingProviderWhereInput, {nullable:true})
    where?: MessagingProviderWhereInput;
}
