import { useState } from 'react';
import { Upload } from 'react-bootstrap-icons';
import './regupload.scss';

const RegisterationUploadInput = () => {
  const [filename, setFileName] = useState('');
  let nameArr = filename?.split('\\');
  let name = nameArr?.length - 1;

  return (
    <div className="file-upload">
      <button className="choose-button">
        <input
          type="file"
          accept="image/*, image/heic, image/heif"
          onChange={({ target }) => setFileName(target.value)}
        />
        Choose
      </button>
      <span>
        {filename != '' ? (
          <span style={{ fontSize: 12 }}>{nameArr[name]}</span>
        ) : (
          <span style={{ fontSize: 12 }}>No file Selected</span>
        )}
      </span>
    </div>
  );
};

export default RegisterationUploadInput;
