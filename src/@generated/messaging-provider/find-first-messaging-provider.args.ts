import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessagingProviderWhereInput } from './messaging-provider-where.input';
import { MessagingProviderOrderByWithRelationInput } from './messaging-provider-order-by-with-relation.input';
import { MessagingProviderWhereUniqueInput } from './messaging-provider-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MessagingProviderScalarFieldEnum } from './messaging-provider-scalar-field.enum';

@ArgsType()
export class FindFirstMessagingProviderArgs {

    @Field(() => MessagingProviderWhereInput, {nullable:true})
    where?: MessagingProviderWhereInput;

    @Field(() => [MessagingProviderOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MessagingProviderOrderByWithRelationInput>;

    @Field(() => MessagingProviderWhereUniqueInput, {nullable:true})
    cursor?: MessagingProviderWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MessagingProviderScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MessagingProviderScalarFieldEnum>;
}
