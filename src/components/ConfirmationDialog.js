import { Button, FlexRow } from "./CommonComponent"
import { Model, DialogBox } from "./Model"

export default function ConfirmDiolog({ handleClose, show, headerText, detailText }) {

    const sendYes = () => handleClose(true);
    const sendNo = () => handleClose(false);

    return (
        <Model show={show}>
            <DialogBox>
                <h2>{headerText}</h2>
                <h5>{detailText}</h5>

                <FlexRow>
                    <Button color="danger" onClick={sendYes}>Yes</Button>
                    <Button onClick={sendNo}>No</Button>
                </FlexRow>
            </DialogBox>
        </Model>
    );

}