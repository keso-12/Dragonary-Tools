import React, { ChangeEvent } from 'react';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import TextInput from 'components/shared/plainFields/input';
import SecurityIcon from '@material-ui/icons/Security';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import { DragonProps } from '../index';

type dragonCardProps = {
  title: string,
  dragonState: DragonProps,
  setDragonState: (value: DragonProps) => void
}

export default function DragonCard({ title, dragonState, setDragonState }: dragonCardProps) {
  const { attack, defense, intelligence } = dragonState;

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setDragonState({ ...dragonState, [evt.target.name]: value });
  };

  return (
    <Card style={{ width: '400px' }}>
      <CardHeader title={title} />
      <CardContent>
        <TextInput
          label="Attack"
          value={attack}
          name="attack"
          type="number"
          icon={<FlashOnIcon />}
          onChange={handleChange}
        />
        <TextInput
          label="Intelligence"
          value={intelligence}
          name="intelligence"
          type="number"
          icon={<PermIdentityIcon />}
          onChange={handleChange}
        />
        <TextInput
          label="Defense"
          value={defense}
          name="defense"
          type="number"
          icon={<SecurityIcon />}
          onChange={handleChange}
        />
      </CardContent>
    </Card>
  );
}
