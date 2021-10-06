import React, {useState, useEffect} from "react"

import { Button, FlexRow,Select } from "../../../components/CommonComponent"
import { Model, DialogBox } from "../../../components/Model"
import Spinner from "../../../components/Spinner";

import { getMembers } from "../../../api/memberAPI";

export default function LendDialog({handleConfirm, show}){
    const [member, setMember] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [members, setMembers] = useState(null);

    const setConfirm = () => {
        if(member !== ""){
            handleConfirm(true,member);
        }
        else{
            window.alert("Please Select the member");
        }
    };

    const sendCancel = () => handleConfirm(false,null);

    useEffect(() => {
        setIsLoading(true);
        const response = getMembers();
        setMembers(response);
        setIsLoading(false);
    },[]);

    return (
        <Model show={show}>
            <DialogBox>
            <h1> Lend Book </h1>
            <h4>Select Member to Continue and Confirm</h4>
            <FlexRow>
            {!isLoading && members !== null ?(
                <>
                  <Select
                  id="member-id"
                  onChange={(e) => setMember(e.target.value)}
                  value={member}>
                      <option value="">--Please Select Member--</option>
                      {
                          members.map((member,index)=> (
                              <option key={index} value={member.id}>{member.name}</option>
                          ))
                      }
  
                  </Select>
                  </>
  
            ) : (<Spinner />) }
              
               
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
