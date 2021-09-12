import React, {useState} from "react"

import { Tabs,Tab,TabContent,Content } from "../components/Tabs"



const Dashboard = () => {
    const [active, setActive] = useState(0);


    const activeTab = (event) =>{
        const index = parseInt(event.target.id,0);
        if(index !== active){
            // console.log(index);
        setActive(index);
         
        }
    } 

    return(
        <Tabs>
            <Tab id={0} onClick={activeTab} active={active === 0}> 
                Button 1
            </Tab>
            <Tab  id={1} onClick={activeTab} active={active === 1}>
                Button 2
            </Tab>

            <TabContent>
                <Content active={active === 0}>
                    Content 1
                </Content>
                <Content active={active === 1}>
                    Content 2
                </Content>
            </TabContent>
        </Tabs>
    )
       
    
}

export default Dashboard 
