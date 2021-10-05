import React, {useState} from "react"

import { Button, FlexRow,Select } from "../../../components/CommonComponent"
import { Model, DialogBox } from "../../../components/Model"

export default function LendDialog({handleConfirm, show}){
    const [member, setMember] = useState("");

    const setConfirm = () => handleConfirm(true, member);

    const sendCancel = () => handleConfirm(false,null);

    return (
        <Model show={show}>
            <DialogBox>
            <h1> Lend Book </h1>
            <h2>Select Member to Continue and Confirm</h2>
            <FlexRow>
                <Select
                id="member-id"
                onChange={(e) => setMember(e.target.value)}
                value={member}>
                    <option value="">Select the Member</option>
                    <option value="Saman">Saman</option>
                    <option value="Kamal">Kamal</option>
                    <option value="Bimal">Bimal</option>
                    <option value="Nuwan">Nuwan</option>

                </Select>

               
            </FlexRow>
            <FlexRow >
            <Button onClick={setConfirm}>
                    Confirm
                </Button>
                <Button color="danger" onClick={sendCancel} >
                    Cancel
                </Button>
            </FlexRow>
            </DialogBox>
            


            
        </Model>
    );

}
