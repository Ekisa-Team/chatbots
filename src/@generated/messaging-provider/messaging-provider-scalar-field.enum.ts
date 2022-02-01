import { registerEnumType } from '@nestjs/graphql';

export enum MessagingProviderScalarFieldEnum {
    id = "id",
    name = "name"
}


registerEnumType(MessagingProviderScalarFieldEnum, { name: 'MessagingProviderScalarFieldEnum', description: undefined })
