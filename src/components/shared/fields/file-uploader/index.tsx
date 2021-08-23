import React, { Fragment } from 'react';
import { Field } from 'react-final-form';
import { FormHelperText } from '@material-ui/core';
import Dropzone from './drop-zone';

interface DropZoneFieldProps {
  name: string;
  fileType: 'documents' | 'resumes' | 'images' | 'avatars'
  fieldLabel?: string;
  required?: boolean;
  accept?: string | string[];
  avatarUrl?: string;
  initialThumbs?: JSX.Element[];
}

/**
 * @param name
 * @param fileType
 * @param required
 * @param fieldLabel
 * @param accept
 * @param avatarUrl
*/
const FieldDropZone = ({
  name,
  fileType,
  required,
  accept,
  fieldLabel,
  avatarUrl,
  initialThumbs,
}: DropZoneFieldProps) => (
  <Field name={name} required={required}>
    {({ input, meta }) => (
      <Fragment>
        <Dropzone
          avatarUrl={avatarUrl}
          fieldLabel={fieldLabel}
          accept={accept}
          {...input}
          initialThumbs={initialThumbs}
          fileType={fileType}
        />
        {meta.error && meta.touched && <FormHelperText error>{meta.error}</FormHelperText>}
      </Fragment>
    )}
  </Field>
);

export default FieldDropZone;
