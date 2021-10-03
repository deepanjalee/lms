import { Button, FlexRow } from "./CommonComponent"
import { Model, Dialogbox } from "./Model"

export default function ConfirmDiolog({ handleClose, show, headerText, detailText }) {

    const sendYes = () => handleClose(true);
    const sendNo = () => handleClose(false);

    return (
        <Model>
            <Dialogbox>
                <h2>{headerText}</h2>
                <h2>{detailText}</h2>

                <FlexRow>
                    <Button onClick={sendYes}>Yes</Button>
                    <Button onClick={sendNo}>No</Button>
                </FlexRow>
            </Dialogbox>
        </Model>
    );

}