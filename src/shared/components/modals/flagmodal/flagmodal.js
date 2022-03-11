import React from 'react';
import Modal from '..';
import { ModalTitleIcon } from '..';
import CustomText from '../../customtext/customtext';
import { colorScheme } from '../../../../default';
import Height from '../../height/height';
import Button from '../../button/button';
import { ExclamationCircle, FlagFill } from 'react-bootstrap-icons';

function FlagModal({ ...props }) {
  document.body.style = `background: ${colorScheme.modalBodyBackground};`;

  return (
    <Modal>
      <ModalTitleIcon
        icon={<FlagFill size={20} color={colorScheme.danger} />}
        background={colorScheme.faintDanger}
      />
      <Height val={8} />
      <div className="modal-body-title">
        <CustomText type="h3" center={true} size={18}>
          You are about to flag this item.
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
        <Button className="modal-btn action-btn btn-danger" onClick={props.handleCancel}>
          Flag
        </Button>
      </div>
      <Height val={32} />
    </Modal>
  );
}

export default FlagModal;
