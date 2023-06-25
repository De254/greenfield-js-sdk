import * as StorageEnums from '@bnb-chain/greenfield-cosmos-types/greenfield/storage/common';
import * as PermissionTypes from '@bnb-chain/greenfield-cosmos-types/greenfield/permission/common';
import * as TimestampTypes from '@bnb-chain/greenfield-cosmos-types/google/protobuf/timestamp';
import Long from 'long';

type TKeyValue = { [key: string]: string };

export { Long, StorageEnums, PermissionTypes, TimestampTypes, TKeyValue };
