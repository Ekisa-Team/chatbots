import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessagingProviderWhereInput } from './messaging-provider-where.input';

@InputType()
export class MessagingProviderRelationFilter {

    @Field(() => MessagingProviderWhereInput, {nullable:true})
    is?: MessagingProviderWhereInput;

    @Field(() => MessagingProviderWhereInput, {nullable:true})
    isNot?: MessagingProviderWhereInput;
}
