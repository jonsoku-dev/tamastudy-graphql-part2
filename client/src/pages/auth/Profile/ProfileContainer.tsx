import React from 'react';
import { useQuery } from '@apollo/client';
import { GetUserDocument } from '../../../generated/graphql';

interface Props {}

const ProfileContainer = (props: Props) => {
  const { loading, error, data } = useQuery(GetUserDocument);
  console.log(data);
  return <div>ProfileContainer</div>;
};

export default ProfileContainer;
