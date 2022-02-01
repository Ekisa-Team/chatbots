import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessagingProviderCreateInput } from './messaging-provider-create.input';

@ArgsType()
export class CreateOneMessagingProviderArgs {

    @Field(() => MessagingProviderCreateInput, {nullable:false})
    data!: MessagingProviderCreateInput;
}
