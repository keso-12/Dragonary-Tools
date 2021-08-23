import React, { Fragment, useState } from 'react';
import { useDropzone, DropzoneOptions } from 'react-dropzone';
import {
  Box,
  IconButton,
  Typography,
  LinearProgress,
  Avatar,
  Button,
} from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import { FieldInputProps } from 'react-final-form';
import fileUploader from 'utils/file-uploader';

interface CustomDropZoneProps extends FieldInputProps<any, HTMLElement>, DropzoneOptions {
  fieldLabel?: string;
  avatarUrl?: string;
  initialThumbs?: JSX.Element[];
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function Dropzone({
  onChange,
  fileType,
  accept,
  fieldLabel = 'Click here to upload file',
  avatarUrl,
  initialThumbs,
}: CustomDropZoneProps) {
  const [files, setFiles] = useState([]);
  const [uploadState, setUploadState] = useState<{
    isUploading: boolean,
    error: string | null,
  }>({
    isUploading: false,
    error: null,
  });
  const { getRootProps, getInputProps, open } = useDropzone({
    multiple: false,
    accept,
    onDrop: async (acceptedFiles) => {
      setUploadState({ ...uploadState, isUploading: true });
      try {
        await sleep(1000); // 1 second buffer
        const filePath = await fileUploader(fileType, acceptedFiles);
        if (filePath) {
          if (fileType === 'avatars') {
            acceptedFiles.map((file) => Object.assign(file, {
              preview: URL.createObjectURL(file),
            }));
            setFiles(acceptedFiles);
          } else {
            setFiles(acceptedFiles);
          }
          onChange(filePath);
        }
        setUploadState({ ...uploadState, isUploading: false });
      } catch (error) {
        setUploadState({ isUploading: false, error: error.message });
      }
    },
  });

  const removeFile = (file: File) => () => {
    const newFiles = [...files];
    newFiles.splice(newFiles.indexOf(file), 1);
    setFiles(newFiles);
  };

  const renderUploadImageButton = (
    <Box paddingLeft={5}>
      <Button style={{ height: '40px', width: '100%', color: '#fff' }} component="button" type="button" variant="contained" color="primary" onClick={open}>Upload Image</Button>
      {uploadState.isUploading && <LinearProgress color="secondary" />}
      <Box paddingTop={1}>
        <Typography variant="caption" color="textSecondary">Acceptable formats: jpg, png only</Typography>
        <Box>
          <Typography variant="caption" color="textSecondary">Max file size is 500kb and min. size 70kb</Typography>
        </Box>
      </Box>
    </Box>
  );

  const thumbs = initialThumbs || files.map((file) => (
    <Box style={{ display: 'flex', justifyContent: 'flex-start' }} component="div" key={file.name}>
      {fileType === 'avatars'
        ? (
          <Box style={{ display: 'flex' }}>
            <Avatar style={{ width: '15rem', height: '15rem' }} src={file.preview} alt="" />
            <Box alignItems="center" style={{ display: 'flex' }}>
              {renderUploadImageButton}
            </Box>
          </Box>
        )
        : <Typography variant="caption" style={{ fontWeight: 'bold' }}>{file.name}</Typography>}
      {fileType !== 'avatars' ? <IconButton style={{ height: 0, padding: 0 }} type="button" onClick={removeFile(file)}><CancelIcon /></IconButton> : <div />}
    </Box>
  ));

  const avatarBox = (
    <Box style={{ display: 'flex' }}>
      <Box style={{ display: files.length <= 0 ? 'block' : 'none' }}>
        <Avatar className="uploader__avatar" alt="" src={avatarUrl} />
      </Box>
      {fileType === 'avatars' ? (
        <Box alignItems="center" style={{ display: files.length > 0 ? 'none' : 'flex' }}>
          {renderUploadImageButton}
        </Box>
      ) : <div />}
    </Box>
  );

  return (
    <Fragment>
      <Box component="div" style={{ display: 'flex', alignItems: 'center' }}>
        <Box component="div" {...getRootProps()}>
          <Box component="input" {...getInputProps()} />
          <Typography variant="caption" style={{ marginRight: '1rem' }}>{fieldLabel}</Typography>
        </Box>
        {avatarUrl ? avatarBox : (
          <Box style={{ display: 'flex' }}>
            <Box style={{ display: files.length <= 0 ? 'block' : 'none' }}>
              {fileType === 'avatars' ? <Avatar className="uploader__avatar" alt="" /> : <div />}
            </Box>
            {fileType === 'avatars' ? (
              <Box alignItems="center" style={{ display: files.length > 0 ? 'none' : 'flex' }}>
                {renderUploadImageButton}
              </Box>
            ) : <div />}
          </Box>
        )}
        <Box component="aside">{thumbs}</Box>
      </Box>
      {fileType !== 'avatars' && uploadState.isUploading && <LinearProgress color="secondary" />}
    </Fragment>
  );
}

export default Dropzone;
