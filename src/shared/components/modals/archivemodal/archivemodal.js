import React from 'react';
import Modal from '..';
import { ModalTitleIcon } from '..';
import CustomText from '../../customtext/customtext';
import { colorScheme } from '../../../../default';
import Height from '../../height/height';
import Button from '../../button/button';
import { ExclamationCircle } from 'react-bootstrap-icons';

function ArchiveModal({ ...props }) {
  document.body.style = `background: ${colorScheme.modalBodyBackground};`;
  return (
    <Modal>
      <ModalTitleIcon
        icon={<ExclamationCircle size={20} color={colorScheme.primary} />}
        background={colorScheme.faintPrimary}
      />
      <Height val={8} />
      <div className="modal-body-title">
        <CustomText type="h3" center={true} size={18}>
          You are about to archive this item.
        </CustomText>
      </div>
      <Height val={10} />
      <CustomText type="p" color={colorScheme.gray} center={true} size={13.5}>
        Are you sure?
      </CustomText>
      <Height val={22} />
      <div className="row right ">
        <Button className="modal-btn cancel-btn" onClick={props.handleCancel}>
          Cancel
        </Button>
        <Button className="modal-btn action-btn btn-primary" onClick={props.handleCancel}>
          Archive
        </Button>
      </div>
      <Height val={32} />
    </Modal>
  );
}

export default ArchiveModal;
