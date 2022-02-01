import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { ChannelListRelationFilter } from '../channel/channel-list-relation-filter.input';

@InputType()
export class MessagingProviderWhereInput {

    @Field(() => [MessagingProviderWhereInput], {nullable:true})
    AND?: Array<MessagingProviderWhereInput>;

    @Field(() => [MessagingProviderWhereInput], {nullable:true})
    OR?: Array<MessagingProviderWhereInput>;

    @Field(() => [MessagingProviderWhereInput], {nullable:true})
    NOT?: Array<MessagingProviderWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => ChannelListRelationFilter, {nullable:true})
    channels?: ChannelListRelationFilter;
}
