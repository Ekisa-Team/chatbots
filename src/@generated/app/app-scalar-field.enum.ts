import { registerEnumType } from '@nestjs/graphql';

export enum AppScalarFieldEnum {
    id = "id",
    name = "name",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(AppScalarFieldEnum, { name: 'AppScalarFieldEnum', description: undefined })
